import React, { useState } from 'react';

const NameForm = ({ onAddName }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    onAddName(name);
    setName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Your name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default NameForm;
