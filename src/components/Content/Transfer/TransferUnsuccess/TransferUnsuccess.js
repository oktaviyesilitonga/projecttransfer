import React, { Component } from 'react';
import LogoTransferUnsuccess from '../../../../assets/images/icon/transfer-unsuccessful.svg';

class TransferUnsuccess extends Component {
    render() {
        return (
            <div>
                <div class="transfer-icon">
                    <img src={LogoTransferUnsuccess} alt="Transfer Success" />
                </div>
                <div class="bank-account-name">
                    <p>
                        <strong>Abdy Salimin,</strong><br />
                        Kamu tidak berhasil melakukan transfer
					</p>
                </div>
                <div class="wrapper-button">
                    <a href="detail-bank.html" class="button button-primary">Ulangi Proses</a>
                </div>
            </div>
        )
    }
}

export default TransferUnsuccess
