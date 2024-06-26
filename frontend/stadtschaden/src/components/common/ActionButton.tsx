import { FC } from "react";

export interface ActionButtonProps {
  title: string;
  onClick: () => void;
}

const ActionButton: FC<ActionButtonProps> = (props) => {
  return (
    <button
      className="bg-primary max-w-[50rem] min-w-[15rem] w-full h-14 mx-12 my-1 rounded-2xl text-white text-opacity-80 px-3 py-2 border-white border-opacity-60 border-[0.5px] transition-transform transform hover:scale-[1.02] hover:bg-primary-dark active:scale-95 active:bg-primary-darker"
      title={props.title}
      onClick={props.onClick}
    >
      {props.title}
    </button>
  );
};

export default ActionButton;
