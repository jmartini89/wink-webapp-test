<select
className='custom-select'
value={itemsLimit}
onChange={(e) => {setItemsLimit(e.target.value)}}>
{[5, 10, 15, 20].map(x => <option key={x} value={x}>{x}</option>)}
</select>