import { FC } from "react";

interface SelectButtonProps {
  options: string[];
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectButton: FC<SelectButtonProps> = (props) => {
  return (
    <select
      value={props.value}
      onChange={props.onChange}
      className="form-select w-[40.5rem] appearance-none h-12 m-1 bg-zinc-500 bg-opacity-25 font-montserrat rounded-xl placeholder-black text-black pl-3 border-black border-opacity-60 border-[1px]"
    >
      <option value="" disabled>
        Choose a category
      </option>
      {props.options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default SelectButton;
