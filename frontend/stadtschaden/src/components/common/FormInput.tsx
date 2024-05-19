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
    "m-1 bg-zinc-500 bg-opacity-25 font-montserrat placeholder-top rounded-xl placeholder-black text-black pl-3 border-black border-opacity-60 border-[1px]";

  const inputClassName =
    props.placeholder === "Vorname" ||
    props.placeholder === "Nachname" ||
    props.placeholder === "Straße *" ||
    props.placeholder === "Postleitzahl *"
      ? "w-[20rem] h-12"
      : props.placeholder === "Nachricht *"
        ? "w-[40.5rem] h-40"
        : "w-[40.5rem] h-12";

  const placeholderStyle =
    props.placeholder === "Nachricht" ? "placeholder-top" : "";

  let borderStyle = `${inputClassName} ${placeholderStyle} ${inputStyle}`;
  if (props.error) {
    borderStyle += " border-red-500 border-[2px]";
  }

  return (
    <div>
      {props.textArea ? (
        <textarea
          className={`${borderStyle} pt-3`}
          placeholder={props.error ? props.error : props.placeholder}
          value={props.value}
          onChange={props.onChange}
        />
      ) : (
        <input
          className={borderStyle}
          type={props.type}
          placeholder={props.error ? props.error : props.placeholder}
          value={props.value}
          onChange={props.onChange}
        />
      )}
    </div>
  );
};

export default FormInput;
