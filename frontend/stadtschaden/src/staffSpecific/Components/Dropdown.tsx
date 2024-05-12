import { useState, FC } from "react";
import { BsChevronCompactDown, BsChevronCompactUp } from "react-icons/bs";


interface DropdownProps {
  hight: number;
  with: number;
  name: string;
  options: string[];
  value: string;
  onChange: (selected: string) => void;
}

const Dropdown: FC<DropdownProps> = (props) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const SelectItem = (option: string) => {
    props.onChange(option);
    setIsOpen(false);
  };

  return (
    <div className={`m-2 relative inline-block text-left  w-${props.with} h-${props.hight}`}>
      <div className={`absolute rounded-3xl  bg-darkgray  ${isOpen && 'z-50 pb-1'} `}>
        <button
          className={`justify-center px-4 py-2  text-sm  w-${props.with} h-${props.hight} `}
          onClick={toggleMenu}
        >
          <div className={`flex`}>
            <div className=" text-white font-primary pr-2 ">
              {props.name}:
            </div>
            <div className=" w-full text-left  text-midlightgray  font-primary pr-2 truncate">
              {props.value}
            </div>
            <div className=" w-10  pt-1">
              {isOpen ? <BsChevronCompactUp className="text-white " /> : <BsChevronCompactDown className="text-white " />}
            </div>
          </div>

        </button>
        {
          isOpen && (
            props.options.map((option) => (
              <div className="py-1" role="none">
                <button
                  className="block px-4 py-1 text-sm text-white rounded-3xl hover:bg-darkgrayHighlight w-full text-left"
                  role="menuitem"
                  onClick={() => SelectItem(option)}
                >
                  {option}
                </button>
              </div>
            ))
          )
        }
      </div >
    </div >
  );
}

export default Dropdown