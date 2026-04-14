import React from 'react';

export type IconProps = React.SVGProps<SVGSVGElement> & {
  size?: number;
};

export function IconClock({ size = 24, ...props }: IconProps) {
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
        d="M512,1C230.2,1,1,230.2,1,512s229.2,511,511,511s511-229.2,511-511S793.8,1,512,1z M749.2,567H512 c-30.2,0-54.8-24.5-54.8-54.8V275.1c0-30.2,24.5-54.8,54.8-54.8c30.2,0,54.8,24.5,54.8,54.8v182.4h182.4 c30.2,0,54.8,24.5,54.8,54.8C803.9,542.5,779.4,567,749.2,567z"
        fill="currentColor"
      />
    </svg>
  );
}
