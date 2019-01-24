import React, { Component } from 'react';
import LogoTransferUnsuccess from '../../../../assets/images/icon/transfer-unsuccessful.svg';
import { Link } from 'react-router-dom';

class TransferUnsuccess extends Component {
    render() {
        return (
            <div>
                <div className="transfer-icon">
                    <img src={LogoTransferUnsuccess} alt="Transfer Success" />
                </div>
                <div className="bank-account-name">
                    <p>
                        <strong>Abdy Salimin,</strong><br />
                        Kamu tidak berhasil melakukan transfer
					</p>
                </div>
                <div className="wrapper-button">
                    <Link to="/detailbank" className="button button-primary">Ulangi Proses</Link>
                </div>
            </div>
        )
    }
}

export default TransferUnsuccess
