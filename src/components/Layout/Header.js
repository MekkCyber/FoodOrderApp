import { Fragment } from "react";
import mealsimage from '../../assets/images/meals.jpg'
import styles from './Header.module.css'
import HeaderCart from "./HeaderCart";

const Header = props => {
    return <Fragment>
        <header className={styles.header}>
            <h1>
                React Meals
            </h1>
            <HeaderCart/>
        </header>
        <div>
            <img src={mealsimage} style={{width : '100%'}} alt='nothing'/>
        </div>
    </Fragment>
}

export default Header