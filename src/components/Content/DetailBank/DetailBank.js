import React, { Component } from 'react'

class DetailBank extends Component {
    render() {
        return (
            <div>
                <p className="top-sub-head">
                    <strong>Yogie Christian</strong> mengirimkan uang sebesar
				</p>
                <p className="amount">
                    <strong className="color-primary">Rp 5,000,000.</strong>
                </p>
                <p>
                    Silakan pilih bank dan rekening yang diinginkan untuk menyelesaikan proses transfer
				</p>
                <div className="detail-bank-form">
                    <form action="transfer-success.html" className="form jsFormDetailBank" autocomplete="off">
                        <div className="row">
                            <div className="col-lg-6 col-sm-12">
                                <div className="input-row">
                                    <input name="bank_name" type="text" className="input-text input-search jsInputText jsBankName" id="keyInBank" value="" />
                                    <input name="bank_code" type="hidden" className="jsBankCode" />
                                    <label for="keyInBank" className="input-label">Masukkan Nama Bank</label>
                                </div>
                                <div className="popup-bank-data jsBankDataPopup" data-jsonurl="data/bank-list.json">
                                    <div className="popup-header">
                                        <div className="bank-form-input">
                                            <input type="text" name="bank_name" className="input-text jsSearchBank" />
                                        </div>
                                        <div className="popup-close jsCloseBankDataPopup">Close Icon</div>
                                    </div>
                                    <div className="popup-body">
                                        <div className="bank-list jsBankList">
                                            <div className="item selected" data-code="001">Bank Name</div>
											<div className="item" data-code="002">Bank Name</div> 
										</div>
                                        <div className="error-message jsNoResultsBankList">Tidak ada hasil ditemukan</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12">
                                <div className="input-row">
                                    <input name="account_number" type="text" className="input-text jsInputText jsAccountNumber" pattern="\d*" maxlength="24" id="accountNumber" value="" />
                                    <label for="accountNumber" className="input-label">Nomor Rekening</label>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-sm-12">
                                <div className="error-message jsErrorMessageWrongAccount">Kamu memasukkan Nomor Rekening yang tidak dikenal</div>
                            </div>
                        </div>
                        <div className="bank-account-name jsBankAccountName">&nbsp;</div>
                        <div className="bank-reset-form">
                            <div className="not-this-account jsResetDetailBank">Bukan akun ini?</div>
                        </div>
                    </form>
                </div>
                <div className="wrapper-button">
                    <div className="button button-primary button-disabled jsButtonDetailBank" data-check="0" data-jsonurl="data/account-list.json">Lanjut</div>
                </div>
            </div>
        )
    }
}

export default DetailBank
