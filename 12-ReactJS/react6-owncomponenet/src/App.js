import logo from './logo.svg';
import './App.css';
function App() {
  return (
    <div className="App"> 
<h3>This is Root component</h3>
     <MyFunction></MyFunction>
     <MyData></MyData>
    </div>
  );
}
//own component 
function MyFunction(){
  <h3>Customer Information</h3>
  var Name= "Deekshi";
  var age = 21;
  var gender = "Female";
  var city = "Khammam";
  var country = "India";
  var Education = "B.Tech";
  var occupation = "Student";
  var company = "N/A";
  var experience = "Fresher";
  var email="deekshibath@gmail.com";
  var phone="9866940462";
  var address="Khammam, Telangana, India";
  var hobbies="Reading, Traveling, Cooking";
  var skills="JavaScript, React, HTML, CSS";
  var languages="English, Hindi, Telugu";
  var maritalStatus="Single";
  return(
    <div className="MyFunction">
      <h3>Customer Information</h3>
      Name: {Name}<br></br>
      Gender: {gender}<br></br>
      Age: {age}<br></br>
      City: {city}<br></br>
      Country: {country}<br></br>
      Education: {Education}<br></br>
      Occupation: {occupation}<br></br>
      Company: {company}<br></br>
      Experience: {experience}<br></br>
      Email: {email}<br></br>
      Phone: {phone}<br></br>
      Address: {address}<br></br>
      Hobbies: {hobbies}<br></br>
      Skills: {skills}<br></br>
      Languages: {languages}<br></br>
      Marital Status: {maritalStatus}<br></br>
    </div>
  );
}
function MyData(){
  return(
    <div className="MyData">
      <h3>Product Information</h3>
      Product Name: Laptop<br></br>
      Brand: Dell<br></br>
      Model: XPS 13<br></br>
      Price: $999--nested<br></br>
      Color: Silver<br></br>
      Weight: 2.7 lbs<br></br>
      Dimensions: 11.6 x 7.8 x 0.6 inches<br></br>
      Processor: Intel Core i7<br></br>
      RAM: 16GB<br></br>
      Storage: 512GB SSD<br></br>
      Graphics: Intel Iris Xe<br></br>
      Operating System: Windows 10<br></br>
      Battery Life: Up to 12 hours<br></br>
      Warranty: 1 year limited warranty<br></br>
      Customer Support: 24/7 phone and chat support<br></br>
      Reviews: 4.5 out of 5 stars<br></br>
      Availability: In stock<br></br>
      Shipping: Free standard shipping<br></br>
      Return Policy: 30-day return policy<br></br>
    </div>
  );
}
export default App;
