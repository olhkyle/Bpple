import { useRecoilState } from 'recoil';
import toastState from '../recoil/atoms/toastState';

const useToast = () => {
  const [toasts, setToasts] = useRecoilState(toastState);

  const newId = () => Math.max(...toasts.map(({ id }) => id), 0) + 1;

  const create = toastInfo => {
    setToasts([...toasts, { ...toastInfo, id: newId() }]);
  };

  const remove = toastId => {
    setToasts(toasts => toasts.filter(toast => toast.id !== toastId));
  };

  return { create, remove };
};

export default useToast;
