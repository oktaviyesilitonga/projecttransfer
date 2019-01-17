import React, { Component } from 'react';
import EnterOtp from '../../../assets/images/icon/enter-otp.svg';
import ErrorOtp from '../../../assets/images/icon/error-otp.svg';

class ResendCode extends Component {
    render() {
        return (
            <div>
                <div class="resend-code-icon">
                    <img src={EnterOtp} alt="Enter OTP" class="icon-initialize" />
                    <img src={ErrorOtp} alt="Enter OTP" class="icon-error-otp" />
                </div>
                <div class="resend-code-title">
                    <h5><span>6 Digit</span> Kode Verifikasi</h5>
                </div>
                <div class="resend-code-error-otp">
                    Maaf, kode yang kamu masukkan salah.<br />
                    Mohon coba kembali.
				</div>
                <div class="resend-code-form">
                    <form action="detail-bank.html" class="form jsFormOTPCode" autocomplete="off">
                        <div class="input-row">
                            <input name="otp_code" type="text" class="input-text jsInputNumber jsOTPCode" pattern="\d*" maxlength="6" value="" autocomplete="off" />
                        </div>
                    </form>
                </div>
                <div class="resend-code-button">
                    <a href="resend-code.html" class="resend-button">Kirim Ulang Kode</a>
                    <a href="welcome.html" class="close-button">Tombol Tutup</a>
                </div>
                <div class="wrapper-button">
                    <button type="button" class="button button-primary button-disabled jsConfirmVerificationCode" data-jsonurl="data/resend-code.json">Konfirmasi Kode</button>
                </div>
            </div>
        )
    }
}

export default ResendCode
