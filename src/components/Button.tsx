import type { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

type ButtonProps = {
  small?: boolean;
  gray?: boolean;
  className?: string;
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export function Button({ small, gray, className = "", ...props }: ButtonProps) {
  const sizeClasses = small ? "px-2 py-1" : "px-9 py-2 font-bold";
  const colorClasses = gray
    ? "bg-gray-400 hover:bg-gray-300 focus-visible:bg-gray-300"
    : "post-btn";

  return (
    <button
      className={`disabled-opacity-50 rounded-full text-white transition-colors duration-200 disabled:cursor-not-allowed ${sizeClasses} ${colorClasses} ${className}`}
      {...props}
    ></button>
  );
}
