import React, { Component } from 'react';
import TitlePages from '../../../components/UI/TitlePages/TitlePages';
import BodyClass from 'react-body-classname';
import Auz from '../../../hoc/Auz/Auz';
import Head from '../../../components/UI/Head/Head';
import ContentTransferSuccess from '../../../components/Content/Transfer/TransferSuccess/TransferSuccess';

class TransferSuccess extends Component {
  render() {
    return (
      <div>
        <TitlePages title={"Transfer Berhasil | Transfer to Mobile - Permata Bank"}/>
          <BodyClass className="no-transition transfer-page">
            <Auz>
              <Head>
                <ContentTransferSuccess />
              </Head>
            </Auz>
          </BodyClass>
      </div>
    )
  }
}

export default TransferSuccess
