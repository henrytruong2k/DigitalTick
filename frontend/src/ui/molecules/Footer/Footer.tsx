import React from 'react'
import {useMenu} from "hooks/useMenu";
import {useNavigate } from "react-router-dom";
import {Icon} from "resources/icons/Icons"
import "./footer.scss"
const Footer = () => {
    const menu = useMenu();
    const navigate = useNavigate(); 
    const gotoPage = (route: string):void => {
        navigate(route);
    }
    return (
        <div className="footer">
            <div className="footer-menu">
            {menu.map((item) => 
                    <span key={item.route} 
                        className={`footer-menu__item ${item.active? 'footer-menu__item--active': ''}`}
                        onClick={() => gotoPage(item.route)}
                    >
                        {item.label}
                    </span>
                )}
            </div>
            <div className="footer__socials">
            <a href="linked" target="blank" rel="noopener noreferrer">
                        <Icon type="linkedin" />
                    </a>
                    <a href="linked" target="blank" rel="noopener noreferrer">
                        <Icon type="twitter" />
                    </a>
                    <a href="linked" target="blank" rel="noopener noreferrer">
                        <Icon type="facebook" />
                    </a>
                    <a href="linked" target="blank" rel="noopener noreferrer">
                        <Icon type="instagram" />
                    </a>
                    <a href="linked" target="blank" rel="noopener noreferrer">
                        <Icon type="github" />
                    </a>
            </div>
        </div>
    )
}

export default Footer
