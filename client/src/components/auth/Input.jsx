import React from 'react';
import styled from '@emotion/styled';

const InputContainer = styled.div`
  position: relative;
  width: 100%;
  height: 56px;
  padding: 16px 24px 4px 16px;
  border: ${({ focus }) => `1px solid ${focus ? '#0070c9' : '#d2d2d7'}`};
  border-radius: 10px;
  background-color: #fff;
  box-shadow: ${({ focus }) => focus && '0 0 0 3px rgba(131,192,253,.5);'};

  input {
    font-size: 16px;
    border: none;
    outline: none;
    width: 100%;
    height: 100%;
    padding: 0;
  }

  span {
    position: absolute;
    top: 4px;
    left: 16px;
    font-size: 10px;
    color: #86868b;
    display: inline-block;
    transform: ${({ focus, value }) => !focus && !value && 'translate3d(0, 75%, 0) scale3d(1.6, 1.6, 1.6)'};
    transform-origin: top left;
    transition: transform 0.2s;
  }
`;

const Input = ({ type, value, onChange, label, RenderInput, onFocus, onBlur }) => {
  const [focus, setFocus] = React.useState(false);

  const handleFocus = () => {
    if (onFocus) onFocus();

    setFocus(true);
  };

  const handleBlur = () => {
    if (onBlur) onBlur();

    setFocus(false);
  };

  return (
    <InputContainer value={value} focus={focus}>
      {RenderInput ? (
        RenderInput({ onFocus: handleFocus, onBlur: handleBlur })
      ) : (
        <input type={type} value={value} onChange={onChange} onFocus={handleFocus} onBlur={handleBlur} />
      )}
      <span>{label}</span>
    </InputContainer>
  );
};

export default Input;
