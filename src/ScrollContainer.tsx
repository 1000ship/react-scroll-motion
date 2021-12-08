import React, { useCallback, useEffect, useRef, useState } from "react";
import { ScrollContainerContext } from "./ScrollContext";
import environment from "./utils/environment";

interface IProps {
  snap: 'none' | 'proximity' | 'mandatory';
  children: React.ReactNodeArray;
  scrollParent: Window | HTMLElement;
}

interface IState {
  currentY: number;
  viewportHeight: number;
  totalPage: number;
  totalHeight: number;
  totalProgress: number;
  realPage: number;
  currentPage: number;
  currentProgress: number;
}

const ScrollAnimatorContainer = ({ snap = 'none', children, scrollParent = window }: IProps) => {

  const [scrollData, setScrollData] = useState<IState>({
    currentY: 0, // 현재 스크롤 위치(px)
    viewportHeight: 0, // 화면 높이(px)
    totalPage: 0, // 총 페이지 수
    totalHeight: 0, // 총 페이지 높이 합 (px)
    totalProgress: 0, // 총 페이지 진행률 (%)
    realPage: 0, // 실수 페이지
    currentPage: 0, // 정수 페이지
    currentProgress: 0, // 현재 페이지 진행률 (%)
  });

  const doSnap: boolean = snap !== 'none';
  const scrollTimer = useRef<ReturnType<typeof setTimeout>>();

  const scrollEvent = useCallback(() => {
    if (snap && scrollTimer.current)
      clearTimeout(scrollTimer.current);

    const currentY: number = scrollParent === window ? window.pageYOffset : (scrollParent as HTMLElement).scrollTop;
    const viewportHeight: number = scrollParent === window ? environment.height : (scrollParent as HTMLElement).clientHeight;
    const totalPage: number = children.length || 0;
    const totalHeight: number = totalPage * (viewportHeight - 1);
    const totalProgress: number = currentY / totalHeight; // 전체 페이지 진행률 0 ~ 1
    const realPage: number = currentY / viewportHeight; // 실수 페이지
    const currentPage: number = Math.floor(realPage); // 정수 페이지
    const currentProgress: number = realPage - currentPage; // 현재 페이지 진행률
    setScrollData({
      currentY,
      viewportHeight,
      totalPage,
      totalHeight,
      totalProgress,
      realPage,
      currentPage,
      currentProgress,
    } as IState);
    
    if (doSnap) {
      scrollTimer.current = setTimeout(() => {
        const newCurrentPage = Math.round(realPage);
        let newCurrentY = currentY;

        if (snap === 'mandatory' || Math.abs(newCurrentPage - realPage) < 0.3)
          newCurrentY = newCurrentPage * viewportHeight;
        
        if (newCurrentY !== currentY)
          window.scrollTo({
            top: newCurrentY,
            behavior: 'smooth'
          });
      }, 50);
    }
  }, [children.length, doSnap, scrollParent, snap]);

  useEffect(() => {
    scrollEvent();
    scrollParent.addEventListener("scroll", scrollEvent);
    scrollParent.addEventListener("resize", scrollEvent);
    return () => scrollParent.removeEventListener("scroll", scrollEvent);
  }, [scrollEvent, scrollParent]);

  return (
    <div style={{ margin: 0, padding: 0, userSelect: "none" }}>
      <ScrollContainerContext.Provider value={scrollData}>
        {children}
      </ScrollContainerContext.Provider>
    </div>
  );
};

export default ScrollAnimatorContainer;
