import React, { useState, useEffect } from 'react';
import NameForm from './components/NameForm';
import NameTable from './components/NameTable';
import axios from 'axios';

const App = () => {
  const [names, setNames] = useState([]);

  const fetchNames = async () => {
    console.log('Fetching names from API...', process.env.REACT_APP_API_URL) ;
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/all`);
    setNames(res.data);
  };

  useEffect(() => {
    fetchNames();
  }, []);

  const addName = async (name) => {
    await axios.post(`${process.env.REACT_APP_API_URL}/add`, { name });
    fetchNames();
  };

  return (
    <div>
      <h1>Enter Your Name pleassswsse</h1>
      <NameForm onAddName={addName} />
      <NameTable names={names} />
    </div>
  );
};

export default App;
