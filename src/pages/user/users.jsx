import React from 'react';
import style from './style.module.css';
import { useNavigate } from 'react-router-dom';

const Users = ({
  users,
  onHandleUserSelection,
  isUserDeleteEnable,
  onHandleUserRemove,
  loading,
}) => {
  const navigate = useNavigate();
  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <div className={style.head}>
        <h2>Users</h2>
        <div>
          <button
            className={`${style.user_button}
          }`}
            onClick={() => navigate('/add')}
            style={{ cursor: 'pointer' }}
          >
            Add User
          </button>{' '}
          <button
            className={`${style.user_button} ${
              !isUserDeleteEnable
                ? style.user_button_disabled
                : style.user_button_enabled
            }`}
            disabled={!isUserDeleteEnable}
            onClick={onHandleUserRemove}
          >
            Delete
          </button>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Email</th>
            <th>Name</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr key={user.email}>
                <td>
                  <input
                    type="checkbox"
                    onChange={() => onHandleUserSelection(index)}
                    checked={user.isSelected}
                  />
                </td>
                <td>{user.email}</td>
                <td>{user.name}</td>
                <td>{user.role}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
