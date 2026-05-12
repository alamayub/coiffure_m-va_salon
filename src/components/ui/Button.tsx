import { motion } from 'motion/react';
import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '../../lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    const variants = {
      primary: 'bg-luxury-black text-white hover:bg-black/90 transition-colors',
      secondary: 'bg-gold text-white hover:bg-gold/90 transition-colors',
      outline: 'border border-luxury-black text-luxury-black hover:bg-luxury-black hover:text-white transition-all',
      ghost: 'text-luxury-black hover:bg-warm-gray/50 transition-colors',
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-8 py-3 text-sm font-medium tracking-widest uppercase',
      lg: 'px-12 py-4 text-base font-medium tracking-widest uppercase',
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          'inline-flex items-center justify-center focus:outline-none disabled:opacity-50 disabled:pointer-events-none',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';
