import { FC } from "react";

interface SelectButtonProps {
  options: string[];
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  error?: string;
}

const SelectButton: FC<SelectButtonProps> = (props) => {
  const hasError = !!props.error;

  const sanitizedValue = props.value ?? "";

  return (
    <div className="w-full h-full">
      <select
        value={sanitizedValue}
        onChange={props.onChange}
        className={`form-select w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl appearance-none h-10 bg-zinc-500 bg-opacity-25 font-montserrat rounded-xl placeholder-black text-black px-3 ${
          hasError
            ? "border-red-500 border-[1.5px]"
            : "border-black border-opacity-60 border-[1px]"
        }`}
      >
        <option value="" disabled>
          Wählen Sie eine Kategorie *
        </option>
        {props.options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectButton;
