import React, { useCallback, useState } from 'react';
import { Post } from '../Post';
import { changePost, ItemsType, postState, useAppDispatch } from 'store';
import { useSelector } from 'react-redux';

export const Posts = () => {
  const dispatch = useAppDispatch();
  const { posts } = useSelector(postState);
  const [currentCard, setCurrentCard] = useState<ItemsType>({ fact: '' });

  //карта которую взяли
  const onDragStart = useCallback(
    (event: React.DragEvent<HTMLDivElement>, post: ItemsType) => {
      setCurrentCard(post);
    },
    [],
  );
  //карта, зону которой покинули
  const onDragLeave = useCallback(
    (event: React.DragEvent<HTMLDivElement>, post: ItemsType) => {},
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [currentCard],
  );

  //карта на которой держим курсор
  const onDragOver = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);
  //карта на которую положили
  const onDrop = useCallback(
    (event: React.DragEvent<HTMLDivElement>, post: ItemsType) => {
      event.preventDefault();
      dispatch(
        changePost(
          posts.map((p) =>
            p.fact === post.fact
              ? { ...p, fact: currentCard.fact }
              : p && p.fact === currentCard.fact
                ? { ...p, fact: post.fact }
                : p,
          ),
        ),
      );
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [currentCard, posts],
  );
  //карта которую положили (ее же и взяли)
  const onDragEnd = useCallback(
    (event: React.DragEvent<HTMLDivElement>, post: ItemsType) => {},
    [],
  );

  return (
    <>
      {posts.map((post) => (
        <div
          key={post.fact}
          className='grid grid-cols-[6%_1fr] gap-x-2 shadow bg-[#FACC15] text-white p-2.5 rounded-md'>
          <span className='whitespace-nowrap bg-inherit select-none'>
            {'CAT FACT:'}
          </span>
          <Post
            post={post}
            onDrop={onDrop}
            onDragLeave={onDragLeave}
            onDragOver={onDragOver}
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
          />
        </div>
      ))}
    </>
  );
};
