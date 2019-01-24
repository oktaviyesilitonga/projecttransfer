import React, { Component } from 'react';
import { connect } from 'react-redux';
import TitlePages from '../../components/UI/TitlePages/TitlePages';
import BodyClass from 'react-body-classname';
import Auz from '../../hoc/Auz/Auz';
import Head from '../../components/UI/Head/Head';
import ContentResendCode from '../../components/Content/ResendCode/ResendCode';
import * as action from '../../store/action/index';


class ResendCode extends Component {
  componentDidMount = () => {
    this.props.getDataResendCode();
  }

  render() {
    return (
      <div>
        <TitlePages title={"Kode Verifikasi | Transfer to Mobile - Permata Bank"}/>
          <BodyClass className="no-transition resend-code-page">
            <Auz>
              <Head>
                <ContentResendCode/>
              </Head>
            </Auz>
          </BodyClass>
      </div>
    )
  }
}

const mapStateToProps = state => {
  //console.log("apa ini", state);
  return {
    Verification: state.resendCode.verification
  };
};

const mapDispatchToProps = dispatch => {
  return{
    getDataResendCode : () => dispatch(action.getResendCode())
  };
};


export default connect(mapStateToProps, mapDispatchToProps) (ResendCode);
