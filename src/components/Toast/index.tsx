import { FC } from "react";
import { toast } from "sonner";

type Props = {
  link?: string;
  toastId: string | number;
  toastType: TToastType;
  title: string;
  description?: string;
};

export type TToastType = "success" | "info" | "warn" | "error";

export const customToast = ({
  toastType,
  title,
  description,
  link,
}: {
  toastType: TToastType;
  title: string;
  link?: string;
  description?: string;
}) => {
  toast.custom((t) => (
    <ToastNotification
      link={link}
      toastId={t}
      toastType={toastType}
      title={title}
      description={description}
    />
  ));
};

const ToastNotification: FC<Props> = (props) => {
  let bg = "";
  let fontColor = "";
  let borderColor = "";

  if (props.toastType === "success") {
    bg = "bg-[#021608]";
    fontColor = "text-success";
    borderColor = "border-success";
  } else if (props.toastType === "info") {
    bg = "bg-[#0A1128]";
    fontColor = "text-curiousblue";
    borderColor = "border-curiousblue";
  } else if (props.toastType === "error") {
    bg = "bg-[#220802]";
    fontColor = "text-error";
    borderColor = "border-error";
  } else if (props.toastType === "warn") {
    bg = "bg-[#1A1003]";
    fontColor = "text-warn";
    borderColor = "border-warn";
  }

  const renderIcon = () => {
    if (props.toastType === "success") {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`size-6 ${fontColor}`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      );
    } else if (props.toastType === "info") {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`size-6 ${fontColor}`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
          />
        </svg>
      );
    } else if (props.toastType === "error") {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`size-6 ${fontColor}`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
          />
        </svg>
      );
    } else if (props.toastType === "warn") {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`size-6 ${fontColor}`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
          />
        </svg>
      );
    }
  };

  return (
    <div
      className={`flex w-[350px] items-center justify-between rounded-[16px] border-[1px] border-opacity-10 p-4 text-lg ${bg} ${fontColor}`}
    >
      <div className="flex items-center gap-4 text-[#202025]">
        {renderIcon()}
        <div className={`${fontColor} w-[calc(100%-40px)]`}>
          <p className="text-lg">{props.title}</p>
          {props.description && (
            <p className="text-sm text-white">{props.description}</p>
          )}
        </div>
      </div>
      <div className="flex items-center gap-3">
        {/* {props.link && (
          <Link
            href={props.link}
            className="text-lg font-bold whitespace-nowrap"
          >
            Open
          </Link>
        )} */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 cursor-pointer text-white"
          onClick={() => toast.dismiss(props.toastId)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </div>
    </div>
  );
};
