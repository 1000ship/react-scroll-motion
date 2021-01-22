import React, { useCallback, useEffect, useState } from 'react';
import {ScrollContainerContext} from './ScrollContext';

const ScrollAnimatorContainer = ({children}) => {

  const [scrollData, setScrollData] = useState({
    currentY: 0,        // 현재 스크롤 위치(px) 
    viewportHeight: 0,  // 화면 높이(px) 
    totalPage: 0,       // 총 페이지 수
    totalHeight: 0,     // 총 페이지 높이 합 (px)
    totalProgress: 0,   // 총 페이지 진행률 (%)
    realPage: 0,        // 실수 페이지
    currentPage: 0,     // 정수 페이지
    currentProgress: 0  // 현재 페이지 진행률 (%)
  })

  const scrollEvent = useCallback(() => {
    const currentY = window.pageYOffset;
    let viewportHeight = window.innerHeight
    const totalPage = children.length;
    const totalHeight = totalPage * (viewportHeight - 1);
    const totalProgress = currentY / totalHeight; // 전체 페이지 진행률 0 ~ 1
    const realPage = currentY / viewportHeight; // 실수 페이지
    const currentPage = parseInt(realPage); // 정수 페이지
    const currentProgress = realPage - currentPage; // 현재 페이지 진행률
    setScrollData({currentY, viewportHeight, totalPage, totalHeight, totalProgress, realPage, currentPage, currentProgress})
  })

  useEffect( () => {
    scrollEvent();
    window.addEventListener("scroll", scrollEvent);
    return () => window.removeEventListener("scroll", scrollEvent)
  }, [])
  

  return (
    <div style={{margin: 0, padding: 0}}>
      <ScrollContainerContext.Provider value={scrollData}>
        {children}
      </ScrollContainerContext.Provider>
    </div>
  );
};

export default ScrollAnimatorContainer;