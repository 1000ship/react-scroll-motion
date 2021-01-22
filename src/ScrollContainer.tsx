import React, { useCallback, useEffect, useState } from "react";
import { ScrollContainerContext } from "./ScrollContext";

interface IProps {
  children: React.ReactNodeArray;
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

const ScrollAnimatorContainer = ({ children }: IProps) => {
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

  const scrollEvent = useCallback(() => {
    const currentY: number = window.pageYOffset;
    const viewportHeight: number = window.innerHeight;
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
  }, []);

  useEffect(() => {
    scrollEvent();
    window.addEventListener("scroll", scrollEvent);
    return () => window.removeEventListener("scroll", scrollEvent);
  }, []);

  return (
    <div style={{ margin: 0, padding: 0 }}>
      <ScrollContainerContext.Provider value={scrollData}>
        {children}
      </ScrollContainerContext.Provider>
    </div>
  );
};

export default ScrollAnimatorContainer;
