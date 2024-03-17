import React from 'react';
import Header from '../../components/Header/Header';
import Categories from '../../containers/Categories/Categories';

/**
 * @description Home page of Sitback furniture
 * @returns 
 */
function Home() {
    return (
        <>
            <Header />
            <Categories />
        </>
    );
}

export default Home;