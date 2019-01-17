import React from 'react';
import Background from '../Background/Background';
import Logo from '../Logo/Logo';
import Card from '../Card/Card';
import SideBackground from '../SideBackground/SideBackground';

const Head = (props) => (
    <div>
        <Background BackgroundTheme={"bg-theme"} />
        <div className="site-content">
            <Logo />
            <Card>
                <div className="container-content">{props.children}</div>
                <SideBackground />
            </Card>
        </div>
    </div>
);

export default Head;
