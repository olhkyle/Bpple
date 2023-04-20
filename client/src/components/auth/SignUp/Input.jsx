import React from 'react';
import styled from '@emotion/styled';
import { Container, Flex, Text } from '@mantine/core';
import { AiOutlineExclamationCircle } from 'react-icons/ai';

const InputContainer = styled.div`
  position: relative;
  width: 100%;
  height: 56px;
  padding: 16px 24px 4px 16px;
  border: ${({ focus, error }) => `1px solid ${focus ? '#0070c9' : error ? 'red' : '#d2d2d7'}`};
  border-radius: 10px;
  background-color: ${({ error }) => (error ? 'rgba(255,0,0,0.03)' : '#fff')};
  box-shadow: ${({ focus }) => focus && '0 0 0 3px rgba(131,192,253,.5);'};

  input {
    font-size: 16px;
    border: none;
    outline: none;
    width: 100%;
    height: 100%;
    padding: 0;
    background: none;
  }

  span {
    position: absolute;
    top: 4px;
    left: 16px;
    font-size: 10px;
    color: ${({ error }) => (error ? 'red' : '#86868b')};
    display: inline-block;
    transform: ${({ focus, value }) => !focus && !value && 'translate3d(0, 75%, 0) scale3d(1.6, 1.6, 1.6)'};
    transform-origin: top left;
    transition: transform 0.2s;
  }
`;

const Input = ({ type, value, onChange, label, error, errorMessage, RenderInput, onFocus, onBlur }) => {
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
    <Container w="100%" p="0">
      <InputContainer value={value} focus={focus} error={error}>
        {RenderInput ? (
          RenderInput({ onFocus: handleFocus, onBlur: handleBlur })
        ) : (
          <input type={type} value={value} onChange={onChange} onFocus={handleFocus} onBlur={handleBlur} />
        )}
        <span>{label}</span>
      </InputContainer>
      {error && (
        <Flex w="100%" px="8px" mt="8px" c="red" align="center" gap="4px">
          <AiOutlineExclamationCircle />
          <Text fz="12px">{errorMessage}</Text>
        </Flex>
      )}
    </Container>
  );
};

export default Input;
