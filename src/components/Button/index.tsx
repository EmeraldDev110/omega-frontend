import React, { ComponentType } from "react";
import { ScaleLoader } from "react-spinners";

interface WithClickHandlerProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  className?: string;
}

const withClickHandler = <P extends WithClickHandlerProps>(
  WrappedComponent: ComponentType<P>
) => {
  return (props: P) => {
    const handleClick = (
      event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
      const button = event.target as HTMLButtonElement;
      button.classList.add("active"); // Add your desired class
      if (props.onClick) {
        props.onClick(event);
      }
      setTimeout(function () {
        button.classList.remove("active");
      }, 750);
    };

    return <WrappedComponent {...props} onClick={handleClick} />;
  };
};

interface ButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  className?: string;
  children: React.ReactNode;
  type?: "success" | "info" | "error" | "warn";
  variant?: "contained" | "outlined" | "plainned";
  disabled?: boolean;
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  className,
  disabled,
  type,
  variant,
  isLoading,
}) => {
  let buttonClass = "";
  if (!variant || variant === "contained") {
    buttonClass = "gradient-border-bg-blue";
    if (disabled || isLoading || type === "error") {
      buttonClass = "gradient-border-bg-disable";
    }
  } else if (variant === "plainned") {
    buttonClass = "gradient-border-blue";
  } else if (variant === "outlined") {
    switch (type) {
      case "info":
        buttonClass =
          "border border-curiousblue bg-curiousblue bg-opacity-10 hover:bg-opacity-30 transition-all text-curiousblue";
        break;
      case "error":
        buttonClass =
          "border border-salmon bg-salmon bg-opacity-10 hover:bg-opacity-30 transition-all text-salmon";
        break;
      default:
        break;
    }
  }
  return (
    <button
      onClick={onClick}
      className={`${className} ${buttonClass}`}
      disabled={disabled || isLoading}
    >
      {isLoading ? (
        <div className="flex items-center justify-center">
          <ScaleLoader color="#1E88E5" height={10} width={5} radius={2} />
        </div>
      ) : (
        children
      )}
    </button>
  );
};

const ClickableButton = withClickHandler(Button);

export default ClickableButton;
