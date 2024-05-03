import React, { FC } from "react";

export interface ActionButtonProps {
  title: string;
  onClick: () => void;
}

const ActionButton: FC<ActionButtonProps> = (props) => {
  return (
    <div>
      <button
        className={`bg-primary w-[40.5rem] h-12 m-1 rounded-xl text-white text-opacity-80 pl-3 border-white border-opacity-60 border-[0.5px]`}
        title={props.title}
        onClick={props.onClick}
      >
        {props.title}
      </button>
    </div>
  );
};

export default ActionButton;
