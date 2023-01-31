import { useEffect } from 'react';


async function getCurrentTab() {
  let queryOptions = { active: true, currentWindow: true };
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab;
}

export const getUrl = () =>{
  const currentTabData = getCurrentTab().then((tabData)=>{
    const url = tabData.url;
    const title = tabData.title;
  });
}