import React, { FC } from 'react';
import { ItemsType } from 'store';

type PropsType = {
  onDragStart: (
    event: React.DragEvent<HTMLDivElement>,
    post: ItemsType,
  ) => void;
  onDragLeave: (
    event: React.DragEvent<HTMLDivElement>,
    post: ItemsType,
  ) => void;
  onDragOver: (event: React.DragEvent<HTMLDivElement>) => void;
  onDrop: (event: React.DragEvent<HTMLDivElement>, post: ItemsType) => void;
  onDragEnd: (event: React.DragEvent<HTMLDivElement>, post: ItemsType) => void;
  post: ItemsType;
};
export const Post: FC<PropsType> = ({
  onDragStart,
  onDragLeave,
  onDragOver,
  onDrop,
  onDragEnd,
  post,
}) => {
  return (
    <p
      draggable
      onDragStart={(event) => onDragStart(event, post)}
      onDragLeave={(event) => onDragLeave(event, post)}
      onDragOver={(event) => onDragOver(event)}
      onDragEnd={(event) => onDragEnd(event, post)}
      onDrop={(event) => onDrop(event, post)}
      className='cursor-grab'>
      {post.fact}
    </p>
  );
};
