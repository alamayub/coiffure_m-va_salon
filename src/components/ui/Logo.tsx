import { Sparkles } from 'lucide-react';
import { cn } from '../../lib/utils';

interface LogoProps {
  className?: string;
  iconSize?: number;
  textSize?: string;
  subtextSize?: string;
  light?: boolean;
}

export const Logo = ({ 
  className, 
  iconSize = 24, 
  textSize = 'text-2xl md:text-3xl', 
  subtextSize = 'text-[10px] md:text-[12px]',
  light = false 
}: LogoProps) => {
  return (
    <a href="/" className={cn("group flex flex-col items-center", className)}>
      <div className="flex items-center space-x-2">
        <div className={cn(
          "relative flex items-center justify-center w-8 h-8 md:w-10 md:h-10 border border-gold/30 rounded-full group-hover:bg-gold transition-all duration-500",
          light ? "border-white/20" : ""
        )}>
          <Sparkles 
            size={iconSize} 
            className={cn(
              "text-gold group-hover:text-white transition-colors duration-500",
              light ? "text-white" : ""
            )} 
          />
        </div>
        <div className="flex flex-col items-start -space-y-1">
          <span className={cn(
            "font-serif tracking-[0.2em] uppercase leading-none",
            textSize,
            light ? "text-white" : "text-luxury-black"
          )}>
            Méva
          </span>
          <span className={cn(
            "font-serif tracking-[0.4em] uppercase text-gold",
            subtextSize
          )}>
            Coiffure
          </span>
        </div>
      </div>
    </a>
  );
};
