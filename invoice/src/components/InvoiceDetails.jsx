import React from 'react';

const InvoiceDetails = () => {
  return (
    <div className="InvoiceDetails">
      <section className="InvoiceDetails-fields reduceHeaderSpacing">
        <div className="contactCommonComponent Invoice-detail">
          <div>
            <div className="contacts-mfe-autocompleter--small contacts-mfe-autocompleter" data-automationid="contacts-picker-search-field--wrapper--container">
              <label className="contacts-mfe-text-label contacts-mfe-fieldlabel-layout" data-automationid="contacts-picker-search-field--wrapper--label" htmlFor="xui-OHj73j4Vij-control">Contact</label>
              <div className="contacts-mfe-dropdown--toggledwrapper" data-automationid="contacts-picker-search-field--dropdown" data-ref="toggled-wrapper">
                <div tabIndex="-1">
                  <div aria-hidden="true" className="contacts-mfe-autocompleter--textinputplaceholder"></div>
                  <div className="contacts-mfe-textinputwrapper" data-automationid="contacts-picker-search-field--container" role="presentation">
                    <label className="contacts-mfe-text-label contacts-mfe-fieldlabel-layout contacts-mfe-text-label--hidden" data-automationid="contacts-picker-search-field--label" htmlFor="xui-OHj73j4Vij-control"></label>
                    <div className="contacts-mfe-textinput contacts-mfe-textinput-medium" data-automationid="contacts-picker-search-field">
                      <div className="contacts-mfe-textinput--sideelement contacts-mfe-textinput--sideelement-align-top contacts-mfe-textinput--sideelement-icon" data-automationid="contacts-picker-search-field--icon">
                        <div className="contacts-mfe-iconwrapper contacts-mfe-iconwrapper-medium">
                          <svg aria-hidden="true" className="contacts-mfe-icon" focusable="false" height="12" viewBox="0 0 12 12" width="12">
                            <path d="M6 6a3 3 0 1 0 0-6 3 3 0 1 0 0 6zm-6 5v1h12v-1c0-2.5-2.5-4-6-4s-6 1.5-6 4z"></path>
                          </svg>
                        </div>
                      </div>
                      <input autoComplete="off" id="xui-OHj73j4Vij-control" aria-autocomplete="list" aria-expanded="false" aria-haspopup="listbox" role="combobox" className="contacts-mfe-autocompleter--textinput contacts-mfe-textinput--input contacts-mfe-textinput--input-medium" data-automationid="contacts-picker-search-field--input" value="" style={{ flexBasis: '14px' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="xui-dropdown--toggledwrapper" data-ref="toggled-wrapper">
            <div className="xui-textinputwrapper" data-automationid="InvoiceDateInput--container" role="presentation">
              <label className="xui-text-label xui-fieldlabel-layout" data-automationid="InvoiceDateInput--label" htmlFor="InvoiceDateInput">Issue date</label>
              <div className="xui-textinput xui-textinput-small" data-automationid="InvoiceDateInput" aria-haspopup="listbox">
                <div className="xui-textinput--sideelement xui-textinput--sideelement-align-top xui-textinput--sideelement-icon">
                  <div className="xui-iconwrapper xui-iconwrapper-medium">
                    <svg aria-hidden="true" className="xui-icon" focusable="false" height="13" viewBox="0 0 12 13" width="12">
                      <path d="M10 1V0H8v1H4V0H2v1H1C.5 1 0 1.5.01 2L0 12c0 .5.5 1 1 1h10c.5 0 1-.5 1-1V2c0-.5-.5-1-1-1h-1zM1 12V4h10v8H1zm1-7h3v3H2V5z"></path>
                    </svg>
                  </div>
                </div>
                <input autoComplete="off" id="InvoiceDateInput" maxLength="255" title="Invoice Date" className="xui-textinput--input xui-textinput--input-small" data-automationid="InvoiceDateInput--input" type="text" value="16 Jul 2025" />
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="xui-dropdown--toggledwrapper" data-ref="toggled-wrapper">
            <div className="xui-textinputwrapper" data-automationid="DueDateInput--container" role="presentation">
              <label className="xui-text-label xui-fieldlabel-layout" data-automationid="DueDateInput--label" htmlFor="DueDateInput">Due date</label>
              <div className="xui-textinput xui-textinput-small" data-automationid="DueDateInput" aria-haspopup="listbox">
                <div className="xui-textinput--sideelement xui-textinput--sideelement-align-top xui-textinput--sideelement-icon">
                  <div className="xui-iconwrapper xui-iconwrapper-medium">
                    <svg aria-hidden="true" className="xui-icon" focusable="false" height="13" viewBox="0 0 12 13" width="12">
                      <path d="M10 1V0H8v1H4V0H2v1H1C.5 1 0 1.5.01 2L0 12c0 .5.5 1 1 1h10c.5 0 1-.5 1-1V2c0-.5-.5-1-1-1h-1zM1 12V4h10v8H1zm6-4h3v3H7V8z"></path>
                    </svg>
                  </div>
                </div>
                <input autoComplete="off" id="DueDateInput" maxLength="255" title="Due date" className="xui-textinput--input xui-textinput--input-small" data-automationid="DueDateInput--input" type="text" value="" />
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="xui-textinputwrapper" data-automationid="invoice-number-input--container">
            <label className="xui-text-label xui-fieldlabel-layout" data-automationid="invoice-number-input--label" htmlFor="B0HbIrxnHp">Invoice number</label>
            <div className="xui-textinput xui-textinput-small" data-automationid="invoice-number-input" aria-label="Invoice number">
              <div className="xui-textinput--sideelement xui-textinput--sideelement-align-top xui-textinput--sideelement-icon">
                <div className="xui-iconwrapper xui-iconwrapper-medium">
                  <svg aria-hidden="true" className="xui-icon" focusable="false" height="12" viewBox="0 0 13 12" width="13">
                    <path d="M7.96 7.028l.657-2.556H5.198l-.64 2.556H7.96zm1.412 0h2.897l-.5 1.444H9.01l-.882 3.52-1.448.014.908-3.534H4.195l-.882 3.52-1.448.014.909-3.534H-.231l.5-1.444h2.876l.657-2.556H.732l.5-1.444h2.942l.774-3.01L6.32-.006l-.76 3.034h3.43l.771-3 1.375-.034-.76 3.034h2.856l-.5 1.444h-2.718l-.64 2.556z"></path>
                  </svg>
                </div>
              </div>
              <input maxLength="255" title="Invoice number" className="xui-textinput--input xui-textinput--input-small" data-automationid="invoice-number-input--input" type="text" id="B0HbIrxnHp" value="INV-0001" />
            </div>
          </div>
        </div>
        <div className="">
          <div className="xui-textinputwrapper" data-automationid="reference-input--container">
            <div className="xui-controlwrapper-header-row">
              <label className="xui-text-label xui-fieldlabel-layout" data-automationid="reference-input--label" htmlFor="WXAk6qLziB">Reference</label>
              <div aria-live="polite" className="xui-charactercounter-wrapper" data-automationid="reference-input--character-counter" role="status"></div>
            </div>
            <div className="xui-textinput xui-textinput-small" data-automationid="reference-input">
              <div className="xui-textinput--sideelement xui-textinput--sideelement-align-top xui-textinput--sideelement-icon">
                <div className="xui-iconwrapper xui-iconwrapper-medium">
                  <svg aria-hidden="true" className="xui-icon" focusable="false" height="12" viewBox="0 0 10 12" width="10">
                    <path d="M1 0h8c.5 0 1 .5 1 1v11L5 9l-5 3V1c0-.5.5-1 1-1z"></path>
                  </svg>
                </div>
              </div>
              <input title="Reference" className="xui-textinput--input xui-textinput--input-small" data-automationid="reference-input--input" type="text" aria-invalid="false" id="WXAk6qLziB" value="" />
            </div>
          </div>
        </div>
        <div data-automationid="payment-services-manager">
          <label className="xui-text-label xui-fieldlabel-layout">Online payments</label>
          <button className="xui-button InvoiceDetails-button SetupPayment-button xui-button-standard xui-button-small" tabIndex="0" type="button" aria-label="Set up online payments" aria-haspopup="true">
            <span className="xui-padding-right-xsmall title">Set up online payments</span>
            <span className="text-icon-group">
              <img src="https://edge.xero.com/business/invoicing/shell/206c994ed165f87e5aa8.png" alt="Visa" />
              <img className="xui-margin-left-xsmall" src="https://edge.xero.com/business/invoicing/shell/c765b2647c742cbf1955.png" alt="Mastercard" />
              <img className="xui-margin-left-xsmall" src="https://edge.xero.com/business/invoicing/shell/7f8095cde52199adc603.png" alt="American Express" />
            </span>
          </button>
        </div>
        <div>
          <label className="xui-text-label xui-fieldlabel-layout" htmlFor="CurrencyInput">Currency</label>
          <div className="" data-automationid="CurrencyInput-toggle--container">
            <div className="xui-dropdown--toggledwrapper" data-ref="toggled-wrapper">
              <button className="xui-button InvoiceDetails-dropdownButton xui-button-fullwidth xui-select--button xui-select--button-no-variant xui-text-align-left xui-u-flex-align-center xui-button-standard xui-button-small xui-button-has-icon" tabIndex="0" type="button" aria-label="Currency" id="CurrencyInput" title="Currency" aria-haspopup="listbox" data-automationid="CurrencyInput">
                <svg aria-hidden="true" className="xui-icon xui-icon-inline xui-margin-right" focusable="false" height="9" viewBox="0 0 15 9" width="15">
                  <path d="M9.333 8.847A6.476 6.476 0 0 0 11 4.5c0-1.671-.63-3.195-1.667-4.347a4.5 4.5 0 1 1 0 8.694zM4.5 9a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9z"></path>
                </svg>
                <span className="xui-text-truncated xui-u-fullwidth">Nigerian Naira</span>
                <div className="xui-button--caret">
                  <svg aria-hidden="true" className="xui-icon" focusable="false" height="5" viewBox="0 0 10 5" width="10">
                    <path d="M0 0l5 5 5-5z"></path>
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div>
          <label className="xui-text-label xui-fieldlabel-layout" htmlFor="TaxModeSelect">Amounts are</label>
          <div className="xui-dropdown--toggledwrapper" data-ref="toggled-wrapper">
            <button className="xui-button TaxModeSelect-button xui-select--button-no-variant xui-select--button xui-button-standard xui-button-small xui-button-fullwidth xui-button-has-icon" tabIndex="0" type="button" id="TaxModeSelect" aria-haspopup="listbox" data-automationid="TaxModeSelect-button">
              Tax exclusive
              <div className="xui-button--caret">
                <svg aria-hidden="true" className="xui-icon" focusable="false" height="5" viewBox="0 0 10 5" width="10">
                  <path d="M0 0l5 5 5-5z"></path>
                </svg>
              </div>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InvoiceDetails;
