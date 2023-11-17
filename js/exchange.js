import ExchangeService from './../services/exchange-service.js';
import { displayConversion, displayError, createSelectionForms } from './../index.js';

export function getConversionRate(baseAmount, baseCode, queryCode) {
  ExchangeService.getConversionRate(baseAmount, baseCode, queryCode)
    .then((conversion) => {
      if (conversion.result === "success") {
        displayConversion(conversion, baseCode, queryCode);
      } else {
        displayError(conversion, baseCode, queryCode);
      }
    });
}

export function getMiscCodes() {
  ExchangeService.getMiscCodes()
  .then((currencies) => {
    if (currencies.result === "success") {
      createSelectionForms(currencies["supported_codes"]);
    } else {
      displayError(currencies, "Supported Currencies");
    }
  });
}