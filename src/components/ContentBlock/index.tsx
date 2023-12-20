import React, { FC, ReactNode } from 'react';

type PropsType = {
  children: ReactNode;
};
export const ContentBlock: FC<PropsType> = ({ children }) => {
  return (
    <div className='flex flex-col justify-center gap-2.5 rounded-2xl p-3.5 bg-yellow-500 max-w-[70%] max-h-[90%]'>
      {children}
    </div>
  );
};
