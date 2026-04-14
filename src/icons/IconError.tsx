import React from 'react';

export type IconProps = React.SVGProps<SVGSVGElement> & {
  size?: number;
};

export function IconError({ size = 24, ...props }: IconProps) {
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
        d="M863.1,163.9C671.2-28,358.9-28,166.9,163.9s-191.9,504.2,0,696.1s504.2,191.9,696.1,0C1055,668.1,1055,355.9,863.1,163.9z M709.1,706.1c-14.8,14.8-38.8,14.8-53.5,0L515,565.5L367.8,712.8c-14.8,14.8-38.8,14.8-53.5,0c-14.8-14.8-14.8-38.8,0-53.5 L461.5,512L320.9,371.4c-14.8-14.8-14.8-38.8,0-53.5c14.8-14.8,38.8-14.8,53.5,0L515,458.5l133.9-133.9c14.8-14.8,38.8-14.8,53.5,0 c14.8,14.8,14.8,38.8,0,53.5L568.5,512l140.6,140.6C723.9,667.4,723.9,691.3,709.1,706.1z"
        fill="currentColor"
      />
    </svg>
  );
}
