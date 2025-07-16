import React from 'react';

const LineItemsGrid = () => {
  return (
    <div className="LineItemGrid-wrapper">
      <div className="LineItemGrid">
        <div className="ac-line-item-grid compact-size">
          <div>
            <div>
              <div className="ac-line-item-grid-71782a9c-2098-40b4-98bf-ab8fd6d38ce5 ac-line-item-grid xui-editabletablewrapper xui-editabletableoverflow xui-editabletableoverflow-has-footaction" data-rbd-droppable-id="xui-EX1sRWanJg" data-rbd-droppable-context-id="0" style={{ '--xui-editableoverflow--scrollbar-height': '0px' }}>
                <div className="xui-editabletablewrapper--scrollcontainer">
                  <table aria-invalid="false" aria-label="Line items" className="xui-editabletable xui-editabletable-pinfirst xui-editabletable-pinlast" data-automationid="InvoiceTable--line-item-grid" id="xui-editabletable-Nb2sTsdPJu">
                    <colgroup>
                      <col className="xui-editabletableheadingcell-control" />
                      <col style={{ width: '10.4762%' }} />
                      <col style={{ width: '19.0476%' }} />
                      <col style={{ width: '6.66667%' }} />
                      <col style={{ width: '8.57143%' }} />
                      <col style={{ width: '7.61905%' }} />
                      <col style={{ width: '10.4762%' }} />
                      <col style={{ width: '10.4762%' }} />
                      <col style={{ width: '7.61905%' }} />
                      <col style={{ width: '10.4762%' }} />
                      <col style={{ width: '8.57143%' }} />
                      <col className="xui-editabletableheadingcell-control" />
                    </colgroup>
                    <thead className="xui-editabletablehead">
                      <tr className="xui-editabletablerow">
                        <th className="xui-editabletableheadingcell xui-editabletableheadingcell-control xui-editabletableheadingcell-leftaligned" scope="col">
                          <span className="xui-editabletableheadingcell-label--hidden">Drag handle column</span>
                        </th>
                        <th className="xui-editabletableheadingcell xui-padding-xsmall xui-editabletableheadingcell-leftaligned" data-automationid="InvoiceTable--line-item-grid--inventory-heading" scope="col">Item</th>
                        <th className="xui-editabletableheadingcell xui-padding-xsmall xui-editabletableheadingcell-leftaligned" data-automationid="InvoiceTable--line-item-grid--description-heading" scope="col">Description</th>
                        <th className="xui-editabletableheadingcell xui-padding-xsmall xui-editabletableheadingcell-rightaligned" data-automationid="InvoiceTable--line-item-grid--quantity-heading" scope="col">Qty.</th>
                        <th className="xui-editabletableheadingcell xui-padding-xsmall xui-editabletableheadingcell-rightaligned" data-automationid="InvoiceTable--line-item-grid--unitAmount-heading" scope="col">Price</th>
                        <th className="xui-editabletableheadingcell xui-padding-xsmall xui-editabletableheadingcell-rightaligned" data-automationid="InvoiceTable--line-item-grid--discount-heading" scope="col">
                          <div className="ac-editable-table-header-with-tooltip ac-editable-table-header-with-tooltip-position-right">
                            <span>Disc.</span>
                            <span className="xui-tooltip xui-has-inline-trigger">
                              <button className="ac--read-only-truncated--button" aria-describedby="xui-DQs6PGDdMY">
                                <svg aria-hidden="true" className="xui-icon" data-automationid="undefined--tooltip-icon" focusable="false" height="15" viewBox="0 0 15 15" width="15">
                                  <path d="M7.5 15a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15zM7 3v1.998h1.998V3H7zM6 6v1h1v3H6v1h4v-1H9V6H6z"></path>
                                </svg>
                              </button>
                            </span>
                          </div>
                        </th>
                        <th className="xui-editabletableheadingcell xui-padding-xsmall xui-editabletableheadingcell-leftaligned" data-automationid="InvoiceTable--line-item-grid--account-heading" scope="col">Account</th>
                        <th className="xui-editabletableheadingcell xui-padding-xsmall xui-editabletableheadingcell-leftaligned" data-automationid="InvoiceTable--line-item-grid--taxRate-heading" scope="col">Tax rate</th>
                        <th className="xui-editabletableheadingcell xui-padding-xsmall xui-editabletableheadingcell-rightaligned" data-automationid="InvoiceTable--line-item-grid--taxAmount-heading" scope="col">Tax amount</th>
                        <th className="xui-editabletableheadingcell xui-padding-xsmall xui-editabletableheadingcell-leftaligned" data-automationid="InvoiceTable--line-item-grid--projectCustomer-heading" scope="col">Project</th>
                        <th className="xui-editabletableheadingcell xui-padding-xsmall xui-editabletableheadingcell-rightaligned" data-automationid="InvoiceTable--line-item-grid--lineAmount-heading" scope="col">Amount NGN</th>
                        <th className="xui-editabletableheadingcell xui-editabletableheadingcell-control xui-editabletableheadingcell-leftaligned" scope="col">
                          <span className="xui-editabletableheadingcell-label--hidden">Remove row column</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="xui-editabletablebody">
                      <tr className="xui-editabletablerow" data-automationid="InvoiceTable--line-item-grid--row" data-rbd-draggable-context-id="0" data-rbd-draggable-id="arP68-_951" style={{ transform: 'none' }}>
                        <td className="xui-editabletablecell xui-editabletablecelliconbutton" data-automationid="InvoiceTable--line-item-grid--row--cell-drag">
                          <button className="xui-button xui-editabletablerow--draghandle xui-button-icon-medium xui-button-icon" tabIndex="0" type="button" aria-describedby="xui-qoEZTm_EvF" data-rbd-drag-handle-draggable-id="arP68-_951" data-rbd-drag-handle-context-id="0" draggable="false" aria-label="Drag handle" data-automationid="InvoiceTable--line-item-grid--row--button-drag">
                            <svg aria-hidden="true" className="xui-icon" focusable="false" height="10" role="img" viewBox="0 0 6 10" width="6">
                              <path d="M4 0h2v2H4V0zM0 0h2v2H0V0zm0 4h2v2H0V4zm4 0h2v2H4V4zm0 4h2v2H4V8zM0 8h2v2H0V8z"></path>
                            </svg>
                            <div className="xui-touchtarget"></div>
                          </button>
                        </td>
                        <td className="xui-editabletablecell xui-editabletablecellautocompleter ac_selector_cell_td xui-editabletablecell-control">
                          <div className="xui-editabletablecell--border">
                            <div className="xui-editabletablecellautocompleter--control ac_selector_cell xui-autocompleter" data-automationid="InvoiceTable--line-item-grid--inventory--search-field--wrapper--container">
                              <div className="xui-dropdown--toggledwrapper" data-automationid="InvoiceTable--line-item-grid--inventory--search-field--dropdown" data-ref="toggled-wrapper">
                                <div className="xui-editabletablecellautocompleter--trigger" tabIndex="-1">
                                  <div aria-hidden="true" className="xui-autocompleter--textinputplaceholder"> </div>
                                  <div className="xui-textinputwrapper" data-automationid="InvoiceTable--line-item-grid--inventory--search-field--container" role="presentation">
                                    <label className="xui-text-label xui-fieldlabel-layout xui-text-label--hidden" data-automationid="InvoiceTable--line-item-grid--inventory--search-field--label" htmlFor="xui-IzfvkrSdFp-control">Item</label>
                                    <div className="xui-textinput xui-textinput-medium xui-textinput-cell" data-automationid="InvoiceTable--line-item-grid--inventory--search-field">
                                      <input autoComplete="off" maxLength="255" id="xui-IzfvkrSdFp-control" aria-autocomplete="list" aria-expanded="false" aria-haspopup="listbox" role="combobox" className="ac-padding-xsmall ac-line-item-grid-input xui-autocompleter--textinput xui-textinput--input xui-textinput--input-medium" data-automationid="InvoiceTable--line-item-grid--inventory--search-field--input" placeholder=" " value="" style={{ flexBasis: '16px' }} />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="xui-editabletablecell ac_description_cell_td ac_numeric_cell_validation_off_outline ac_description_cell_validation_off_color xui-editabletablecell-control">
                          <div className="xui-editabletablecell--border">
                            <div className="xui-textinputwrapper" data-automationid="InvoiceTable--line-item-grid--description--container">
                              <label className="xui-text-label xui-fieldlabel-layout xui-text-label--hidden" data-automationid="InvoiceTable--line-item-grid--description--label" htmlFor="description-input">Description</label>
                              <div className="ac_description_container xui-textinput-cell xui-textinput xui-textinput-medium" data-automationid="InvoiceTable--line-item-grid--description">
                                <textarea id="description-input" maxLength="4000" className="ac-padding-xsmall ac-line-item-grid-input  xui-textinput--input xui-textinput--input-medium xui-textinput--input-resize-none" data-automationid="InvoiceTable--line-item-grid--description--input" rows="1" style={{ overflowX: 'hidden', overflowWrap: 'break-word', height: '36px' }}></textarea>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="xui-editabletablecell xui-editabletablecelltextinput ac_numeric_cell_td  xui-editabletablecell-control">
                          <div className="xui-editabletablecell--border">
                            <div className="xui-textinputwrapper" data-automationid="InvoiceTable--line-item-grid--quantity--container" role="presentation">
                              <label className="xui-text-label xui-fieldlabel-layout xui-text-label--hidden" data-automationid="InvoiceTable--line-item-grid--quantity--label" htmlFor="BMlS-97En9">Qty.</label>
                              <div className="xui-editabletablecelltextinput--control xui-textinput xui-textinput-medium xui-textinput-cell" data-automationid="InvoiceTable--line-item-grid--quantity">
                                <input className="ac-padding-xsmall ac-line-item-grid-input  xui-textinput--input xui-textinput--input-medium xui-textinput--input-reverse-align" data-automationid="InvoiceTable--line-item-grid--quantity--input" id="BMlS-97En9" value="" />
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="xui-editabletablecell xui-editabletablecelltextinput ac_numeric_cell_td  xui-editabletablecell-control">
                          <div className="xui-editabletablecell--border">
                            <div className="xui-textinputwrapper" data-automationid="InvoiceTable--line-item-grid--unitAmount--container" role="presentation">
                              <label className="xui-text-label xui-fieldlabel-layout xui-text-label--hidden" data-automationid="InvoiceTable--line-item-grid--unitAmount--label" htmlFor="ggRKoZbhZG">Price</label>
                              <div className="xui-editabletablecelltextinput--control xui-textinput xui-textinput-medium xui-textinput-cell" data-automationid="InvoiceTable--line-item-grid--unitAmount">
                                <input className="ac-padding-xsmall ac-line-item-grid-input  xui-textinput--input xui-textinput--input-medium xui-textinput--input-reverse-align" data-automationid="InvoiceTable--line-item-grid--unitAmount--input" id="ggRKoZbhZG" value="" />
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="xui-editabletablecell xui-editabletablecelltextinput ac_numeric_cell_td  xui-editabletablecell-control">
                          <div className="xui-editabletablecell--border">
                            <div className="xui-textinputwrapper" data-automationid="InvoiceTable--line-item-grid--discount--container" role="presentation">
                              <label className="xui-text-label xui-fieldlabel-layout xui-text-label--hidden" data-automationid="InvoiceTable--line-item-grid--discount--label" htmlFor="cYROZXkU8p">Disc.</label>
                              <div className="xui-editabletablecelltextinput--control xui-textinput xui-textinput-medium xui-textinput-cell" data-automationid="InvoiceTable--line-item-grid--discount">
                                <input className="ac-padding-xsmall ac-line-item-grid-input  xui-textinput--input xui-textinput--input-medium xui-textinput--input-reverse-align" data-automationid="InvoiceTable--line-item-grid--discount--input" id="cYROZXkU8p" value="" />
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="xui-editabletablecell xui-editabletablecellautocompleter ac_selector_cell_td xui-editabletablecell-control">
                          <div className="xui-editabletablecell--border">
                            <div className="xui-editabletablecellautocompleter--control ac_selector_cell xui-autocompleter" data-automationid="InvoiceTable--line-item-grid--account--search-field--wrapper--container">
                              <div className="xui-dropdown--toggledwrapper" data-automationid="InvoiceTable--line-item-grid--account--search-field--dropdown" data-ref="toggled-wrapper">
                                <div className="xui-editabletablecellautocompleter--trigger" tabIndex="-1">
                                  <div aria-hidden="true" className="xui-autocompleter--textinputplaceholder"> </div>
                                  <div className="xui-textinputwrapper" data-automationid="InvoiceTable--line-item-grid--account--search-field--container" role="presentation">
                                    <label className="xui-text-label xui-fieldlabel-layout xui-text-label--hidden" data-automationid="InvoiceTable--line-item-grid--account--search-field--label" htmlFor="xui-LP8G7kTniD-control">Account</label>
                                    <div className="xui-textinput xui-textinput-medium xui-textinput-cell" data-automationid="InvoiceTable--line-item-grid--account--search-field">
                                      <input autoComplete="off" maxLength="255" id="xui-LP8G7kTniD-control" aria-autocomplete="list" aria-expanded="false" aria-haspopup="listbox" role="combobox" className="ac-padding-xsmall ac-line-item-grid-input xui-autocompleter--textinput xui-textinput--input xui-textinput--input-medium" data-automationid="InvoiceTable--line-item-grid--account--search-field--input" placeholder=" " value="" style={{ flexBasis: '16px' }} />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="xui-editabletablecell xui-editabletablecellautocompleter ac_selector_cell_td xui-editabletablecell-control">
                          <div className="xui-editabletablecell--border">
                            <div className="xui-editabletablecellautocompleter--control ac_selector_cell xui-autocompleter" data-automationid="InvoiceTable--line-item-grid--taxRate--search-field--wrapper--container">
                              <div className="xui-dropdown--toggledwrapper" data-automationid="InvoiceTable--line-item-grid--taxRate--search-field--dropdown" data-ref="toggled-wrapper">
                                <div className="xui-editabletablecellautocompleter--trigger" tabIndex="-1">
                                  <div aria-hidden="true" className="xui-autocompleter--textinputplaceholder"> </div>
                                  <div className="xui-textinputwrapper" data-automationid="InvoiceTable--line-item-grid--taxRate--search-field--container" role="presentation">
                                    <label className="xui-text-label xui-fieldlabel-layout xui-text-label--hidden" data-automationid="InvoiceTable--line-item-grid--taxRate--search-field--label" htmlFor="xui-_usv0ZThqp-control">Tax rate</label>
                                    <div className="xui-textinput xui-textinput-medium xui-textinput-cell" data-automationid="InvoiceTable--line-item-grid--taxRate--search-field">
                                      <input autoComplete="off" maxLength="255" id="xui-_usv0ZThqp-control" aria-autocomplete="list" aria-expanded="false" aria-haspopup="listbox" role="combobox" className="ac-padding-xsmall ac-line-item-grid-input xui-autocompleter--textinput xui-textinput--input xui-textinput--input-medium" data-automationid="InvoiceTable--line-item-grid--taxRate--search-field--input" placeholder=" " value="" style={{ flexBasis: '16px' }} />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="xui-editabletablecell xui-editabletablecelltextinput ac_numeric_cell_td  xui-editabletablecell-control">
                          <div className="xui-editabletablecell--border">
                            <div className="xui-textinputwrapper" data-automationid="InvoiceTable--line-item-grid--taxAmount--container" role="presentation">
                              <label className="xui-text-label xui-fieldlabel-layout xui-text-label--hidden" data-automationid="InvoiceTable--line-item-grid--taxAmount--label" htmlFor="rp0uiSO6qg">Tax amount</label>
                              <div className="xui-editabletablecelltextinput--control xui-textinput xui-textinput-medium xui-textinput-cell" data-automationid="InvoiceTable--line-item-grid--taxAmount">
                                <input className="ac-padding-xsmall ac-line-item-grid-input  xui-textinput--input xui-textinput--input-medium xui-textinput--input-reverse-align" data-automationid="InvoiceTable--line-item-grid--taxAmount--input" id="rp0uiSO6qg" value="" />
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="xui-editabletablecell xui-editabletablecellautocompleter ac_selector_cell_td xui-editabletablecell-control">
                          <div className="xui-editabletablecell--border">
                            <div className="xui-editabletablecellautocompleter--control ac_selector_cell xui-autocompleter" data-automationid="InvoiceTable--line-item-grid--projectCustomer--search-field--wrapper--container">
                              <div className="xui-dropdown--toggledwrapper" data-automationid="InvoiceTable--line-item-grid--projectCustomer--search-field--dropdown" data-ref="toggled-wrapper">
                                <div className="xui-editabletablecellautocompleter--trigger" tabIndex="-1">
                                  <div aria-hidden="true" className="xui-autocompleter--textinputplaceholder"> </div>
                                  <div className="xui-textinputwrapper" data-automationid="InvoiceTable--line-item-grid--projectCustomer--search-field--container" role="presentation">
                                    <label className="xui-text-label xui-fieldlabel-layout xui-text-label--hidden" data-automationid="InvoiceTable--line-item-grid--projectCustomer--search-field--label" htmlFor="xui-yI_SlTxdHa-control">Project</label>
                                    <div className="xui-textinput xui-textinput-medium xui-textinput-cell" data-automationid="InvoiceTable--line-item-grid--projectCustomer--search-field">
                                      <input autoComplete="off" maxLength="255" id="xui-yI_SlTxdHa-control" aria-autocomplete="list" aria-expanded="false" aria-haspopup="listbox" role="combobox" className="ac-padding-xsmall ac-line-item-grid-input xui-autocompleter--textinput xui-textinput--input xui-textinput--input-medium" data-automationid="InvoiceTable--line-item-grid--projectCustomer--search-field--input" placeholder=" " value="" style={{ flexBasis: '16px' }} />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="xui-editabletablecell xui-editabletablecelltextinput ac_numeric_cell_td  xui-editabletablecell-control">
                          <div className="xui-editabletablecell--border">
                            <div className="xui-textinputwrapper" data-automationid="InvoiceTable--line-item-grid--lineAmount--container" role="presentation">
                              <label className="xui-text-label xui-fieldlabel-layout xui-text-label--hidden" data-automationid="InvoiceTable--line-item-grid--lineAmount--label" htmlFor="PfogWmLbPu">Amount NGN</label>
                              <div className="xui-editabletablecelltextinput--control xui-textinput xui-textinput-medium xui-textinput-cell" data-automationid="InvoiceTable--line-item-grid--lineAmount">
                                <input className="ac-padding-xsmall ac-line-item-grid-input  xui-textinput--input xui-textinput--input-medium xui-textinput--input-reverse-align" data-automationid="InvoiceTable--line-item-grid--lineAmount--input" id="PfogWmLbPu" value="" />
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="xui-editabletablecell xui-editabletablecelliconbutton">
                          <button className="xui-button xui-button-icon-medium xui-button-icon" tabIndex="0" type="button" aria-label="Remove row" data-automationid="InvoiceTable--line-item-grid--row--button-remove">
                            <svg aria-hidden="true" className="xui-icon" focusable="false" height="14" viewBox="0 0 11 14" width="11">
                              <path d="M0 1h3l1-1h3l1 1h3v2H0V1zm1 3h9v9.455c0 .272-.346.545-.692.545H1.692C1.346 14 1 13.727 1 13.455V4zm2 2v6h1V6H3zm2 0v6h1V6H5zm2 0v6h1V6H7z"></path>
                            </svg>
                            <div className="xui-touchtarget"></div>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                    <tfoot className="xui-editabletablefoot" data-automationid="InvoiceTable--line-item-grid--add-row-foot">
                      <tr className="xui-editabletableutilitybar xui-editabletablefoot--action">
                        <td className="xui-editabletableutilitybar--cell" colSpan="12">
                          <div className="xui-editabletableutilitybar--cell--wrapper" style={{ width: '1494px' }}>
                            <div className="xui-buttongroup">
                              <button className="xui-button xui-button-standard xui-button-small xui-button-grouped" tabIndex="0" type="button" id="ac-line-item-grid--add-new-row-button" data-automationid="InvoiceTable--line-item-grid--add-new-row-button">Add row</button>
                              <div className="xui-dropdown--toggledwrapper" data-ref="toggled-wrapper">
                                <button className="xui-button xui-button-split xui-button-standard xui-button-small xui-button-grouped" tabIndex="0" type="button" aria-label="Add row options" aria-haspopup="listbox">
                                  <svg aria-hidden="true" className="xui-icon" focusable="false" height="5" viewBox="0 0 10 5" width="10">
                                    <path d="M0 0l5 5 5-5z"></path>
                                  </svg>
                                </button>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                  <div className="xui-editabletablewrapper--dndinstructions" id="xui-qoEZTm_EvF">Press Space bar or Enter to start a drag. When dragging you can use the arrow keys to move the item around and escape to cancel. Ensure your screen reader is in focus mode or to use your pass through key.</div>
                </div>
                <div className="xui-editabletablewrapper--border"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LineItemsGrid;
