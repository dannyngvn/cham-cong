import React from 'react';
import { useState } from 'react';

const UserRule = () => {
  const { onAddNewUseRule } = props;
  const [useRuleValue, setUseRuleVlue] = useState({
    ruleName: '',
  });

  const onUseRuleChange = e => {
    setUseRuleVlue({
      ...useRuleValue,
      ruleName: e.target.value,
    });
  };

  const onSubmitFromUseRule = e => {
    //ngăn không cho trang reload khi submit
    e.preventDefault();
    onAddNewUseRule(useRuleValue);
    setUseRuleVlue({ ruleName: '' });
  };

  return (
    <div>
      <div>
        <h1>Thêm Danh Mục Sản Phẩm</h1>
        <form onSubmit={onSubmitFromUseRule} className="add-product-form">
          <label htmlFor="">Tên Quyền Hạn</label>
          <input
            type="text"
            value={useRuleValue.ruleName}
            onChange={onUseRuleChange}
          />
          <button type="submit">Thêm Quyền Hạn</button>
        </form>
      </div>
      <div></div>
    </div>
  );
};

export default UserRule;
