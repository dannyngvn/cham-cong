import React from 'react';
import './User.css';
const User = () => {
  return (
    <div className="use">
      <div className="avatar">
        <img
          src="/309829944_1477677376067461_276291726763527414_n.jpg"
          alt="avatar"
        />
      </div>
      <div className="information-use">
        <div className="status-use">
          <div className="status"></div>
          <p>Dang hoat dong</p>
        </div>

        <h6>Ho va Ten</h6>
        <h6>Chuc vu</h6>
        <h6>Phong ban</h6>
      </div>
    </div>
  );
};

export default User;
