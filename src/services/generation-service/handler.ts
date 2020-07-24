import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';
import middy from '@middy/core';
import httpErrorHandler from '@middy/http-error-handler';
import * as generationController from '../../controllers/generationController';

const identityNumberGeneration: APIGatewayProxyHandler = async (event) => {
  const { countryCode } = event.pathParameters;
  const identityNumber = generationController.identityNumberGeneration(countryCode);
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: identityNumber,
      success: true
    }),
  };
}

const taxNumberGeneration: APIGatewayProxyHandler = async (event) => {
  const { countryCode } = event.pathParameters;
  const taxNumber = generationController.taxNumberGeneration(countryCode);
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: taxNumber,
      success: true
    }),
  };
}

const identityNumberGenerationHandler = middy(identityNumberGeneration).use(httpErrorHandler());
const taxNumberGenerationHandler = middy(taxNumberGeneration).use(httpErrorHandler());

export {
  identityNumberGenerationHandler,
  taxNumberGenerationHandler
}