export interface ScrollData {
  currentY: number; // 현재 스크롤 위치(px)
  viewportHeight: number; // 화면 높이(px)
  totalPage: number; // 총 페이지 수
  totalHeight: number; // 총 페이지 높이 합 (px)
  totalProgress: number; // 총 페이지 진행률 (%)
  realPage: number; // 실수 페이지
  currentPage: number; // 정수 페이지
  currentProgress: number; // 현재 페이지 진행률 (%)
}
