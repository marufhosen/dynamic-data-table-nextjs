import React, { type ButtonHTMLAttributes, type FC } from "react";
import type { VariantProps } from "class-variance-authority";
import Loader from "../loader/Loader";
import { buttonVariants } from "../variants/button-variants";

interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color">,
    VariantProps<typeof buttonVariants> {
  children?: React.ReactNode;
  loading?: boolean;
}

const Button: FC<ButtonProps> = ({
  children,
  variant,
  color,
  shape,
  size = "md",
  shadow,
  className: classes,
  loading = false,
  ...props
}) => {
  return (
    <button
      className={buttonVariants({
        variant,
        color,
        shape,
        size,
        shadow,
        className: `inline-flex items-center gap-1 whitespace-nowrap text-center text-sm ${
          loading ? "pointer-events-none relative !text-transparent" : ""
        } ${classes}`,
      })}
      {...props}
    >
      {children}
      {loading ? (
        <Loader
          classNames={`absolute top-1/2 start-1/2 -translate-y-1/2 -translate-x-1/2`}
          size={20}
          thickness={4}
        />
      ) : (
        ""
      )}
    </button>
  );
};

export default Button;
