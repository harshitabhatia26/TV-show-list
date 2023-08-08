
import Card from './ShowList';
import { useEffect } from 'react'
import { useState } from 'react'
import Form from '../Form/Form';



function App() {
  const [allShows, setAllShows] = useState([])

  useEffect(() => {
      fetch("https://api.tvmaze.com/search/shows?q=all")
          .then(res=> res.json())
          .then(data => setAllShows(data))
}, [])

const showdata = allShows.map((item)=>
    <Card
      key = {item.show.id}
      item = {item.show}
    />
)

  return (
    <main>
      <div className='shows-list'>
      {showdata}
    </div>
    </main>
  );
}

export default App;
