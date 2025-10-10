import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
     <h3>Welcome to our function component</h3>
     <MyFunction></MyFunction>
     <MyData></MyData>
    </div>
  );
}
//own component 
function MyFunction(){
  var firstName = "Deekshi";
  var lastName = "Bathula";
  var age = 21;
  return(
    <div className="MyFunction">
      <h3>This is myfunction own component:Deekshi</h3>
      <h3>Person Information</h3>
      First Name: {firstName}<br></br>
      Last Name: {lastName}<br></br>
      Age: {age}<br></br>
    </div>
  );
}

function MyData(){
  return(
    <div className="MyData">
      <h3>This is mydata own component</h3>
    </div>
  );
}

export default App;
