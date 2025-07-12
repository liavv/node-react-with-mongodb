import React from 'react';

const WarrantyTable = ({ warranties }) => (
  <table border="1" cellPadding="5">
    <thead>
      <tr>
        <th>ID</th>
        <th>WarrantyFor</th>
        <th>WarrantyExpiration</th>
        <th>Description</th>
        <th>Status</th>
        <th>Timestamp</th>
      </tr>
    </thead>
    <tbody>
      {warranties.map(n => (
        <tr key={n._id}>
          <td>{n._id}</td>
          <td>{n.warrantyFor}</td>
          <td>{n.WarrantyExpiration}</td>
          <td>{n.description}</td>
          <td>{n.status}</td>
          <td>{new Date(n.createdAt).toLocaleString()}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default WarrantyTable;
