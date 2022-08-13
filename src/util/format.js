export const formatPrice = (price) => {
  if (price) {
    return `${price.toLocaleString()} 원`;
  }
  return '';
};
