import ExchangeRatesApi from '../src/api/exchangeRatesApi'

describe("Exchange Rate Api", () => {
  it("Get Latest Rates", async () => {
    const api = new ExchangeRatesApi();
    const data = await api.getLatestRates();
    expect(data.base).toEqual("EUR");
    expect(data.rates.TRY).toBeGreaterThan(1);
  });

  it("Get History Rates", async () => {
    const api = new ExchangeRatesApi();
    const data = await api.getHistoryRates("2020-01-01");
    expect(data.base).toEqual("EUR");
    expect(data.rates.TRY).toBeGreaterThan(1);
  });
});
