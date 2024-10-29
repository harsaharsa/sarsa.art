import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../animations/logo_outlined.json';

interface AnimationProps {
  width?: number;
  height?: number;
  className?: string;
  isInline?: boolean;
}

export const Logo = React.forwardRef<HTMLDivElement, AnimationProps>(
  ({ height = 400, className = '', isInline = false }, ref) => {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    };

    return (
      <div
        className={`${className} ${isInline ? 'mx-auto' : 'fixed top-0 right-[840px]'}`}
        ref={ref}
        style={{
          marginTop: '48px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          pointerEvents: isInline ? 'none' : 'auto',
          width: '100%',
          maxWidth: '840px'
        }}
      >
        <Lottie
          options={defaultOptions}
          height={height}
          width="100%"
        />
      </div>
    );
  }
);
