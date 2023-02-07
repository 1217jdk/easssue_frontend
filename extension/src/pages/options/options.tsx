import React, { lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import './options.css';
import '@root/index.css';
import { PopupIndex } from '@/components/Popup';

const App: React.FC<{}> = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PopupIndex />
    </Suspense>
  );
};

const container = document.createElement('div');
document.body.appendChild(container);
const root = createRoot(container);
root.render(<App />);
