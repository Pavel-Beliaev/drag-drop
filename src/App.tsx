import React, { useEffect } from 'react';
import { fetchPosts, postState, useAppDispatch } from 'store';
import { ContentBlock, Pagination, Posts } from 'components';
import { Loader } from './components/Loader';
import { useSelector } from 'react-redux';

export function App() {
  const dispatch = useAppDispatch();
  const { status, currentPage } = useSelector(postState);
  const isLoading = status === 'loading';

  useEffect(() => {
    dispatch(fetchPosts(currentPage.toString()));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  return (
    <div className='w-screen h-screen flex items-center justify-center flex-col bg-[rgb(48,213,200,0.6)]'>
      <ContentBlock>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <Posts />
            <Pagination />
          </>
        )}
      </ContentBlock>
    </div>
  );
}
