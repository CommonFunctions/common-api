import createError, { HttpError } from 'http-errors';

function invalidLength(len: number): HttpError {
  return new createError.BadRequest(`Girilen içerik ${len} basamaklı olmalıdır.`);
}

export = {
  trOnly: new createError.BadRequest("Sadece TR versiyonumuz bulunmaktadır."),
  invalidLength
}