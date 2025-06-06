import fetch from 'node-fetch';

async function testApi() {
  const port = process.env.NUXT_PORT || 3000; // Use environment variable or default
  const url = `http://localhost:${port}/cv-data.json`; // Corrected URL
  console.log(`Testing API endpoint: ${url}`);
  try {
    const response = await fetch(url);

    if (response.status !== 200) {
      console.error(`Test Failed: Expected status 200, got ${response.status}`);
      console.error('Response body:', await response.text());
      process.exit(1);
    }
    console.log('Status Code: OK (200)');

    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      console.error(`Test Failed: Expected Content-Type application/json, got ${contentType}`);
      process.exit(1);
    }
    console.log('Content-Type: OK (application/json)');

    const data = await response.json();
    console.log('JSON Parsed: OK');

    const expectedKeys = [
      'professionalSummary',
      'experiences',
      'projects',
      'education',
      'awards',
      'languages',
      'skills'
    ];
    let allKeysPresent = true;
    for (const key of expectedKeys) {
      if (!(key in data)) {
        console.error(`Test Failed: Expected key "${key}" not found in response.`);
        allKeysPresent = false;
      }
    }

    if (!allKeysPresent) {
      console.error('Test Failed: Not all expected keys were present.');
      process.exit(1);
    }
    console.log('All Expected Keys Present: OK');
    console.log('API Test Passed Successfully!');

  } catch (error) {
    console.error('Test Failed with error:', error);
    process.exit(1);
  }
}

testApi();
