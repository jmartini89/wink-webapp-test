function SearchLimit({itemsPerPage, setItemsPerPage}) {
  return (
    <div className='container'>
      <select
        className='custom-select'
        value={itemsPerPage}
        onChange={(e) => {setItemsPerPage(e.target.value)}}
      >
        {[5, 10, 15, 20].map(x => <option key={x} value={x}>{x}</option>)}
      </select>
    </div>
  );
}

export default SearchLimit;