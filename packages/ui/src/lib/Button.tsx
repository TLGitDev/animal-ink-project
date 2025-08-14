import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  icon?: React.ReactNode;
  children: React.ReactNode;
};

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md',
  loading = false,
  icon,
  className = '', 
  disabled,
  children,
  ...props 
}) => {
  const base = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantStyles = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500',
    secondary: 'bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-500'
  };
  
  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg'
  };
  
  const stateStyles = loading || disabled ? 'opacity-50 cursor-not-allowed' : '';
  
  const buttonClasses = [
    base,
    variantStyles[variant],
    sizeStyles[size],
    stateStyles,
    className
  ].filter(Boolean).join(' ');
  
  return (
    <button 
      className={buttonClasses} 
      disabled={loading || disabled}
      {...props}
    >
      {icon}
      {children}
    </button>
  );
};
