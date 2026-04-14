import React from 'react';

export type IconProps = React.SVGProps<SVGSVGElement> & {
  size?: number;
};

export function IconChat({ size = 24, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1024 1024"
      width={size}
      height={size}
      aria-hidden={props['aria-label'] ? undefined : true}
      focusable="false"
      {...props}
    >
      <path
        d="M512,37C236.3,37,12,238.9,12,487c0,86.7,27.4,170.8,79.5,243.4c-9.8,108.9-36.2,189.8-74.6,228.1 c-5.1,5.1-6.3,12.8-3.1,19.2c2.8,5.7,8.7,9.2,14.9,9.2c0.8,0,1.5,0,2.3-0.2c6.7-1,163.5-23.5,276.9-89c64.4,26,133,39.1,204,39.1 c275.7,0,500-201.9,500-450S787.7,37,512,37z"
        fill="currentColor"
      />
    </svg>
  );
}
