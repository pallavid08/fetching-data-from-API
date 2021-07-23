import React from 'react';
import DisplayEmployee from './Components/DisplayEmployee';
import axios from 'axios';
import './App.css';

const sampleEmployee = {
  gender: 'male',
  name: {
    first: 'Charlie',
    last: 'Thompson',
  },
  location: {
    street: {
      number: 761,
      name: 'Tay Street',
    },
    city: 'Timaru',
    postcode: 76111,
  },
  email: 'charlie.thompson@example.com',
  picture: {
    medium: 'https://randomuser.me/api/portraits/med/men/40.jpg',
  },
};


function App() {

  const [employee, setEmployee] = React.useState(sampleEmployee);

  const getEmployee = () => {
    // Send the request
    axios
      .get('https://randomuser.me/api?nat=en')
      // Extract the DATA from the received response
      .then((response) => response.data)
      // Use this data to update the state
      .then((data) => {
        
        setEmployee(data.results[0]);
      });
  };

  return (
    <div className="App">
      <DisplayEmployee employee={employee} />
      <button type="button" onClick={getEmployee}>Get employee</button>
    </div>
  );
}

export default App;
