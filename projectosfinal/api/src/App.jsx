import React, { useState, useEffect } from 'react';
import './App.css'; 

const API_URL = 'https://jsonplaceholder.typicode.com/users';

export default function CrudDashboard() {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [editingId, setEditingId] = useState(null);

  const [isInitialLoading, setIsInitialLoading] = useState(false); 
  const [isSubmitting, setIsSubmitting] = useState(false);         
  const [deletingId, setDeletingId] = useState(null);           
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setIsInitialLoading(true);
    setError(null);
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error('Error al cargar los usuarios.');
      const data = await response.json();
      setUsers(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsInitialLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return alert('Por favor, rellena todos los campos.');

    const normalizedEmail = formData.email.trim().toLowerCase();

    setError(null);

    if (editingId) {
      const emailExists = users.some(
        (user) => user.email.trim().toLowerCase() === normalizedEmail && user.id !== editingId
      );
      if (emailExists) {
        setError('El correo electrónico ya está registrado en otro usuario.');
        return;
      }
    } else {
      const emailExists = users.some(
        (user) => user.email.trim().toLowerCase() === normalizedEmail
      );
      if (emailExists) {
        setError('Este correo electrónico ya se encuentra registrado.');
        return;
      }
    }

    setIsSubmitting(true);

    try {
      if (editingId) {
        if (editingId > 10) {
          await new Promise(resolve => setTimeout(resolve, 500));
        } else {
          const response = await fetch(`${API_URL}/${editingId}`, {
            method: 'PUT',
            body: JSON.stringify(formData),
            headers: { 'Content-type': 'application/json; charset=UTF-8' },
          });
          if (!response.ok) throw new Error('Error al actualizar el usuario.');
        }

        setUsers(users.map(user => user.id === editingId ? { ...user, ...formData } : user));
        setEditingId(null);
      } else {

        const response = await fetch(API_URL, {
          method: 'POST',
          body: JSON.stringify(formData),
          headers: { 'Content-type': 'application/json; charset=UTF-8' },
        });
        if (!response.ok) throw new Error('Error al crear el usuario.');
        const newUser = await response.json();

        const uniqueId = Date.now();
        setUsers([{ ...newUser, id: uniqueId }, ...users]);
      }

      setFormData({ name: '', email: '' });
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEditClick = (user) => {
    
    setError(null);
    setEditingId(user.id);
    setFormData({ name: user.name, email: user.email });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setFormData({ name: '', email: '' });
    setError(null);
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm('¿Estás seguro de que deseas eliminar este usuario?');
    if (!confirmDelete) return;

    setDeletingId(id);
    setError(null);

    try {
      if (id <= 10) {
        const response = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
        if (!response.ok) throw new Error('Error al eliminar el usuario.');
      } else {
        await new Promise(resolve => setTimeout(resolve, 500));
      }

      setUsers(users.filter(user => user.id !== id));
    } catch (err) {
      setError(err.message);
    } finally {
      setDeletingId(null);
    }
  };

  const isAnyActionPending = isSubmitting || deletingId !== null;

  return (
    <div className="crud-container">
      <h2>Panel de Administración de Usuarios</h2>

      <section className="crud-card">
        <h3>{editingId ? 'Editar Usuario' : 'Agregar Nuevo Usuario'}</h3>
        <form onSubmit={handleSubmit} className="crud-form">
          <input
            className="crud-input"
            type="text"
            name="name"
            placeholder="Nombre completo"
            value={formData.name}
            onChange={handleChange}
            required
            disabled={isSubmitting}
          />
          <input
            className="crud-input"
            type="email"
            name="email"
            placeholder="Correo electrónico"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={isSubmitting}
          />
          <button className="btn btn-primary" type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Guardando...' : editingId ? 'Actualizar' : 'Guardar'}
          </button>
          {editingId && (
            <button className="btn btn-secondary" type="button" onClick={cancelEdit} disabled={isSubmitting}>
              Cancelar
            </button>
          )}
        </form>
      </section>

      {error && <div className="status-msg status-error">⚠️ Error: {error}</div>}

      <section className="table-container">
        {isInitialLoading ? (
          <div className="status-msg status-loading">⏳ Cargando listado de usuarios...</div>
        ) : users.length === 0 ? (
          <p style={{ padding: '20px', textAlign: 'center', color: '#64748b' }}>No hay usuarios disponibles.</p>
        ) : (
          <table className="crud-table">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Email</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <div className="actions-cell">
                      <button 
                        className="btn btn-edit" 
                        onClick={() => handleEditClick(user)}
                        disabled={isAnyActionPending}
                      >
                        Editar
                      </button>
                      <button 
                        className="btn btn-delete" 
                        onClick={() => handleDelete(user.id)}
                        disabled={isAnyActionPending}
                      >
                        {deletingId === user.id ? 'Eliminando...' : 'Eliminar'}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>
    </div>
  );
}