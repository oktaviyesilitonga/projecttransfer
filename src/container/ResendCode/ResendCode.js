import React, { Component } from 'react';
import TitlePages from '../../components/UI/TitlePages/TitlePages';
import BodyClass from 'react-body-classname';
import Auz from '../../hoc/Auz/Auz';
import Head from '../../components/UI/Head/Head';
import ContentResendCode from '../../components/Content/ResendCode/ResendCode';


class ResendCode extends Component {
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

export default ResendCode
