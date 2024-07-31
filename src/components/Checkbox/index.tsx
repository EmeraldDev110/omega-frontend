import { useEffect, useState } from "react";

interface ICheckboxProps {
  checked?: boolean;
  onChanged?: (val: boolean) => void;
  variant?: "rounded";
}

const Checkbox = (props: ICheckboxProps) => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    setIsChecked(props.checked || false);
  }, [props.checked]);

  return (
    <>
      {!isChecked ? (
        <div
          className={`h-[24px] w-[24px] cursor-pointer ${props.variant === "rounded" ? "rounded-full" : "rounded-[8px]"} border border-curiousblue bg-curiousblue bg-opacity-[8%] transition-all hover:bg-opacity-[28%]`}
          onClick={() => {
            setIsChecked(!isChecked || props.checked || false);
            if (props.onChanged) props.onChanged(!isChecked);
          }}
        ></div>
      ) : (
        <div
          className={`gradient-border-bg-blue flex h-[24px] w-[24px] cursor-pointer items-center justify-center ${props.variant === "rounded" ? "rounded-full" : "rounded-[8px]"} border-[1px]`}
          onClick={() => {
            setIsChecked(!isChecked || props.checked || false);
            if (props.onChanged) props.onChanged(!isChecked);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
          >
            <path
              fillRule="evenodd"
              d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      )}
    </>
  );
};

export default Checkbox;
