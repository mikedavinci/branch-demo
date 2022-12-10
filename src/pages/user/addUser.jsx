import React, { useState } from 'react';
import style from './style.module.css';
import { useNavigate } from 'react-router-dom';
const userDefault = { email: '', name: '', role: '' };
const AddUser = ({ onHandleAdduser }) => {
  const [user, setUser] = useState(userDefault);
  const navigate = useNavigate();
  const handleChange = (event) => {
    const { value, name } = event.target;
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = () => {
    onHandleAdduser(user);

    setUser(userDefault);
    navigate('/');
  };
  return (
    <div className={style.add_user_root}>
      <div className={style.email_section}>
        <input
          type="text"
          className={style.email}
          placeholder="Insert Email"
          name="email"
          required
          value={user.email}
          onChange={handleChange}
        />

        <input
          type="submit"
          value="Save"
          onClick={handleSubmit}
          className={style.submit}
        />
      </div>

      <div className={style.add_user_main_section}>
        <div className={style.name_section}>
          <label htmlFor="name">Name</label>
          <br />
          <input
            type="text"
            id="name"
            name="name"
            required
            value={user.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <div className={style.role_section}>
            <input
              type="radio"
              id="admin"
              name="role"
              value="ADMIN"
              checked={user.role === 'ADMIN'}
              onChange={handleChange}
            />
            <label htmlFor="admin">Admin</label>
          </div>
          <div className={style.role_section}>
            <input
              type="radio"
              id="developer"
              name="role"
              value="DEVELOPER"
              checked={user.role === 'DEVELOPER'}
              onChange={handleChange}
            />
            <label htmlFor="developer">Developer</label>
          </div>
          <div className={style.role_section}>
            <input
              type="radio"
              id="AppManager"
              name="role"
              value="APP_MANAGER"
              checked={user.role === 'APP_MANAGER'}
              onChange={handleChange}
            />
            <label htmlFor="AppManager">App Manager</label>
          </div>
          <div className={style.role_section}>
            <input
              type="radio"
              id="marketing"
              name="role"
              value="MARKETING"
              checked={user.role === 'MARKETING'}
              onChange={handleChange}
            />
            <label htmlFor="marketing">Marketing</label>
          </div>
          <div className={style.role_section}>
            <input
              type="radio"
              id="sales"
              name="role"
              value="SALES"
              checked={user.role === 'SALES'}
              onChange={handleChange}
            />
            <label htmlFor="sales">Sales</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
