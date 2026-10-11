import type { ComponentProps } from "react";

export function Container({ className = "", ...props }: ComponentProps<"div">) {
  return (
    <div
      className={`mx-auto w-full max-w-[1360px] px-6 sm:px-10 lg:px-16 ${className}`}
      {...props}
    />
  );
}
