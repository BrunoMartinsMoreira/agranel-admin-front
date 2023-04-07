export const calculateProfitMargin = (salePrice: number, costPrice: number) => {
  const profitMargin = ((salePrice - costPrice) / costPrice) * 100;
  return parseFloat(profitMargin.toFixed(2));
};
