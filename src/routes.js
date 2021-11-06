import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Layout from './hoc/Layout';

const AppRoutes = () => {
    return(
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </Layout>
    )
}

export default AppRoutes;