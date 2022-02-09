import React from 'react';
import {useNavigate } from "react-router-dom";
import './Navbar.scss';
import {useMenu} from "hooks/useMenu";
import {Icon} from "resources/icons/Icons";
import Logo from "resources/logo/monchi.png";
import IconVN from "assets/lang/vn-flag.svg";
import IconEN from "assets/lang/en-flag.svg";
const Navbar = () => {
    const menu = useMenu();
    const navigate = useNavigate(); 
    const gotoPage = (route: string):void => {
        navigate(route);
    }
    return (
        <>
           <div className="w-100">
                <nav className="navbar navbar-expand-lg navbar-light ">
                    <a className="navbar-brand" href="#">
                        <img src={Logo} alt=""  />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="navbar-title">
                            <h1>
                                Đào tạo số 1 Việt Nam
                            </h1>
                        </div>
                       
                        <form className="d-flex  navbar-form">
                            <input className="form-control me-2 border-none " type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn border-none " type="submit">
                                <Icon type="search" />
                            </button>
                        </form>
                        <div className="nav-lang d-flex">
                            <img src={IconVN} alt="" />
                            <img src={IconEN} alt="" />
                        </div>
                    </div>
                </nav>
                <nav className="navbar navbar-expand-lg navbar-bottom">
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Pricing</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown link
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </nav>
           </div>
        </>
      
    )
}

export default Navbar
