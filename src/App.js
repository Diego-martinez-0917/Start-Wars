import './App.scss';
import { useEffect, useState } from 'react';
import { getPeople } from './utils/HTTPrequest';
import Header from './components/header/header';
import ListPeople from './components/listPeople/listPeople';
import Filters from './components/filters/filters';

function App() {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    try {
      getPeople().then((results) => {
        setData(results);
        setFilterData(results);
      });
    } catch (error) {
      console.dir(error);
    }
  }, []);

  function onFilterData(data) {
    setFilterData(data);
  }

  return (
    <div className="App">
      <Header />
      {data.length !== 0 && <Filters data={data} onFilterData={onFilterData} />}
      {data.length !== 0 ? (
        filterData.length !== 0 ? (
          <ListPeople data={filterData} />
        ) : (
          <h1>This character was not found</h1>
        )
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
}

export default App;
