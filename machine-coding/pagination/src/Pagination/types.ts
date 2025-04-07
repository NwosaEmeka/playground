export interface IPagination {
  pages: number;
  page: number;
  handlePageClick: (index: number) => void;
  prevAction: () => void;
  nextAction: () => void;
}
