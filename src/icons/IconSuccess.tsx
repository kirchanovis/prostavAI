import React from 'react';

export type IconProps = React.SVGProps<SVGSVGElement> & {
  size?: number;
};

export function IconSuccess({ size = 24, ...props }: IconProps) {
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
        d="M514,24C243.3,24,23,244.3,23,515s220.3,491,491,491s491-220.3,491-491S784.7,24,514,24z M787.7,351.3L485.6,691.2 c-7.4,8.4-17.8,12.7-28.3,12.7c-8.3,0-16.6-2.7-23.6-8.3L244.9,544.5c-16.3-13-18.9-36.8-5.9-53.1c13-16.3,36.8-18.9,53.1-5.9 l160.8,128.7L731.3,301c13.8-15.6,37.7-17,53.3-3.1C800.2,311.8,801.6,335.7,787.7,351.3z"
        fill="currentColor"
      />
    </svg>
  );
}
