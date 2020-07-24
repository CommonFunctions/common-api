import createError, { HttpError } from 'http-errors';

function invalidLength(len: number): HttpError {
  return new createError.BadRequest(`Girilen içerik ${len} basamaklı olmalıdır.`);
}

export = {
  trOnly: new createError.BadRequest("Sadece TR versiyonumuz bulunmaktadır."),
  tokenRequired: new createError.Unauthorized("Token field required."),
  invalidToken: new createError.Unauthorized("Invalid token."),
  invalidUser: new createError.Unauthorized("Invalid user."),
  invalidLength,
  insufficientFunds: new createError.PaymentRequired("Insufficient funds."),
}