function SearchLimit({itemsLimit, setItemsLimit}) {
  return (
    <div className='container'>
      <select
        className='custom-select'
        value={itemsLimit}
        onChange={(e) => {setItemsLimit(e.target.value)}}
      >
        {[5, 10, 15, 20].map(x => <option key={x} value={x}>{x}</option>)}
      </select>
    </div>
  );
}

export default SearchLimit;