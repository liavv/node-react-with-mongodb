import React, { useState, useEffect } from 'react';
import NameForm from './components/NameForm';
import WarrantyForm from './components/WarrantyForm';
import WarrantyTable from './components/WarrantyTable';
import NameTable from './components/NameTable';
import axios from 'axios';

const App = () => {
  const [names, setNames] = useState([]);
  const [warranties, setWarranties] = useState([]);


  const fetchNames = async () => {
    console.log('Fetching names from API...', process.env.REACT_APP_API_URL) ;
    const res = await axios.get(`/api/names/all`);
    setNames(res.data);
  };

  const fetchWarranties = async () => {
    console.log('Fetching Warranties from API...', process.env.REACT_APP_API_URL) ;
    const resWarranties = await axios.get(`/api/warranties/all`);
    setWarranties(resWarranties.data);
  };
  useEffect(() => {
    fetchNames();
    fetchWarranties();
  }, []);

  const addName = async (name) => {
    await axios.post(`/api/names/add`, { name });
    fetchNames();
  };

  const addWarranty = async (warrantyFor,warrantyExpiration,description,status) => {
    await axios.post(`/api/warranties/add`, { warrantyFor,warrantyExpiration,description,status });
    fetchWarranties();
  };
  return (
    <div>
      <h1>Enter Your Name please!!!</h1>
      <NameForm onAddName={addName} />
      <WarrantyForm onAddWarranty={addWarranty} />
      <NameTable names={names} />
      <WarrantyTable warranties={warranties} />
    </div>
  );
};

export default App;
