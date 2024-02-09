export function formatCurrency(
  value: number,
  local: string = "pt-PT",
  currency: string = "EUR",
) {
  return value.toLocaleString(local, {
    style: "currency",
    currency: currency,
  });
}
