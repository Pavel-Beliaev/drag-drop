import React, { useCallback, useState } from 'react';
import { Post } from '../Post';
import { changePost, ItemsType, postState, useAppDispatch } from 'store';
import { useSelector } from 'react-redux';

export const Posts = () => {
  const dispatch = useAppDispatch();
  const { posts } = useSelector(postState);
  const [currentCard, setCurrentCard] = useState<ItemsType>({ fact: '' });

  const onDragStart = useCallback(
    (event: React.DragEvent<HTMLDivElement>, post: ItemsType) => {
      setCurrentCard(post);
    },
    [],
  );

  const onDragLeave = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    (event.target as HTMLElement).className = 'card bg-[#FACC15]';
  }, []);

  const onDragOver = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    (event.target as HTMLElement).className = 'card bg-[#EAB308]';
  }, []);

  const onDrop = useCallback(
    (event: React.DragEvent<HTMLDivElement>, post: ItemsType) => {
      event.preventDefault();
      (event.target as HTMLElement).className = 'card bg-[#FACC15]';
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

  return (
    <>
      {posts.map((post) => (
        <Post
          key={post.fact}
          post={post}
          onDrop={onDrop}
          onDragLeave={onDragLeave}
          onDragOver={onDragOver}
          onDragStart={onDragStart}
        />
      ))}
    </>
  );
};
