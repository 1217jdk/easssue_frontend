import React from 'react';
import { NewsContainerProps } from './types';

export const NewsContainer: React.FC<NewsContainerProps> = ({children}) => {
  return (
    <div className="bg-black/25 rounded-lg my-4 mx-2 p-4 relative">
      {children}
    </div>
  )
}