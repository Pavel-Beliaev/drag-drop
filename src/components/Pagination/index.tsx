import React, { useCallback } from 'react';
import { PaginationButton } from '../PaginationButton';
import { usePaginate } from '../../hock/usePaginate';
import { useSelector } from 'react-redux';
import { postState, setPage, useAppDispatch } from 'store';

export const Pagination = () => {
  const { currentPage, totalPages } = useSelector(postState);
  const paginate = usePaginate(totalPages, 3, currentPage);
  const dispatch = useAppDispatch();

  const pageHandler = useCallback((num: number) => {
    dispatch(setPage(num));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='flex items-center justify-center w-full gap-x-2.5'>
      {paginate.map((num, idx) => (
        <PaginationButton
          key={idx}
          isAble={num === 0}
          onClick={pageHandler}
          num={num}
        />
      ))}
    </div>
  );
};
