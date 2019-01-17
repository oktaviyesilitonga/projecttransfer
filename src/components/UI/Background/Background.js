import React from 'react';
import ImageBackground from '../../../assets/images/background/body-desktop.png';

const Background = (props) => (
    <img src={ImageBackground} className={props.BackgroundTheme} alt="ImageBackground" />
)

export default Background;
