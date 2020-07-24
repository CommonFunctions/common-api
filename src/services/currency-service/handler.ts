import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';
import middy from '@middy/core';
import httpErrorHandler from '@middy/http-error-handler';
import { CurrencyController } from '../../controllers/currencyController';
import ExchangeRatesApi from '../../api/exchangeRatesApi';

const api = new ExchangeRatesApi();
const controller = new CurrencyController(api);

const currencyRateLatest: APIGatewayProxyHandler = async (event) => {
  const { fromCurrencyCode, toCurrencyCode } = event.pathParameters;
  const isValid = await controller.currencyConversionLatest(fromCurrencyCode, toCurrencyCode, 1);
  return {
    statusCode: 200,
    body: JSON.stringify({
      success: isValid,
      input: event.pathParameters,
    }),
  };
}

const currencyConversionLatest: APIGatewayProxyHandler = async (event) => {
  const { fromCurrencyCode, toCurrencyCode, amount } = event.pathParameters;
  const amountParsed = parseFloat(amount);
  const isValid = await controller.currencyConversionLatest(fromCurrencyCode, toCurrencyCode, amountParsed);
  return {
    statusCode: 200,
    body: JSON.stringify({
      success: isValid,
      input: event.pathParameters,
    }),
  };
}

const currencyConversionHistory: APIGatewayProxyHandler = async (event) => {
  const { fromCurrencyCode, toCurrencyCode, amount, date } = event.pathParameters;
  const amountParsed = parseFloat(amount);
  const isValid = await controller.currencyConversionHistory(fromCurrencyCode, toCurrencyCode, amountParsed, date);
  return {
    statusCode: 200,
    body: JSON.stringify({
      success: isValid,
      input: event.pathParameters,
    }),
  };
}

const currencyRateLatestHandler = middy(currencyRateLatest).use(httpErrorHandler());
const currencyConversionLatestHandler = middy(currencyConversionLatest).use(httpErrorHandler());
const currencyConversionHistoryHandler = middy(currencyConversionHistory).use(httpErrorHandler());

export {
  currencyRateLatestHandler,
  currencyConversionLatestHandler,
  currencyConversionHistoryHandler
}