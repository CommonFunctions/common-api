import { CurrencyController } from '../src/controllers/currencyController';
import ExchangeRatesApi from '../src/api/exchangeRatesApi'

jest.mock('../src/api/exchangeRatesApi');

describe("Latest Currency Conversion", () => {
  it("Valid Input", async () => {
    const api = new ExchangeRatesApi();
    const mockGetLatestRates = jest.fn();
    api.getLatestRates = mockGetLatestRates;
    const expectedResult = {"rates":{"TRY":6.5,"USD":1.0},"base":"USD","date":"2020-07-17"};
    mockGetLatestRates.mockReturnValue(Promise.resolve(expectedResult));

    const currencyController = new CurrencyController(api);
    const data = await currencyController.currencyConversionLatest("USD", "TRY", 3);
    expect(data).toEqual(19.5);
  });
});

describe("History Currency Conversion", () => {
  it("Valid Input", async () => {
    const api = new ExchangeRatesApi();
    const mockGetHistoryRates = jest.fn();
    api.getHistoryRates = mockGetHistoryRates;
    const expectedResult = {"rates":{"TRY":1.5,"USD":1.0},"base":"USD","date":"2009-12-31"};
    mockGetHistoryRates.mockReturnValue(Promise.resolve(expectedResult));

    const currencyController = new CurrencyController(api);
    const data = await currencyController.currencyConversionHistory("USD", "TRY", 5, '2010-01-01');
    expect(data).toEqual(7.5);
  });
});
