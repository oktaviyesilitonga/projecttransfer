import React, { Component } from 'react';
import TitlePages from '../../components/UI/TitlePages/TitlePages';
import BodyClass from 'react-body-classname';
import Auz from '../../hoc/Auz/Auz';
import Head from '../../components/UI/Head/Head';
import ContentDetailBank from '../../components/Content/DetailBank/DetailBank';

class DetailBank extends Component {
  render() {
    return (
      <div>
        <TitlePages title={"Proses Transfer | Transfer to Mobile - Permata Bank"}/>
          <BodyClass className="no-transition detail-bank-page">
            <Auz>
              <Head>
                <ContentDetailBank />
              </Head>
            </Auz>
          </BodyClass>
      </div>
    )
  }
}

export default DetailBank
