import React, { FC } from 'react';
import { postState } from 'store';
import { useSelector } from 'react-redux';

type PropsType = {
  isAble: boolean;
  onClick: (num: number) => void;
  num: number;
};
export const PaginationButton: FC<PropsType> = ({ isAble, onClick, num }) => {
  const { currentPage } = useSelector(postState);

  return (
    <button
      disabled={isAble}
      onClick={() => onClick(num)}
      className={`flex items-center justify-center w-[40px] h-[40px] rounded p-2.5 hover:shadow hover:text-black ${
        num === currentPage ? 'text-black shadow' : 'text-white '
      }`}>
      {num === 0 ? '...' : num}
    </button>
  );
};
