import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary';
};

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', className = '', ...props }) => {
  const base = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50';
  const style = variant === 'primary'
    ? 'bg-yellow-600 text-white hover:bg-yellow-700 focus:ring-yellow-500'
    : 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500';
  return (
    <button className={`${base} ${style} px-4 py-2 ${className}`} {...props} />
  );
};
