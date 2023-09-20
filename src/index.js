import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import './index.css';
import AppBar from './AppBar';
import Box from '@mui/material/Box';
import Artifacts from './components/Artifacts';
import Main from './components/Main';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
    <AppBar />
    <Box display="flex" sx={{ px: '5%' }}>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/artifacts" element={<Artifacts />} />
      </Routes>
    </Box>
  </Router>,
  document.getElementById('root')
);