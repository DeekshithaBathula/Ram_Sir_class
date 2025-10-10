import logo from './logo.svg';
import './App.css';

function App() {
  var firstName = "Deekshi";
  var lastName = "Bathula";
  var age = 21;
  return (
    <div className="App">
      <h1>Person Information</h1>
      <p>First Name: {firstName}</p>
      <p>Last Name: {lastName}</p>
      <p>Age: {age}</p>
    </div>
  );
}

export default App;
