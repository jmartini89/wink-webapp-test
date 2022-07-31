function Pagination({setCurrentPage, totalItems, itemsPerPage}) {
  const pageNumbers = Array.from({length: Math.ceil(totalItems / itemsPerPage)}, (_, i) => i + 1);

  return (
    <nav aria-label="...">
      <ul className="pagination">
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <a onClick={() => {setCurrentPage(number)}} href="!#" className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination;