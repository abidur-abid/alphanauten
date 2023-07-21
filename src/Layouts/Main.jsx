import React from 'react';
import Header from '../Components/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';

const Main = () => {
    return (
       <>
       <Header></Header>
       <Outlet></Outlet>
       <Footer></Footer>
       </>
    );
};

export default Main;