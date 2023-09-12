import React, { useState } from 'react';
import { Routes, Route, Outlet, NavLink } from 'react-router-dom';
import BtnCheck from '../components/BtnCheck';
import './Dashboard.css';
const activeClass = params => {
  return params.isActive ? 'active-item' : '';
};

const Dashboard = () => {
  const { onSubmitFromUseRule, useRuleList } = props;
  return (
    <div className="dashboard">
      <div className="nav-panel">
        <BtnCheck />

        <NavLink to="add-use" className={activeClass}>
          Thêm nhân viên
        </NavLink>
        <NavLink to="danh-sach-nhan-vien" className={activeClass}>
          Danh sách nhân viên
        </NavLink>
        <NavLink to="quan-ly-phep" className={activeClass}>
          Quan ly phep
        </NavLink>
        <NavLink to="quan-ly-vai-tro" className={activeClass}>
          Quan ly vai tro
        </NavLink>
      </div>
      <div className="main">
        <Outlet
          onSubmitFromUseRule={onAddNewUseRule}
          useRuleList={useRuleList}
        />
      </div>
    </div>
  );
};

export default Dashboard;
