import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="Home">
      <h1>Home Dashboard</h1>
      <ul>
        <li><Link to="/insert-resep">Insert Resep</Link></li>
        <li><Link to="/insert-kategori">Insert Kategori</Link></li>
        <li><Link to="/list-resep">List Resep</Link></li>
      </ul>      
    </div>
  );
}

export default Home;
