import ExchangeService from './../services/exchange-service.js';
import { displayConversion, displayError, createSelectionForms } from './../index.js';

export function getConversionRate(baseAmount, baseCode, queryCode) {
  ExchangeService.getConversionRate(baseAmount, baseCode, queryCode)
  .then((conversion) => {
    
  }
}