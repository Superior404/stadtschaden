import React, { FC } from 'react'



export interface FormInputProps {
    text: string;
}


const FormInput: FC<FormInputProps> = (props) => {
  return (
    <div>
      <input type="text" title={props.text} />
    </div>
  )
}

export default FormInput