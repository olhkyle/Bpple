import React from 'react';
import styled from '@emotion/styled';
import { CloseButton, Flex } from '@mantine/core';
import { keyframes } from '@emotion/react';

const entryTop = keyframes`
  from {
    transform: translate3D(0, -100%, 0);
    opacity : 0;
  }
  to {
    transform: translate3D(0, 0, 0);
    opacity: 1;
  }
`;

const entryBottom = keyframes`
    from {
    transform: translate3D(0, 100%, 0);
    opacity : 0;
  }
  to {
    transform: translate3D(0, 0, 0);
    opacity : 1;
  }
`;

const dismissTop = keyframes`
  from {
    transform: translate3D(0, 0, 0);
    opacity : 1;
  }
  to {
    transform: translate3D(0, -100%, 0);
    opacity : 0;
  }
`;

const dismissBottom = keyframes`
  from {
    transform: translate3D(0, 0, 0);
     opacity : 1;
  }
  to {
    transform: translate3D(0, 100%, 0);
    opacity : 0;
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
  top: ${({ position }) => position === 'top' && '0'};
  bottom: ${({ position }) => position === 'bottom' && '0'};
  width: 100%;
  height: ${({ h }) => h};
  padding: 12px 48px;
  background-color: ${({ bgc }) => bgc};
  color: ${({ c }) => c};

  animation: ${({ position, status }) => animation[position][status]} 0.5s both;
`;

/**
 * h : toast의 height값 / string
 * c : toast 폰트 컬러 / string
 * bgc : toast 배경 컬러 / string
 *
 * fixed : toast fixed 속성 여부 / boolean
 *         true일 경우 상단 / 하단에 고정되서 등장
 *         false일 경우 아래 요소들을 밀어내면서 등장
 *
 * position : toast가 등장할 위치  / 'top' | 'bottom'
 * closeOnClick : toast 닫기 버튼 노출 여부 / boolean
 * autoClose : 딜레이 이후 자동으로 toast 삭제 여부 / boolean
 * autoCloseDelay : 자동으로 toast 삭제 시, 딜레이 지정 / number
 * children : toast에 포함할 내용 / jsx
 * @param {{h, c, bgc, fixed, position, closeOnClick, autoClose, autoCloseDelay, children}}
 * @returns
 */

const Toast = ({
  h = '75px',
  c = '#fff',
  bgc = '#339af0',
  fixed = true,
  position = 'top',
  closeOnClick = true,
  autoClose = true,
  autoCloseDelay = 3000,
  children,
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
      c={c}
      bgc={bgc}
      position={position}
      status={status}
      onAnimationEnd={handleAnimationEnd}>
      <Flex>
        {children}
        {closeOnClick && (
          <CloseButton
            c={c}
            size="xl"
            iconSize={20}
            variant="transparent"
            sx={{ alignSelf: 'start' }}
            onClick={() => setStatus('dismiss')}
          />
        )}
      </Flex>
    </Container>
  );
};

export default Toast;
