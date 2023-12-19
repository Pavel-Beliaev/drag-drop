import React, { FC } from 'react';
import { ItemsType } from 'store';

type PropsType = {
  onDragStart: (
    event: React.DragEvent<HTMLDivElement>,
    post: ItemsType,
  ) => void;
  onDragLeave: (event: React.DragEvent<HTMLDivElement>) => void;
  onDragOver: (event: React.DragEvent<HTMLDivElement>) => void;
  onDrop: (event: React.DragEvent<HTMLDivElement>, post: ItemsType) => void;
  post: ItemsType;
};
export const Post: FC<PropsType> = ({
  onDragStart,
  onDragLeave,
  onDragOver,
  onDrop,
  post,
}) => {
  return (
    <div
      draggable
      onDragStart={(event) => onDragStart(event, post)}
      onDragLeave={(event) => onDragLeave(event)}
      onDragOver={(event) => onDragOver(event)}
      onDrop={(event) => onDrop(event, post)}
      className='card'>
      <span className='whitespace-nowrap bg-inherit'>{'CAT FACT: '}</span>
      {post.fact}
    </div>
  );
};
