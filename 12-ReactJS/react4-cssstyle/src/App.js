import logo from './logo.svg';
import './App.css';

function App() {
  var firstName = "Deekshi";
  var lastName = "Bathula";
  var age = 21;
  var job = "Software Engineer";
  const mystyles = {
    margin: '28px',
    padding: '28px',
    boxSizing: 'border-box',
    borderRadius: '10px',
    boxShadow: '0 8px 20px #ddd'
  };
  return (
    <div className="App">
      <div style={mystyles}>
        <h3>Hello Welcome to ReactJs with CSS</h3>
        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
        <p>Age: {age}</p>
        <p>Job: {job}</p>
      </div>
        
     
    </div>
  );
}

export default App;
