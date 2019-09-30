import React, { useRef, useImperativeHandle, forwardRef } from 'react';

export interface RefInputProps {
  focus: React.FocusEventHandler<HTMLInputElement>;
}

function Input(props: any, ref: React.Ref<RefInputProps>) {
  console.log(props);
  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => ({
    focus: () => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }
  }));
  return <input ref={inputRef} type="text" />
}

const FancyInput = forwardRef(Input);

export default FancyInput;