import React, { FC, PropsWithChildren } from 'react';

const Main: FC<PropsWithChildren> = ({ children }) => {
  return <main>{children}</main>;
};

export default Main;
