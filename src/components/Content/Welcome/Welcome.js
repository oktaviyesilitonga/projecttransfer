import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Welcome extends Component {
    render() {
        return (
            <div>
                <p>Halo, Selamat datang di <strong className="color-primary">PermataBank</strong></p>
                <p>Silakan menekan tombol <strong>Lanjut</strong> untuk menyelesaikan Transfer</p>
                <div className="wrapper-button">
                    <Link to="/resendcode" className="button button-primary">Lanjut</Link>
                </div>
            </div>
        )
    }
}

export default Welcome
