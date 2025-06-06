import { describe, it, expect, vi, beforeEach } from 'vitest'
import { defineEventHandler, getQuery, setResponseStatus } from 'h3'

// Mock the h3 functions
vi.mock('h3', async (importOriginal) => {
  const original = await importOriginal()
  return {
    ...original,
    defineEventHandler: vi.fn((handler) => handler),
    getQuery: vi.fn(),
    setResponseStatus: vi.fn(),
  }
})

// Import the handler after mocking (important for the mocks to apply)
let handler: any

describe('GET /api/products', () => {
  beforeEach(async () => {
    // Dynamically import the handler to ensure mocks are applied before module evaluation
    const module = await import('./products')
    handler = module.default
    vi.clearAllMocks()
  })

  it('should return all products if no query parameters are provided', async () => {
    (getQuery as any).mockReturnValue({})
    const event = { res: {} } as any
    const result = await handler(event)
    expect(result.length).toBe(3)
    expect(result[0].name).toBe('Product A')
  })

  it('should filter products by name', async () => {
    (getQuery as any).mockReturnValue({ name: 'Product A' })
    const event = { res: {} } as any
    const result = await handler(event)
    expect(result.length).toBe(1)
    expect(result[0].name).toBe('Product A')
  })

  it('should filter products by maximum price', async () => {
    (getQuery as any).mockReturnValue({ price: '15' }) // query params are strings initially
    const event = { res: {} } as any
    const result = await handler(event)
    expect(result.length).toBe(2)
    expect(result.find((p: any) => p.name === 'Product B')).toBeUndefined()
  })

  it('should filter products by category', async () => {
    (getQuery as any).mockReturnValue({ category: 'Category 1' })
    const event = { res: {} } as any
    const result = await handler(event)
    expect(result.length).toBe(2)
    expect(result.every((p: any) => p.category === 'Category 1')).toBe(true)
  })

  it('should filter products by availability', async () => {
    (getQuery as any).mockReturnValue({ availability: 'unavailable' })
    const event = { res: {} } as any
    const result = await handler(event)
    expect(result.length).toBe(1)
    expect(result[0].availability).toBe('unavailable')
  })

  it('should handle combined filters', async () => {
    (getQuery as any).mockReturnValue({ name: 'Product', price: '15', category: 'Category 1' })
    const event = { res: {} } as any
    const result = await handler(event)
    expect(result.length).toBe(1)
    expect(result[0].name).toBe('Product A')
  })

  it('should return 400 for invalid name (too short)', async () => {
    (getQuery as any).mockReturnValue({ name: 'Pr' })
    const event = { res: {} } as any
    const result = await handler(event)
    expect(setResponseStatus).toHaveBeenCalledWith(event.res, 400)
    expect(result.errors).toBeDefined()
    expect(result.errors[0].message).toBe('Name must be at least 3 characters long')
  })

  it('should return 400 for invalid price (not a number)', async () => {
    (getQuery as any).mockReturnValue({ price: 'abc' })
    const event = { res: {} } as any
    const result = await handler(event)
    expect(setResponseStatus).toHaveBeenCalledWith(event.res, 400)
    expect(result.errors).toBeDefined()
    expect(result.errors[0].message).toBe('Expected number, received nan')
  })

  it('should return 400 for invalid availability', async () => {
    (getQuery as any).mockReturnValue({ availability: 'maybe' })
    const event = { res: {} } as any
    const result = await handler(event)
    expect(setResponseStatus).toHaveBeenCalledWith(event.res, 400)
    expect(result.errors).toBeDefined()
    expect(result.errors[0].message).toContain("Invalid enum value. Expected 'available' | 'unavailable', received 'maybe'")
  })
})
