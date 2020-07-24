# Common Api

[![Common Api](https://circleci.com/gh/CommonFunctions/common-api.svg?style=svg&circle-token=c0fc8dd0db5c9af0e9c1e9b083a96e9b6f60217c)](https://circleci.com/gh/CommonFunctions/common-api) [![codecov](https://codecov.io/gh/CommonFunctions/common-api/branch/master/graph/badge.svg)](https://codecov.io/gh/CommonFunctions/common-api) [![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=CommonFunctions_common-api&metric=alert_status)](https://sonarcloud.io/dashboard?id=CommonFunctions_common-api) [![Known Vulnerabilities](https://snyk.io/test/github/CommonFunctions/common-api/badge.svg)](https://snyk.io/test/github/CommonFunctions/common-api)

Use pre-defined functions from serverless environment.

## Postman Collection

https://documenter.getpostman.com/view/2803116/T1DpCxdd

## Base Url

https://w7d24gb67j.execute-api.eu-central-1.amazonaws.com/dev

## Current endpoints

- GET - /currency/exchange/{fromCurrencyCode}/{toCurrencyCode}
- GET - /currency/exchange/{fromCurrencyCode}/{toCurrencyCode}/{amount}
- GET - /currency/exchange/{fromCurrencyCode}/{toCurrencyCode}/{amount}/{date}
- GET - /generation/identityNumber/{countryCode}
- GET - /generation/taxNumber/{countryCode}
- GET - /validation/email/{email}
- GET - /validation/taxNumber/{countryCode}/{taxNumber}
- GET - /validation/identityNumber/{countryCode}/{identityNumber}
- GET - /validation/plate/{countryCode}/{plate}
- GET - /validation/phone/{countryCode}/{phone}
- GET - /validation/ipAddress/{ipAddress}
