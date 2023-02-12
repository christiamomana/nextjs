export const formatterCurrency = (
  value: number,
  maximumFractionDigits = 2
): string => {
  try {
    const formatter = new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
      maximumFractionDigits,
    });
    if (isNaN(Number(value))) {
      return formatter.format(value);
    } else {
      return formatter.format(Number(value));
    }
  } catch (error) {
    return String(value);
  }
};
