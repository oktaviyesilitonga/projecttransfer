import React, { Component } from 'react';
import TitlePages from '../../../components/UI/TitlePages/TitlePages';
import BodyClass from 'react-body-classname';
import Auz from '../../../hoc/Auz/Auz';
import Head from '../../../components/UI/Head/Head';
import ContentTransferUnsuccess from '../../../components/Content/Transfer/TransferUnsuccess/TransferUnsuccess';

class TransferUnsuccess extends Component {
  render() {
    return (
      <div>
        <TitlePages title={"Transfer Gagal | Transfer to Mobile - Permata Bank"}/>
          <BodyClass className="no-transition transfer-page">
            <Auz>
              <Head>
                <ContentTransferUnsuccess />
              </Head>
            </Auz>
          </BodyClass>
      </div>
    )
  }
}

export default TransferUnsuccess
