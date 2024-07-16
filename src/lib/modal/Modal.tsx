import React, { type FC } from "react";

interface ModalProps {
  open?: boolean;
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
  classes?: {
    wrapper?: string | string[];
    backdrop?: string | string[];
    dialog?: string | string[];
  };
  children?: React.ReactNode;
  onBackdropClick?: () => void;
}

const Modal: FC<ModalProps> = ({
  open,
  size = "md",
  classes,
  children,
  onBackdropClick,
}) => {
  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-300 ${
        open
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0"
      } ${classes?.wrapper}`}
    >
      <div className="relative z-[9999]">
        <div
          role="button"
          className={`fixed inset-0 cursor-default bg-muted-800/70 dark:bg-muted-900/80 ${classes?.backdrop}`}
          onClick={() => {
            onBackdropClick?.();
          }}
        ></div>
        <div
          className={`fixed inset-0 mx-auto
          ${size === "sm" ? "max-w-sm" : ''}
          ${size === "md" ? "max-w-md" : ''}
          ${size === "lg" ? "max-w-xl" : ''}
          ${size === "xl" ? "max-w-2xl" : ''}
          ${size === "2xl" ? "max-w-3xl" : ''}
          ${size === "3xl" ? "max-w-5xl" : ''}
        `}
        >
          <div
            className={`flex min-h-full items-center justify-center p-4 text-center ${classes?.wrapper}`}
          >
            <div
              className={`w-full text-start transition-all duration-300 
                ${classes?.dialog}
                ${open ? "translate-y-0" : "-translate-y-4"}
              `}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
