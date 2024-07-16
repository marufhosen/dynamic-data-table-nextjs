import React, { type ButtonHTMLAttributes, type FC } from "react";
import type { VariantProps } from "class-variance-authority";
import { buttonIconVariants } from "../variants/button-icon-variants";
import Loader from "../loader/Loader";

interface IconButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color">,
    VariantProps<typeof buttonIconVariants> {
  children?: React.ReactNode;
  loading?: boolean;
}

const IconButton: FC<IconButtonProps> = ({
  variant,
  color,
  shape,
  size = "md",
  shadow,
  className: classes,
  children,
  loading = false,
  ...props
}) => {
  return (
    <button
      className={buttonIconVariants({
        variant,
        shape,
        color,
        size,
        shadow,
        className: `shrink-0 ${
          loading ? "pointer-events-none relative !text-transparent" : ""
        } ${classes}`,
      })}
      {...props}
    >
      {children}
      {loading ? (
        <Loader
          classNames="absolute top-1/2 start-1/2 -translate-y-1/2 -translate-x-1/2"
          size={20}
          thickness={4}
        />
      ) : (
        ""
      )}
    </button>
  );
};

export default IconButton;
