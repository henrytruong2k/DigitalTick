import React from 'react';
import './Layout.scss';
import Navbar from 'ui/molecules/Navbar/Navbar';
import Footer from 'ui/molecules/Footer/Footer';
interface ILayout{
    children: React.ReactNode
}

const Layout:React.FC<ILayout> = (props: any):React.ReactElement => {
    const {children} = props;
    return (
        <div className="layout">
            <div className="layout__top">
                <Navbar/>
                <div>
                    {children}
                </div>
            </div>
     
                <Footer/>
            
        </div>
    )
}

export default Layout
