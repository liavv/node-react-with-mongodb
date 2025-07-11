import React, { useState, useEffect } from 'react';
import NameForm from './components/NameForm';
import NameTable from './components/NameTable';
import axios from 'axios';

const App = () => {
  const [names, setNames] = useState([]);

  const fetchNames = async () => {
    console.log('Fetching names from API...', process.env.REACT_APP_API_URL) ;
    const res = await axios.get(`/api/names/all`);
    setNames(res.data);
  };

  useEffect(() => {
    fetchNames();
  }, []);

  const addName = async (name) => {
    await axios.post(`/api/names/add`, { name });
    fetchNames();
  };

  return (
    <div>
      <h1>Enter Your Name please!!!</h1>
      <NameForm onAddName={addName} />
      <NameTable names={names} />
    </div>
  );
};

export default App;
