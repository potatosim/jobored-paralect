import { Text } from '@mantine/core';
import React, { FC } from 'react';

const getPaymentField = (from: number | '', to: number | '', currency: string) => {
  if (from && to) {
    return (
      <>
        {from} - {to} {currency}
      </>
    );
  }
  if (from && !to) {
    return (
      <>
        от {from} {currency}
      </>
    );
  }
  if (!from && to) {
    return (
      <>
        {to} {currency}
      </>
    );
  }
  return <>не указана</>;
};

interface PaymentFieldProps {
  paymentFrom: number | '';
  paymentTo: number | '';
  currency: string;
}

const PaymentField: FC<PaymentFieldProps> = ({ currency, paymentFrom, paymentTo }) => {
  return <Text fw={600}>з/п {getPaymentField(paymentFrom, paymentTo, currency)}</Text>;
};

export default PaymentField;
