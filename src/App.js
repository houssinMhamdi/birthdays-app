import {useState} from 'react'
import './App.css';
import data from './data'
import List from './List';
function App() {
  const [people , setPeople] = useState(data)
  console.log(people);
  return (
    <main className="App">
      <section className="container">
        <h3>{people.length} birthdays tody</h3>
        <List people={people}/>
        <button onClick={()=>setPeople([])}>clear all</button>
      </section>
    </main>
  );
}

export default App;
