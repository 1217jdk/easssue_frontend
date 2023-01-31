import React from 'react';
import { KeywordTitleProps } from './types';

export const KeywordTitle: React.FC<KeywordTitleProps> = ({title}) => {
  return (
    <div className="text-white mx-2 text-2xl">{title}</div>
    )
}