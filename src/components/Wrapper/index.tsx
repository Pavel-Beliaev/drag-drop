import React, { FC, ReactNode } from 'react';

type PropsType = {
  children: ReactNode;
};
export const Wrapper: FC<PropsType> = ({ children }) => {
  return (
    <div className='flex flex-col justify-center gap-2.5 border rounded-2xl border-teal-500 p-3.5 bg-yellow-500 max-w-[50%]'>
      {children}
    </div>
  );
};
