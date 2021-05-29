import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <h2 className="h-screen flex items-center justify-center flex-col">
      <Link to="/home/patron/dashboard">Patron Dashboard</Link>
      <Link to="home/my-requests">My Requests</Link>
      <Link to="home/patron-requests">Patron Requests</Link>
    </h2>
  );
};

export default Home;
