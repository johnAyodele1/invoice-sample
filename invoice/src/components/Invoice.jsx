import React from 'react';
import Header from './Header';
import InvoiceDetails from './InvoiceDetails';
import LineItemsGrid from './LineItemsGrid';
import Footer from './Footer';

const Invoice = () => {
  return (
    <div className="InvoiceContainer">
      <Header />
      <div className="xui-gridarea-detail xui-width-xsmall-up xui-width-small-up xui-width-medium-up xui-width-large-up xui-width-xlarge-up">
        <div className="EditInvoice-panel xui-panel">
          <InvoiceDetails />
          <LineItemsGrid />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Invoice;
