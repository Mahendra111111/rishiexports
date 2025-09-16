import React from 'react';

interface PlaceholderImageProps {
  text?: string;
  width?: string | number;
  height?: string | number;
  className?: string;
  bgColor?: string;
  textColor?: string;
}

export default function PlaceholderImage({
  text = 'Placeholder Image',
  width = '100%',
  height = '100%',
  className = '',
  bgColor = 'bg-muted',
  textColor = 'text-muted-foreground'
}: PlaceholderImageProps) {
  return (
    <div 
      className={`flex items-center justify-center ${bgColor} ${textColor} ${className}`}
      style={{ 
        width: typeof width === 'number' ? `${width}px` : width,
        height: typeof height === 'number' ? `${height}px` : height,
        minHeight: '100%',
        objectFit: 'cover',
      }}
    >
      <span className="text-center px-4 text-sm sm:text-base">{text}</span>
    </div>
  );
}