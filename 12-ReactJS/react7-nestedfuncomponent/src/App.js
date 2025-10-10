import logo from './logo.svg';
import './App.css';
function App() {
  return (
    <div className="App">
      <h3>Welcome to Root component</h3>
      <MyData/>
      <h1>End root component</h1>
    </div>
  );
}
//MyData component contains MyFunction component inside it
function MyData(){
  //Nested MyFunction component
  function MyFunction(){
    var firstName = "Deekshi";
    var lastName = "Bathula";
    var age = 21;
    return(
      <div className="MyFunction">
        <h3>This is MyFunction Nested Component</h3>
        <h3>Person Information</h3>
        First Name: {firstName}<br/>
        Last Name: {lastName}<br/>
        Age: {age}<br/>
      </div>
    );
  }
  return(
    <div className="MyData">
      <h3>MyData Component</h3>
      {/*Using MyFunction inside MyData*/}
      <MyFunction/>
      </div>
  );
}
export default App;
