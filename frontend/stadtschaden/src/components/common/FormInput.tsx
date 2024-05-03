import React, { FC } from "react";

interface FormInputProps {
  placeholder: string;
  type: string;
  value: string;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  required?: boolean;
  textArea?: boolean;
}

const FormInput: FC<FormInputProps> = (props) => {
  const inputStyle =
    "m-1 bg-zinc-500 bg-opacity-25 font-montserrat placeholder-top rounded-xl placeholder-black text-black pl-3 border-black border-opacity-60 border-[1px]";

  const inputClassName =
    props.placeholder === "Vorname" || props.placeholder === "Nachname"
      ? "w-[20rem] h-12"
      : props.placeholder === "Nachricht"
        ? "w-[40.5rem] h-40"
        : "w-[40.5rem] h-12";

  const placeholderStyle =
    props.placeholder === "Nachricht" ? "placeholder-top" : "";

  return (
    <div>
      {props.textArea ? (
        <textarea
          className={`${inputClassName} ${placeholderStyle} ${inputStyle} pt-3 `}
          placeholder={props.placeholder}
          value={props.value}
          required={props.required}
          onChange={props.onChange}
        />
      ) : (
        <input
          className={`${inputClassName} ${placeholderStyle} ${inputStyle}`}
          type={props.type}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
          required={props.required}
        />
      )}
    </div>
  );
};

export default FormInput;
