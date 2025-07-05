import React from 'react';

const NameTable = ({ names }) => (
  <table border="1" cellPadding="5">
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Timestamp</th>
      </tr>
    </thead>
    <tbody>
      {names.map(n => (
        <tr key={n._id}>
          <td>{n._id}</td>
          <td>{n.name}</td>
          <td>{new Date(n.createdAt).toLocaleString()}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default NameTable;
