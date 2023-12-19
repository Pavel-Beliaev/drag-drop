import React, { useEffect } from 'react';
import { fetchPosts, postState, setPage, useAppDispatch } from 'store';
import { Posts, Wrapper } from 'components';
import { Loader } from './components/Loader';
import { useSelector } from 'react-redux';

export function App() {
  const dispatch = useAppDispatch();
  const { status, currentPage, totalPages } = useSelector(postState);
  const isLoading = status === 'loading';

  useEffect(() => {
    dispatch(fetchPosts(currentPage.toString()));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  // const pagesArr = (length: number) => {
  //   const endIndex = currentPage * 10;
  //   const startIndex = endIndex - 10;
  //   const arr = Array.from(Array(length).keys(), (num) => num + 1);
  //
  //   return arr.slice();
  // };

  return (
    <div className='w-screen h-screen flex items-center justify-center flex-col bg-[rgb(48,213,200,0.6)]'>
      {isLoading ? (
        <Loader />
      ) : (
        <Wrapper>
          <Posts />
          {/*<div className='flex items-center justify-center w-full gap-x-2.5'>*/}
          {/*  {[1, 2].map((num) => (*/}
          {/*    <button*/}
          {/*      key={num}*/}
          {/*      onClick={() => dispatch(setPage(num))}*/}
          {/*      className='flex items-center justify-center w-[40px] h-[40px] p-2.5'>*/}
          {/*      {num}*/}
          {/*    </button>*/}
          {/*  ))}*/}
          {/*</div>*/}
        </Wrapper>
      )}
    </div>
  );
}
