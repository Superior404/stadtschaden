import React, { FC } from "react";

interface FormInputProps {
  placeholder: string;
  type: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormInput: FC<FormInputProps> = (props) => {
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
      <input
        className={`${inputClassName} ${placeholderStyle} m-1 bg-white bg-opacity-15 font-montserrat rounded-xl text-white text-opacity-80 pl-3 border-white border-opacity-60 border-[0.5px]`}
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};

export default FormInput;
