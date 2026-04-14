import React from 'react';

export type IconProps = React.SVGProps<SVGSVGElement> & {
  size?: number;
};

export function IconFacebook({ size = 24, ...props }: IconProps) {
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
        d="M386.4,221.1c0,24.2,0,132.3,0,132.3h-96.9v161.8h96.9V996h199.1V515.2h133.6c0,0,12.5-77.6,18.6-162.4 c-17.4,0-151.4,0-151.4,0s0-94.1,0-110.6c0-16.5,21.7-38.8,43.2-38.8c21.4,0,66.6,0,108.5,0c0-22,0-98.1,0-168.4 c-55.9,0-119.5,0-147.5,0C381.4,35,386.4,196.9,386.4,221.1z"
        fill="currentColor"
      />
    </svg>
  );
}
