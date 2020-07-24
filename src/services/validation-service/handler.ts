import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';
import middy from '@middy/core';
import httpErrorHandler from '@middy/http-error-handler';
import * as validationController from '../../controllers/validationController';

const emailValidation: APIGatewayProxyHandler = async (event) => {
  const { email } = event.pathParameters;
  const isValid = validationController.emailValidation(email);
  return {
    statusCode: 200,
    body: JSON.stringify({
      success: isValid,
      input: email,
    }),
  };
}

const taxNumberValidation: APIGatewayProxyHandler = async (event) => {
  const { countryCode, taxNumber } = event.pathParameters;
  const isValid = validationController.taxNumberValidation(countryCode, taxNumber);
  return {
    statusCode: 200,
    body: JSON.stringify({
      success: isValid,
      input: taxNumber,
    }),
  };
}

const identityNumberValidation: APIGatewayProxyHandler = async (event) => {
  const { countryCode, identityNumber } = event.pathParameters;
  const isValid = validationController.identityNumberValidation(countryCode, identityNumber);
  return {
    statusCode: 200,
    body: JSON.stringify({
      success: isValid,
      input: identityNumber,
    }),
  };
}

const plateValidation: APIGatewayProxyHandler = async (event) => {
  const { countryCode, plate } = event.pathParameters;
  const isValid = validationController.plateValidation(countryCode, plate);
  return {
    statusCode: 200,
    body: JSON.stringify({
      success: isValid,
      input: plate,
    }),
  };
}

const phoneValidation: APIGatewayProxyHandler = async (event) => {
  const { countryCode, phone } = event.pathParameters;
  const isValid = validationController.phoneValidation(countryCode, phone);
  return {
    statusCode: 200,
    body: JSON.stringify({
      success: isValid,
      input: phone,
    }),
  };
}

const ipAddressValidation: APIGatewayProxyHandler = async (event) => {
  const { ipAddress } = event.pathParameters;
  const isValid = validationController.ipAddressValidation(ipAddress);
  return {
    statusCode: 200,
    body: JSON.stringify({
      success: isValid,
      input: ipAddress,
    }),
  };
}

const emailValidationHandler = middy(emailValidation).use(httpErrorHandler());
const taxNumberValidationHandler = middy(taxNumberValidation).use(httpErrorHandler());
const identityNumberValidationHandler = middy(identityNumberValidation).use(httpErrorHandler());
const plateValidationHandler = middy(plateValidation).use(httpErrorHandler());
const phoneValidationHandler = middy(phoneValidation).use(httpErrorHandler());
const ipAddressValidationHandler = middy(ipAddressValidation).use(httpErrorHandler());

export {
  emailValidationHandler,
  taxNumberValidationHandler,
  identityNumberValidationHandler,
  plateValidationHandler,
  phoneValidationHandler,
  ipAddressValidationHandler
}