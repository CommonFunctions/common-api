import errorHelper from '../helpers/errors';

function identityNumberGeneration(countryCode: string): string {
  if (countryCode !== 'TR')
    throw errorHelper.trOnly;

  const randomNumber = "" + Math.floor(900000001 * Math.random() + 1e8);
  const list = randomNumber.split("").map(function(t) { return parseInt(t, 10) });
  const tek = list[0] + list[2] + list[4] + list[6] + list[8];
  const cift = list[1] + list[3] + list[5] + list[7];
  const tc10 = (7 * tek - cift) % 10;
  const identityNumber = randomNumber + ("" + tc10) + ("" + (cift + tek + tc10) % 10);
  return identityNumber;
}

// TODO: Fix 80556762942
function taxNumberGeneration(countryCode: string): string {
  if (countryCode !== 'TR')
    throw errorHelper.trOnly;

  let taxNumber = Math.round(Math.random() * 1000000000).toString()
  let sum = 0

  for (let i = 0, j = 9; i < 10; i++, j--) {
    const i1 = (Number(taxNumber.charAt(i)) + j) % 10
    const i2 = (i1 * Math.pow(2, j)) % 9

    sum += (i1 != 0 && i2 == 0) ? 9 : i2
  }

  const lastdigit = (sum % 10) == 0 ? 0 : (10 - (sum % 10))

  taxNumber += String(lastdigit);
  taxNumber = taxNumber.padStart(10, '0');
  return taxNumber;
}

export {
  identityNumberGeneration,
  taxNumberGeneration
}