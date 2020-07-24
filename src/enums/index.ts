export enum CountryCode {
  Turkey = "TR"
}

export enum Service {
  Calculation = "calculation",
  Currency = "currency",
  Generation = "generation",
  Information = "information",
  Validation = "validation"
}

export enum CurrencyEndpoint {
  LatestRate = "latestRate",
  LatestConversion = "latestConversion",
  HistoryConversion = "historyConversion"
}

export enum GenerationEndpoint {
  IdentityNumber = "identityNumber",
  TaxNumber = "taxNumber"
}

export enum ValidationEndpoint {
  Email = "email",
  IdentityNumber = "identityNumber",
  TaxNumber = "taxNumber",
  Plate = "plate",
  Phone = "phone",
  IPAddress = "ipAddress"
}