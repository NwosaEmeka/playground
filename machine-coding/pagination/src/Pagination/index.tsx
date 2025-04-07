import { IPagination } from "./types";

const Pagination = ({
  pages,
  page,
  handlePageClick,
  prevAction,
  nextAction,
}: IPagination) => {
  return (
    <div className="pagination">
      <button onClick={prevAction} disabled={page === 1}>
        Prev
      </button>
      {Array.from({ length: pages }, (_, i) => (
        <button key={i} onClick={() => handlePageClick(i + 1)}>
          {i + 1}
        </button>
      ))}
      <button onClick={nextAction} disabled={page === pages}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
