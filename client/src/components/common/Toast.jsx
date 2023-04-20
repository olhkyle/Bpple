import React from 'react';
import styled from '@emotion/styled';
import { Center } from '@mantine/core';
import { keyframes } from '@emotion/react';

const entryTop = keyframes`
  from {
    transform: translate3D(0, -100%, 0);
  }
  to {
    transform: translate3D(0, 0, 0);
  }
`;

const entryBottom = keyframes`
    from {
    transform: translate3D(0, 100%, 0);
  }
  to {
    transform: translate3D(0, 0, 0);
  }
`;

const dismissTop = keyframes`
  from {
    transform: translate3D(0, 0, 0);
  }
  to {
    transform: translate3D(0, -100%, 0);
  }
`;

const dismissBottom = keyframes`
    from {
    transform: translate3D(0, 0, 0);
  }
  to {
    transform: translate3D(0, 100%, 0);
  }
`;

const animation = {
  top: {
    entry: entryTop,
    dismiss: dismissTop,
  },

  bottom: {
    entry: entryBottom,
    dismiss: dismissBottom,
  },
};

const Container = styled.div`
  position: ${({ fixed }) => fixed && 'fixed'};
  top: ${({ position }) => position === '<Toast />' && '0'};
  bottom: ${({ position }) => position === 'bottom' && '0'};
  width: 100%;
  height: ${({ h }) => h};
  padding: 12px 48px;
  background-color: #000;
  color: #fff;

  animation: ${({ position, status }) => animation[position][status]} 0.5s both;
`;

const Toast = ({
  h = '75px',
  fixed = true,
  position = 'top',
  children,
  closeOnClick,
  autoClose = true,
  autoCloseDelay = 3000,
}) => {
  const [status, setStatus] = React.useState('entry');
  const toastRef = React.useRef(null);

  const handleAnimationEnd = () => {
    if (status === 'entry' && autoClose) setTimeout(() => setStatus('dismiss'), autoCloseDelay);
    if (status === 'dismiss') toastRef.current.remove();
  };

  return (
    <Container
      ref={toastRef}
      h={h}
      fixed={fixed}
      position={position}
      status={status}
      onAnimationEnd={handleAnimationEnd}>
      <Center>{children}</Center>
    </Container>
  );
};

export default Toast;
