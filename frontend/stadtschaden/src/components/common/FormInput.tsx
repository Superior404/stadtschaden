import React, { FC } from "react";

export interface FormInputProps {
  text: string;
  type: string;
  value: string;
  onChange: (event: any) => void;
}

const FormInput: FC<FormInputProps> = (props) => {
  const inputClassName =
    props.text === "Vorname" || props.text === "Nachname"
      ? "w-[20rem] h-16" // Half width for first name and last name
      : props.text === "Nachricht"
        ? "w-[40.5rem] h-48" // Full width for Nachricht input
        : "w-[40.5rem] h-16"; // Standard width for other inputs

  const placeholderStyle = props.text === "Nachricht" ? "placeholder-top" : "";

  return (
    <div>
      <input
        className={`${inputClassName} ${placeholderStyle} m-1 bg-white bg-opacity-20 rounded-xl text-white text-opacity-80 pl-3 border-white border-opacity-60 border-[0.5px]`}
        type={props.type}
        placeholder={props.text}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};

export default FormInput;
