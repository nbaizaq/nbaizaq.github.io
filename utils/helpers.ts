export function formatDate(date?: Date) {
  if (!date) return "Present";

  return date.toLocaleDateString(["en"], {
    year: "numeric",
    month: "short",
  });
}
