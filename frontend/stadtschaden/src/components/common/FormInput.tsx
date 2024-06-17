import React, { FC } from "react";

interface FormInputProps {
  placeholder: string;
  type: string;
  value: string;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  textArea?: boolean;
  error?: string;
}

const FormInput: FC<FormInputProps> = (props) => {
  const inputStyle =
    "my-1 bg-zinc-500 bg-opacity-25 font-montserrat placeholder-top rounded-xl placeholder-black text-black px-3 border-black border-opacity-60 border-[1px]";

  const inputClassName = props.textArea ? "h-40" : "h-10";

  let borderStyle = `w-full ${inputClassName} ${inputStyle}`;
  if (props.error) {
    borderStyle += " border-red-500 border-[2px]";
  }

  const sanitizedValue = props.value ?? "";

  return (
    <div className="w-full">
      {props.textArea ? (
        <textarea
          className={`${borderStyle} py-3`}
          placeholder={props.error ? props.error : props.placeholder}
          value={sanitizedValue}
          onChange={props.onChange}
        />
      ) : (
        <input
          className={borderStyle}
          type={props.type}
          placeholder={props.error ? props.error : props.placeholder}
          value={sanitizedValue}
          onChange={props.onChange}
        />
      )}
    </div>
  );
};

export default FormInput;
