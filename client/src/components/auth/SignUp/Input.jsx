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
/**
 * type : input type
 * label : input label (animation 적용됨)
 * decs : input에 입력하는 값 설명란 / input 하단에 표기됨
 * value : controlled Input value
 * error : input 요소가 invalid 한지 boolean 혹은 truthy / falsy한 값
 *         true / truthy한 값일 경우 input 색상이 red로 변경
 * errorMessage : error가 true / truthy한 값일 경우, 표기할 메세지. input 하단에 표기됨
 * RenderInput : 기본 input요소가 아닌 다른 input을 랜더링
 * 지원하는 이벤트 : onChange, onFocus, onBlur
 *
 * @param {{ type, value, label, decs, error, errorMessage, onChange,onFocus, onBlur, RenderInput }} param0
 * @returns
 */

const Input = ({ type, value, onChange, label, decs, error, errorMessage, onFocus, onBlur, RenderInput }) => {
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

      {decs && (
        <Text fz="12px" mt="4px" px="8px">
          {decs}
        </Text>
      )}
    </Container>
  );
};

export default Input;
