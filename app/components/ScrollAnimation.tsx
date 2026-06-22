'use client';

import { ReactNode } from 'react';
import { useScrollAnimation } from '@/app/hooks/useScrollAnimation';

interface ScrollAnimationProps {
  children: ReactNode;
  animation: 'fade' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scale' | 'blur';
  delay?: number;
  className?: string;
  threshold?: number;
}

export function ScrollAnimation({
  children,
  animation,
  delay = 0,
  className = '',
  threshold = 0.15,
}: ScrollAnimationProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold });

  const animationMap = {
    fade: 'animate-fade-in',
    slideUp: 'animate-slide-up',
    slideLeft: 'animate-slide-left',
    slideRight: 'animate-slide-right',
    scale: 'animate-scale-up',
    blur: 'animate-blur-to-clean',
  };

  const delayClass = delay ? `animate-delay-${delay}` : '';
  const animationClass = isVisible ? animationMap[animation] : '';

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`${animationClass} ${delayClass} ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
      }}
    >
      {children}
    </div>
  );
}
