import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import { Link } from 'react-router-dom';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const { gardens, setGardens, updateGarden, services, setServices, updateService, logout } = useData();
  const [activeTab, setActiveTab] = useState('gardens');

  // Editing state
  const [editingId, setEditingId] = useState(null);
  const [editFormData, setEditFormData] = useState({});

  // New item states
  const [newGarden, setNewGarden] = useState({ name: '', location: '', capacity: '', image: '', description: '' });
  const [newService, setNewService] = useState({ title: '', icon: '', image: '', description: '' });

  const handleAddGarden = (e) => {
    e.preventDefault();
    setGardens([...gardens, { ...newGarden, id: Date.now() }]);
    setNewGarden({ name: '', location: '', capacity: '', image: '', description: '' });
  };

  const handleDeleteGarden = (id) => {
    if (window.confirm("Are you sure you want to delete this venue?")) {
      setGardens(gardens.filter(g => g.id !== id));
    }
  };

  const handleEditClick = (item) => {
    setEditingId(item.id);
    setEditFormData(item);
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditFormData({});
  };

  const handleSaveGarden = () => {
    updateGarden(editingId, editFormData);
    setEditingId(null);
    setEditFormData({});
  };

  const handleAddService = (e) => {
    e.preventDefault();
    setServices([...services, { ...newService, id: Date.now() }]);
    setNewService({ title: '', icon: '', image: '', description: '' });
  };

  const handleDeleteService = (id) => {
    if (window.confirm("Are you sure you want to delete this service?")) {
      setServices(services.filter(s => s.id !== id));
    }
  };

  const handleSaveService = () => {
    updateService(editingId, editFormData);
    setEditingId(null);
    setEditFormData({});
  };

  // Render Functions
  const renderGardensTab = () => (
    <div className="admin-panel-content">
      <h3>Manage Venues (Gardens)</h3>
      <table className="admin-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Location</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {gardens.map(g => (
            <tr key={g.id}>
              {editingId === g.id ? (
                <>
                  <td><input type="text" value={editFormData.name || ''} onChange={(e) => setEditFormData({ ...editFormData, name: e.target.value })} style={{ width: '100%', padding: '5px' }} /></td>
                  <td><input type="text" value={editFormData.location || ''} onChange={(e) => setEditFormData({ ...editFormData, location: e.target.value })} style={{ width: '100%', padding: '5px' }} /></td>
                  <td>
                    <button className="btn-save" onClick={handleSaveGarden} style={{ marginRight: '5px', padding: '5px 10px', fontSize: '0.8rem' }}>Save</button>
                    <button className="btn-back" onClick={handleCancelEdit} style={{ padding: '5px 10px', fontSize: '0.8rem' }}>Cancel</button>
                  </td>
                </>
              ) : (
                <>
                  <td>{g.name}</td>
                  <td>{g.location}</td>
                  <td>
                    <button className="btn-select btn-outline" onClick={() => handleEditClick(g)} style={{ marginRight: '5px', padding: '5px 10px', fontSize: '0.8rem' }}>Edit</button>
                    <button className="btn-delete" onClick={() => handleDeleteGarden(g.id)} style={{ padding: '5px 10px', fontSize: '0.8rem' }}>Delete</button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="admin-form-container glass-admin">
        <h4>Add New Venue</h4>
        <form onSubmit={handleAddGarden} className="admin-form">
          <input type="text" placeholder="Name" required value={newGarden.name} onChange={e => setNewGarden({ ...newGarden, name: e.target.value })} />
          <input type="text" placeholder="Location" required value={newGarden.location} onChange={e => setNewGarden({ ...newGarden, location: e.target.value })} />
          <input type="text" placeholder="Capacity (e.g. 1000 - 2000 Guests)" required value={newGarden.capacity} onChange={e => setNewGarden({ ...newGarden, capacity: e.target.value })} />
          <input type="text" placeholder="Image URL" required value={newGarden.image} onChange={e => setNewGarden({ ...newGarden, image: e.target.value })} />
          <textarea placeholder="Description" required value={newGarden.description} onChange={e => setNewGarden({ ...newGarden, description: e.target.value })} rows="3"></textarea>
          <button type="submit" className="btn-save">Add Venue</button>
        </form>
      </div>
    </div>
  );

  const renderServicesTab = () => (
    <div className="admin-panel-content">
      <h3>Manage Services</h3>
      <table className="admin-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Icon</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {services.map(s => (
            <tr key={s.id}>
              {editingId === s.id ? (
                <>
                  <td><input type="text" value={editFormData.title || ''} onChange={(e) => setEditFormData({ ...editFormData, title: e.target.value })} style={{ width: '100%', padding: '5px' }} /></td>
                  <td><input type="text" value={editFormData.icon || ''} onChange={(e) => setEditFormData({ ...editFormData, icon: e.target.value })} style={{ width: '50px', padding: '5px' }} /></td>
                  <td>
                    <button className="btn-save" onClick={handleSaveService} style={{ marginRight: '5px', padding: '5px 10px', fontSize: '0.8rem' }}>Save</button>
                    <button className="btn-back" onClick={handleCancelEdit} style={{ padding: '5px 10px', fontSize: '0.8rem' }}>Cancel</button>
                  </td>
                </>
              ) : (
                <>
                  <td>{s.title}</td>
                  <td>{s.icon}</td>
                  <td>
                    <button className="btn-select btn-outline" onClick={() => handleEditClick(s)} style={{ marginRight: '5px', padding: '5px 10px', fontSize: '0.8rem' }}>Edit</button>
                    <button className="btn-delete" onClick={() => handleDeleteService(s.id)} style={{ padding: '5px 10px', fontSize: '0.8rem' }}>Delete</button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="admin-form-container glass-admin">
        <h4>Add New Service</h4>
        <form onSubmit={handleAddService} className="admin-form">
          <input type="text" placeholder="Title" required value={newService.title} onChange={e => setNewService({ ...newService, title: e.target.value })} />
          <input type="text" placeholder="Emoji Icon (e.g. 📸)" required value={newService.icon} onChange={e => setNewService({ ...newService, icon: e.target.value })} />
          <input type="text" placeholder="Image URL" required value={newService.image} onChange={e => setNewService({ ...newService, image: e.target.value })} />
          <textarea placeholder="Description" required value={newService.description} onChange={e => setNewService({ ...newService, description: e.target.value })} rows="3"></textarea>
          <button type="submit" className="btn-save">Add Service</button>
        </form>
      </div>
    </div>
  );

  return (
    <div className="admin-layout">
      <div className="admin-sidebar">
        <div className="admin-logo">
          <h2>Tilak byah</h2>
          <span className="badge">Admin Panel</span>
        </div>
        <nav className="admin-nav">
          <button className={activeTab === 'gardens' ? 'active' : ''} onClick={() => setActiveTab('gardens')}>Venues</button>
          <button className={activeTab === 'services' ? 'active' : ''} onClick={() => setActiveTab('services')}>Services</button>
        </nav>
        <div className="admin-footer">
          <button className="btn-back" style={{ marginBottom: '10px', width: '100%', border: 'none', cursor: 'pointer', background: 'rgba(220, 53, 69, 0.8)' }} onClick={logout}>Log Out</button>
          <Link to="/" className="btn-back">← Back to Site</Link>
        </div>
      </div>

      <div className="admin-main">
        <header className="admin-header">
          <h1>Dashboard Overview</h1>
        </header>

        {activeTab === 'gardens' && renderGardensTab()}
        {activeTab === 'services' && renderServicesTab()}
      </div>
    </div>
  );
};

export default AdminDashboard;
