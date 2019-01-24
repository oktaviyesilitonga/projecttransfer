import React, { Component } from 'react';
import EnterOtp from '../../../assets/images/icon/enter-otp.svg';
import ErrorOtp from '../../../assets/images/icon/error-otp.svg';
import { Link } from 'react-router-dom';

class ResendCode extends Component {
    render() {
        return (
            <div>
                <div className="resend-code-icon">
                    <img src={EnterOtp} alt="Enter OTP" className="icon-initialize" />
                    <img src={ErrorOtp} alt="Enter OTP" className="icon-error-otp" />
                </div>
                <div className="resend-code-title">
                    <h5><span>6 Digit</span> Kode Verifikasi</h5>
                </div>
                <div className="resend-code-error-otp">
                    Maaf, kode yang kamu masukkan salah.<br />
                    Mohon coba kembali.
				</div>
                <div className="resend-code-form">
                    <form action="detail-bank.html" className="form jsFormOTPCode" autoComplete="off">
                        <div className="input-row">
                            <input 
                                name="otp_code" 
                                type="text" 
                                className="input-text jsInputNumber jsOTPCode" 
                                pattern="\d*" 
                                maxLength="6" 
                                autoComplete="off" />
                        </div>
                    </form>
                </div>
                <div className="resend-code-button">
                    <Link to="/resendcode" className="resend-button">Kirim Ulang Kode</Link>
                    <Link to="/" className="close-button">Tombol Tutup</Link>
                </div>
                <div className="wrapper-button">
                    <button 
                        type="button" 
                        className="button button-primary button-disabled jsConfirmVerificationCode" 
                        data-jsonurl="data/resend-code.json">Konfirmasi Kode</button>
                </div>
            </div>
        )
    }
}

export default ResendCode
