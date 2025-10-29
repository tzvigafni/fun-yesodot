import React from 'react';

export const Card = React.forwardRef(({ className = '', ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`rounded-xl border bg-card text-card-foreground shadow ${className}`}
      {...props}
    />
  );
});
Card.displayName = 'Card';

export const CardContent = React.forwardRef(({ className = '', ...props }, ref) => {
  return (
    <div ref={ref} className={`p-6 ${className}`} {...props} />
  );
});
CardContent.displayName = 'CardContent';
