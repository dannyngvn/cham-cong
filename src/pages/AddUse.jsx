import React from 'react';
import './AddUse.css';

const AddUse = () => {
  const { useRuleList } = props;
  return (
    <div>
      <h1>Thêm nhân viên</h1>
      <form className="form-add-use">
        <label htmlFor="">Email</label>
        <input type="email" placeholder="Email" />
        <label htmlFor="">Mật khẩu</label>
        <input type="password" />
        <label htmlFor="">Họ và tên</label>
        <input type="text" placeholder="Họ và tên" />
        <label htmlFor="">Ngày sinh</label>
        <input type="date" name="" id="" />
        <label htmlFor="">Giới tính</label>
        <input type="" name="" id="" />
        <label htmlFor="">Rule</label>
        <label htmlFor="">Hình ảnh</label>
        <input type="file" name="" id="" />
        <button>Thêm nhân viên mới</button>
      </form>
    </div>
  );
};

export default AddUse;
