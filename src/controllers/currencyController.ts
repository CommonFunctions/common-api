import fx from 'money';
import ExchangeRatesApi from '../api/exchangeRatesApi'

export class CurrencyController {
  private api: ExchangeRatesApi;
  constructor(api: ExchangeRatesApi) {
    this.api = api;
  }

  public async currencyConversionLatest(fromCurrencyCode: string, toCurrencyCode: string, amount: number): Promise<number> {
    const currenciesResponse = await this.api.getLatestRates();
    return this.convert(fromCurrencyCode, toCurrencyCode, amount, currenciesResponse.rates);
  }

  public async currencyConversionHistory(fromCurrencyCode: string, toCurrencyCode: string, amount: number, date: string): Promise<number> {
    const currenciesResponse = await this.api.getHistoryRates(date);
    return this.convert(fromCurrencyCode, toCurrencyCode, amount, currenciesResponse.rates);
  }

  private convert(fromCurrencyCode: string, toCurrencyCode: string, amount: number, currencyRates: any) {
    fx.rates = currencyRates;
    const result = fx(amount).from(fromCurrencyCode).to(toCurrencyCode);
    return result;
  }
}