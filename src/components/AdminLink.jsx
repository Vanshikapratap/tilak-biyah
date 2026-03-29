import React from 'react';
import { Link } from 'react-router-dom';
import './AdminLink.css';

const AdminLink = () => {
  return (
    <Link to="/admin" className="admin-corner-btn" title="Go to Admin Panel">
      ⚙️ Admin
    </Link>
  );
};

export default AdminLink;
