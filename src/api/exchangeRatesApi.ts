import axios from 'axios';

export default class ExchangeRatesApi {
  private baseUrl = 'https://api.exchangeratesapi.io';
  /**
   * Get Latest Rates
   */
  public async getLatestRates() {
    const result = await axios.get(`${this.baseUrl}/latest`);
    return result.data;
  }

  /**
   * Get History Rates
   */
  public async getHistoryRates(date: string) {
    const result = await axios.get(`${this.baseUrl}/${date}`);
    return result.data;
  }
}