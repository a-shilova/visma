import {FC, useCallback} from 'react';
import { useNavigate } from 'react-router-dom';

type Props = {
    onClick?: () => void
    title: string
}

export const Button: FC<Props> = ({onClick}, children) => {
    const handlerClick = useCallback(() => {
        if (onClick) {
            onClick();
        }
    }, []);

  return <button onClick={handlerClick}>{children}</button>;
};
