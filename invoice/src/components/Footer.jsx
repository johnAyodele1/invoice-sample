import React from 'react';

const Footer = () => {
  return (
    <div className="InvoiceFooter">
      <div className="InvoiceFooter--leftElements">
        <div className="InvoiceFooter-column-hide-select">
          <div className="xui-actions xui-margin-bottom xui-u-flex xui-u-flex-justify-start xui-actions-layout">
            <div className="xui-dropdown--toggledwrapper" data-ref="toggled-wrapper">
              <button className="xui-button xui-button-standard xui-button-small xui-button-has-icon" tabIndex="0" type="button" aria-haspopup="listbox" data-automationid="InvoiceTable--line-item-grid--column-hide-select">
                Columns (0 hidden)
                <div className="xui-button--caret">
                  <svg aria-hidden="true" className="xui-icon" focusable="false" height="5" viewBox="0 0 10 5" width="10">
                    <path d="M0 0l5 5 5-5z"></path>
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div data-automationid="invoiceFooter-fileUpload">
          <div className="ac-drag-and-drop-overlay" data-automationid="FileUploader--drag-and-drop-overlay"></div>
          <div className="xui-dropdown--toggledwrapper" data-automationid="FileUploader--dropdown-toggle" data-ref="toggled-wrapper">
            <button className="xui-button ac-fileUploader-button xui-button-standard xui-button-small xui-button-has-icon" tabIndex="0" type="button" aria-haspopup="listbox" data-automationid="FileUploader--dropdown-trigger">
              Files
              <div className="xui-button--caret">
                <svg aria-hidden="true" className="xui-icon" focusable="false" height="5" viewBox="0 0 10 5" width="10">
                  <path d="M0 0l5 5 5-5z"></path>
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="InvoiceFooter-amountSummary xui-column-flex" data-automationid="AmountSummaryCommonComponent">
        <div data-automationid="as-subtotal--as-readonly-row">
          <div className="ac-amount-summary-divider-default"></div>
          <div className="ac-amount-summary-field ac-amount-summary-field-default xui-row-flex xui-u-flex-justify-space-between" data-automationid="as-readonly-row-field">
            <div className="xui-textcolor-standard">Subtotal</div>
            <div className="xui-row-flex">
              <div className="xui-margin-left-small xui-textcolor-standard">0.00</div>
            </div>
          </div>
          <div className="ac-amount-summary-divider-default"></div>
        </div>
        <div data-automationid="as-tax-total--as-readonly-row">
          <div className="ac-amount-summary-divider-default"></div>
          <div className="ac-amount-summary-field ac-amount-summary-field-default xui-row-flex xui-u-flex-justify-space-between" data-automationid="as-readonly-row-field">
            <div className="xui-textcolor-standard">Total tax</div>
            <div className="xui-row-flex">
              <div className="xui-margin-left-small xui-textcolor-standard">0.00</div>
            </div>
          </div>
          <div className="ac-amount-summary-divider-default"></div>
        </div>
        <div data-automationid="as-total--as-readonly-row">
          <div className="ac-amount-summary-divider-main"></div>
          <div className="ac-amount-summary-field ac-amount-summary-field-main xui-row-flex xui-u-flex-justify-space-between" data-automationid="as-readonly-row-field">
            <div className="xui-text-emphasis xui-textcolor-muted">Total</div>
            <div className="xui-row-flex">
              <div className="xui-margin-left-small xui-text-emphasis xui-textcolor-standard">0.00</div>
            </div>
          </div>
          <div className="ac-amount-summary-divider-secondary"></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
