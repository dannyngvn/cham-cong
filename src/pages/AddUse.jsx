import { useState } from 'react';
import './AddUse.css';

const AddUse = props => {
  const { useRuleList, onAddnewUse } = props;
  const [useValue, setUseValue] = useState({
    useName: '',
    useBirthday: '',
    useSex: '',
    useEmail: '',
    usePassword: '',
    useRule: '',
    UseImage: '',
  });

  const useValueChange = e => {
    const { value, name } = e.target;
    setUseValue({
      ...useValue,
      [name]: value,
    });
  };

  const onSubmitAddNewUse = e => {
    e.preventDefault();
    onAddnewUse(useValue);
    setUseValue({
      useName: '',
      useBirthday: '',
      useSex: '',
      useEmail: '',
      usePassword: '',
      useRule: '',
      UseImage: '',
    });
  };
  return (
    <div>
      <h1>Thêm nhân viên</h1>
      <form className="form-add-use" onSubmit={onSubmitAddNewUse}>
        <label htmlFor="">Email</label>
        <input
          type="email"
          placeholder="Email"
          value={useValue.useEmail}
          name="useEmail"
          onChange={useValueChange}
        />
        <label htmlFor="">Mật khẩu</label>
        <input
          type="password"
          value={useValue.usePassword}
          name="usePassword"
          onChange={useValueChange}
        />
        <label htmlFor="">Họ và tên</label>
        <input
          type="text"
          placeholder="Họ và tên"
          value={useValue.useName}
          name="useName"
          onChange={useValueChange}
        />
        <label htmlFor="">Ngày sinh</label>
        <input
          type="date"
          name="useBirthday"
          value={useValue.useBirthday}
          onChange={useValueChange}
        />
        <label htmlFor="">Giới tính</label>
        <select
          type="text"
          value={useValue.useSex}
          name="useSex"
          onChange={useValueChange}
        >
          <option value="">chon gioi tinh</option>
          <option value="Nam">Nam</option>
          <option value="Nu">Nữ</option>
        </select>
        <label htmlFor="">Rule</label>
        <select
          value={useValue.useRule}
          onChange={useValueChange}
          name="useRule"
        >
          {useRuleList.map(rule => {
            const { useRuleId, ruleName } = rule;
            return (
              <option key={useRuleId} value={ruleName}>
                {ruleName}
              </option>
            );
          })}
        </select>
        <label htmlFor="">Hình ảnh</label>
        <input
          type="file"
          value={useValue.UseImage}
          name="UseImage"
          onChange={useValueChange}
        />
        <button type="submit">Thêm nhân viên mới</button>
      </form>
    </div>
  );
};

export default AddUse;
