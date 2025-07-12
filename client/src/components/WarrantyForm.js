import React, { useState } from 'react';

const WarrantyForm = ({ onAddWarranty }) => {
    const [warrantyFor, setWarrantyFor] = useState('');
    const [warrantyExpiration, setWarrantyExpiration] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!warrantyFor.trim() || !warrantyExpiration.trim() || !description.trim() || !status.trim()) return;
    onAddWarranty(warrantyFor, warrantyExpiration, description, status);
    setWarrantyFor('');
    setWarrantyExpiration('');
    setDescription('');
    setStatus('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Warranty For"
        value={warrantyFor}
        onChange={e => setWarrantyFor(e.target.value)}
      />
      <input
        type="date"
        placeholder="Warranty Expiration Date"
        value={warrantyExpiration}
        onChange={e => setWarrantyExpiration(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Status"
        value={status}
        onChange={e => setStatus(e.target.value)}
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default WarrantyForm;
