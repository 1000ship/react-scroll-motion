export interface ScrollData {
  currentY: number; // current scroll position (px)
  viewportHeight: number; // viewport height (px)
  totalPage: number; // total number of pages
  totalHeight: number; // total height of all pages (px)
  totalProgress: number; // total scroll progress (%)
  realPage: number; // decimal page number
  currentPage: number; // integer page number
  currentProgress: number; // current page progress (%)
}
