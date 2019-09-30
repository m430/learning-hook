import React, { useRef } from 'react';

function TextInputWithFocusButton() {
  const inputRef = useRef<HTMLInputElement>(null);

  const onBtnClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }

  return (
    <>
      <input ref={inputRef} type="text" />
      <button onClick={onBtnClick}>Focus Input</button>
    </>
  )
}

export default TextInputWithFocusButton;