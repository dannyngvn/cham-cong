import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import UseList from './pages/UseList';
import UserRule from './pages/UseRule';
import OnLeave from './pages/OnLeave';
import AddUse from './pages/AddUse';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [useRuleList, setUseRuleList] = useState([]);
  const onAddNewUseRule = useRuleValue => {
    const newUseRule = {
      ...useRuleValue,
      useRuleId: uuidv4(),
    };
    //thêm dữ liệu category vào useRuleList
    const newUserRuleList = [...useRuleList, newUseRule];
    setUseRuleList(newUserRuleList);
  };
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="danh-sach-nhan-vien" element={<UseList />} />
        <Route path="quan-ly-phep" element={<OnLeave />} />
        <Route
          path="quan-ly-vai-tro"
          element={<UserRule onAddNewUseRule={onAddNewUseRule} />}
        />
        <Route path="add-use" element={<AddUse useRuleList={useRuleList} />} />
      </Route>

      <Route path="/forgot-password" element={<ForgotPassword />} />
    </Routes>
  );
}

export default App;
