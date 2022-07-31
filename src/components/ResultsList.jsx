import Card from './Card';
import logo from '../logo.svg'

function ResultsList({data, queryLenght, totalItems, fetchStatus}) {
  if (fetchStatus.error) {
    return <h4>Something went wrong!</h4>;
  }
  if (fetchStatus.loading) {
    return <img src={logo} className="App-logo" alt="logo" />;
  }
  if (!queryLenght || !totalItems || !data) {
    return null;
  }

  return (
    data.map(book => {
      return (
        <div key={book.id}>
          <Card item={book} />
        </div>
      )
    })
  );
}

export default ResultsList;