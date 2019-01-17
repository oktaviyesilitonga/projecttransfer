import React, { Component } from 'react';
import LogoTransferSuccess from '../../../../assets/images/icon/transfer-success.svg';

class TransferSuccess extends Component {
    render() {
        return (
            <div>
                <div class="transfer-icon">
                    <img src={LogoTransferSuccess} alt="Transfer Success" />
                </div>
                <div class="bank-account-name">
                    <p>
                        <strong>Abdy Salimin,</strong><br />
                        Transaksi telah berhasil dilakukan ke
					</p>
                </div>
                <div class="bank-detail">
                    <p>
                        Bank Central Asia (BCA)<br />
                        <strong>0293-2728-5743</strong>
                    </p>
                </div>
            </div>
        )
    }
}

export default TransferSuccess
