import React from 'react';
import { Link } from 'react-router-dom';
import ImagesLogo from '../../../assets/images/logo/permata-bank.svg';

const Logo = (props) => (
    <div class="header">
        <Link to="#" class="permata-bank-logo">
            <img src={ImagesLogo} alt="Permata Bank Logo" />
        </Link>
    </div>
)

export default Logo;
