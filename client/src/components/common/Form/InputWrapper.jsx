import { Input, Flex } from '@mantine/core';
import { AiOutlineExclamationCircle } from 'react-icons/ai';

const InputWrapper = ({ label, desc, error, children }) => (
  <Input.Wrapper
    label={label}
    error={
      error && (
        <Flex align="center" gap="4px">
          <AiOutlineExclamationCircle /> {error}
        </Flex>
      )
    }
    sx={{
      width: '100%',
      position: 'relative',

      input: {
        height: '50px',
        borderRadius: '10px',
        backgroundColor: 'var(--body-bg-color)',
        color: 'var(--font-color)',
      },
      select: {
        height: '50px',
        borderRadius: '10px',
        backgroundColor: 'var(--body-bg-color)',
        color: 'var(--font-color)',
      },
      textarea: {
        height: '150px',
        borderRadius: '10px',
        backgroundColor: 'var(--body-bg-color)',
        color: 'var(--font-color)',
      },
    }}>
    {children}
    <Input.Description mt="8px">{desc}</Input.Description>
  </Input.Wrapper>
);

export default InputWrapper;
