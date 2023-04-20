/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { ActionIcon } from '@mantine/core';
import { HiOutlineArrowCircleRight } from 'react-icons/hi';

const useChecking = callback => {
  const [isChecking, setChecking] = React.useState(false);

  React.useEffect(() => {
    if (!isChecking) return;

    setTimeout(() => {
      if (callback) callback();
      setChecking(false);
    }, 1000);
  }, [isChecking]);

  return [isChecking, () => setChecking(true)];
};

const SubmitChecker = ({ isDirty, invalid, callback }) => {
  const [isChecking, setChecking] = useChecking(callback);

  return (
    <>
      {isChecking ? (
        <img src="/spinner.svg" alt="spinner" />
      ) : (
        <ActionIcon
          fw="600"
          type="submit"
          radius="100%"
          onClick={setChecking}
          variant="transparent"
          disabled={isDirty ? invalid : true}>
          <HiOutlineArrowCircleRight fontSize="36px" />
        </ActionIcon>
      )}
    </>
  );
};

export default SubmitChecker;
