import * as React from 'react';

type Props = {
  className?: string;
  onClick?: () => void;
  children: JSX.Element | JSX.Element[];
};

const Code = ({children, className, onClick}: Props): JSX.Element => (
  <div className={`font-mono py-3 px-5 rounded-md bg-gray-800 max-w-lg ${className ?? ''}`} onClick={onClick}>
    {children}
  </div>
);

export default Code;
