export const getPaymentField = (
  paymentFrom: number | '',
  paymentTo: number | '',
  currency: string,
) => {
  if (paymentFrom && paymentTo) {
    return `${paymentFrom} - ${paymentTo} ${currency}`;
  }
  if (paymentFrom && !paymentTo) {
    return `от ${paymentFrom} ${currency}`;
  }
  if (!paymentFrom && paymentTo) {
    return `${paymentTo} ${currency}`;
  }
  return 'не указана';
};
