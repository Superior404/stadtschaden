import React, { FC } from "react";

interface TextFilterProps {
  hight: number;
  with: number;
  name: string;
  value: string;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
}

const TextFilter: FC<TextFilterProps> = (props) => {
  return (
    <div
      className={`m-2 flex items-center font-primary  rounded-3xl text-sm pl-4 pr-2 py-2 bg-darkgray w-${props.with} h-${props.hight} `}
    >
      <div className={` text-white mr-3 `}>{props.name}:</div>
      <input
        className="rounded-2xl px-2 py-1 w-full"
        placeholder={"any"}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};

export default TextFilter;
