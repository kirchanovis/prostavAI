import React from 'react';

export type IconProps = React.SVGProps<SVGSVGElement> & {
  size?: number;
};

export function IconLike({ size = 24, ...props }: IconProps) {
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
        d="M127,631.4c60.2,79.8,138.4,143.9,219.8,201.8c0,0,97,67.3,141.6,98.6c16.4,11,37.5,11,53.2,0 c44.6-31.3,140.8-98.6,140.8-98.6c81.3-57.9,158-121.2,219-201.8c51.6-68.8,89.9-150.2,97-236.2c12.5-156.4-88.4-306.6-255.8-306.6 c-97.8,0-183.8,53.2-227.6,132.2c-45.4-79.8-130.6-133-228.4-133C120,87.8,17.5,238,30,394.4C37.1,480.5,74.6,562.6,127,631.4z"
        fill="currentColor"
      />
    </svg>
  );
}
