const CURRENCT_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: "USD",
  style: "currency",
});

export function formactCurrency(number: number) {
  return CURRENCT_FORMATTER.format(number);
}
