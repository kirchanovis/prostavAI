import React from 'react';

export type IconProps = React.SVGProps<SVGSVGElement> & {
  size?: number;
};

export function IconEye({ size = 24, ...props }: IconProps) {
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
        d="M512.3,171C284.7,171,89,312.1,11.6,512.4C89,712.6,284.7,853.8,512.3,853.8S935.6,712.6,1013,512.4 C935.6,312.1,739.9,171,512.3,171z M512.3,740c-127.4,0-227.6-100.1-227.6-227.6s100.1-227.6,227.6-227.6s227.6,100.1,227.6,227.6 S639.8,740,512.3,740z M512.3,375.8c-77.4,0-136.5,59.2-136.5,136.5s59.2,136.5,136.5,136.5s136.5-59.2,136.5-136.5 S589.7,375.8,512.3,375.8z"
        fill="currentColor"
      />
    </svg>
  );
}
