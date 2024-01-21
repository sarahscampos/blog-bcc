import { NavLink } from 'react-router-dom';
import styles from './MenuLink.module.css';

export default function MenuLink({ children, rota }) {

    return (
        <NavLink 
            className={ ({ isActive }) => `
                ${styles.link}
                ${isActive ? styles.link_destacado : ""}
            `} 
            to={rota}
            end
        >
            {children}
        </NavLink>
    )
};