import errorHelper from '../helpers/errors';

function emailValidation(email: string): boolean {
  const expr = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const isValid = expr.test(email);
  return isValid;
}

function taxNumberValidation(countryCode: string, taxNumber: string): boolean {
  if (countryCode !== 'TR')
    throw errorHelper.trOnly;
  if (taxNumber.length !== 10)
    throw errorHelper.invalidLength(10);

  const digits = taxNumber.split('');
  digits.pop();

  const r = [];

  digits.forEach((el, i) => {
    const x = Number(el) + 10 - (i + 1);
    const mod = x % 10;
    if (mod === 9) {
      r.push(mod);
    } else {
      const pow = 2 ** (10 - (i + 1));
      r.push((mod * pow) % 9);
    }
  });

  const total = r.reduce((acc, cur) => acc + cur);
  const c = (10 - ((total % 10) % 10)) % 10;

  const isValid = `${digits.join('')}${c}` === taxNumber;

  return isValid;
}

function identityNumberValidation(countryCode: string, identityNumber: string): boolean {
  if (countryCode !== 'TR')
    throw errorHelper.trOnly;
  if (identityNumber.length !== 11)
    throw errorHelper.invalidLength(11);

  let totalX = 0;
  for (let i = 0; i < 10; i++) {
    totalX += Number(identityNumber.substr(i, 1));
  }
  const isRuleX = String(totalX % 10) === identityNumber[10];
  let totalY1 = 0;
  let totalY2 = 0;
  for (let i = 0; i < 9; i+=2) {
    totalY1 += Number(identityNumber.substr(i, 1));
  }
  for (let i = 1; i < 9; i+=2) {
    totalY2 += Number(identityNumber.substr(i, 1));
  }
  const isRuleY = String(((totalY1 * 7) - totalY2) % 10) === identityNumber[9];
  const isValid = isRuleX && isRuleY;

  return isValid;
}

function plateValidation(countryCode: string, plate: string): boolean {
  if (countryCode !== 'TR')
    throw errorHelper.trOnly;

  const plateFixed = plate.replace(/\s+/g, '').toUpperCase();
  const expr = /^(0[1-9]|[1-7][0-9]|8[01])(([A-Z])(\d{4,5})|([A-Z]{2})(\d{3,4})|([A-Z]{3})(\d{2,3}))$/;
  const isValid = expr.test(plateFixed);
  return isValid;
}

function phoneValidation(countryCode: string, phone: string): boolean {
  if (countryCode !== 'TR')
    throw errorHelper.trOnly;

  const expr = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
  const isValid = expr.test(phone);
  return isValid;
}

function ipAddressValidation(ipAddress: string): boolean {
  const octet = '(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0)';
  const expr = new RegExp(`^${octet}\\.${octet}\\.${octet}\\.${octet}$`);
  const isValid = expr.test(ipAddress);
  return isValid;
}

export {
  emailValidation,
  taxNumberValidation,
  identityNumberValidation,
  plateValidation,
  phoneValidation,
  ipAddressValidation
}