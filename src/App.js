import logo from './logo.svg';
import './App.css';

import places from './places.json'

function App() {

  console.log('I know my data is available in the browser because it is here!: ', places)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello and welcome to my plants app! 
        </p>
        <ul>
          {places.map(place => {
            if (place.species_count > 0) {
              return (
                <li className="box" key={place.id
                }>
                  <h3>{place.name}</h3>
                  <p>Species Count: {place.species_count}</p>
                </li>
              )
            } else {
              return ''
            }
          })}
        </ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
