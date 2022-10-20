import React, { useState, useEffect, useRef } from "react";
import styles from './LandingView.module.scss';

export const LandingView = (props) => {

    const [menuItems, setMenuItems] = useState([
        { value: 'new-game', text: 'Start New Game' },
        { value: 'load-prompts', text: 'Load Prompts' },
        { value: 'new-prompts', text: 'Create New Prompts' },
    ])
    const [imageSrc, setImageSrc] = useState(`https://picsum.photos/400`);

    return (
        <section className={styles.rootContainer}>
            <h1>"That One Bingo Game"</h1>
            <img className={styles.landingImage} src={imageSrc} />
            <menu className={styles.landingMenu}>
                {menuItems.map(((el, index) => (
                    <li key={index}>
                        <button className={styles.menuButton} value={el.value} >{el.text}</button>
                    </li>
                )))}
            </menu>
            <footer className={styles.footer}>
                <small>I made this, it is simply amazing</small>
                <small>© Dan Morales</small>
            </footer>
        </section>
    )
};
