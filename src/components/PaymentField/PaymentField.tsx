import { Text } from '@mantine/core';
import React, { FC } from 'react';

const getPaymentField = (paymentFrom: number | '', paymentTo: number | '', currency: string) => {
  if (paymentFrom && paymentTo) {
    return (
      <>
        {paymentFrom} - {paymentTo} {currency}
      </>
    );
  }
  if (paymentFrom && !paymentTo) {
    return (
      <>
        от {paymentFrom} {currency}
      </>
    );
  }
  if (!paymentFrom && paymentTo) {
    return (
      <>
        {paymentTo} {currency}
      </>
    );
  }
  return <>не указана</>;
};

interface PaymentFieldProps {
  paymentFrom: number | '';
  paymentTo: number | '';
  currency: string;
  fontSize: string;
  mediaFS: string;
}

const PaymentField: FC<PaymentFieldProps> = ({
  currency,
  paymentFrom,
  paymentTo,
  fontSize,
  mediaFS,
}) => {
  return (
    <Text
      sx={(theme) => ({
        fontSize: fontSize,
        fontWeight: theme.other.fontWeights.bold,
        lineHeight: theme.lineHeight,
        [`@media (max-width: ${theme.breakpoints.md})`]: {
          fontSize: mediaFS,
        },
      })}
    >
      з/п {getPaymentField(paymentFrom, paymentTo, currency)}
    </Text>
  );
};

export default PaymentField;
