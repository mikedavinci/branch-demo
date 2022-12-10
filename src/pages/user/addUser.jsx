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
          name="email"
          value={user.email}
          onChange={handleChange}
        />
        <input type="submit" value="Save" onClick={handleSubmit} className={style.submit} />
      </div>

      <div className={style.add_user_main_section}>
        <div className={style.name_section}>
          <label htmlFor="name">Name</label>
          <br />
          <input type="text" id="name" name="name" value={user.name} onChange={handleChange} />
        </div>
        <div>
          <div className={style.role_section}>
            <input
              type="radio"
              id="admin"
              name="role"
              value="admin"
              checked={user.role === 'admin'}
              onChange={handleChange}
            />
            <label htmlFor="admin">Admin</label>
          </div>
          <div className={style.role_section}>
            <input
              type="radio"
              id="developer"
              name="role"
              value="developer"
              checked={user.role === 'developer'}
              onChange={handleChange}
            />
            <label htmlFor="developer">Developer</label>
          </div>
          <div className={style.role_section}>
            <input
              type="radio"
              id="AppManager"
              name="role"
              value="AppManager"
              checked={user.role === 'AppManager'}
              onChange={handleChange}
            />
            <label htmlFor="AppManager">App Manager</label>
          </div>
          <div className={style.role_section}>
            <input
              type="radio"
              id="marketing"
              name="role"
              value="marketing"
              checked={user.role === 'marketing'}
              onChange={handleChange}
            />
            <label htmlFor="marketing">Marketing</label>
          </div>
          <div className={style.role_section}>
            <input
              type="radio"
              id="sales"
              name="role"
              value="sales"
              checked={user.role === 'sales'}
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
