import React from 'react';

export type IconProps = React.SVGProps<SVGSVGElement> & {
  size?: number;
};

export function IconPlay({ size = 24, ...props }: IconProps) {
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
        d="M512,0C229.2,0,0,229.2,0,512s229.2,512,512,512s512-229.2,512-512S794.8,0,512,0z M689,539.1l-256,160 c-5.2,3.2-11.1,4.9-17,4.9c-5.3,0-10.7-1.3-15.5-4c-10.2-5.6-16.5-16.3-16.5-28V352c0-11.6,6.3-22.3,16.5-28 c10.2-5.7,22.6-5.3,32.5,0.8l256,160c9.4,5.9,15,16.1,15,27.1S698.3,533.3,689,539.1z"
        fill="currentColor"
      />
    </svg>
  );
}
