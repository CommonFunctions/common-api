import { taxNumberValidation, emailValidation, identityNumberValidation, plateValidation, phoneValidation, ipAddressValidation } from '../src/controllers/validationController';

describe("E-mail Validation", () => {
  it("Valid Input", () => {
    expect(emailValidation("harunsokullu@gmail.com")).toEqual(true);
  });

  it("Invalid Input", () => {
    expect(emailValidation("harunsokullu@gmail.c")).toEqual(false);
    expect(emailValidation("@gmail.c")).toEqual(false);
    expect(emailValidation("a@b")).toEqual(false);
  });
});

describe("Tax Number Validation", () => {
  it("Valid Input", () => {
    expect(taxNumberValidation("TR", "5456309986")).toEqual(true);
    expect(taxNumberValidation("TR", "3918950737")).toEqual(true);
    expect(taxNumberValidation("TR", "3288570327")).toEqual(true);
    expect(taxNumberValidation("TR", "8214897971")).toEqual(true);
    expect(taxNumberValidation("TR", "4084304495")).toEqual(true);
  });

  it("Invalid Input", () => {
    expect(taxNumberValidation("TR", "5456309987")).toEqual(false);
    expect(taxNumberValidation("TR", "3918950738")).toEqual(false);
    expect(taxNumberValidation("TR", "3288570328")).toEqual(false);
    expect(taxNumberValidation("TR", "8214897972")).toEqual(false);
    expect(taxNumberValidation("TR", "4084304496")).toEqual(false);
  });

  it("Invalid CountryCode", () => {
    expect(() => { taxNumberValidation("tr", "5456309986"); }).toThrow();
    expect(() => { taxNumberValidation("US", "3918950737"); }).toThrow();
    expect(() => { taxNumberValidation("UK", "3288570327"); }).toThrow();
  });

  it("Invalid Length", () => {
    expect(() => { taxNumberValidation("TR", "123456789"); }).toThrow();
    expect(() => { taxNumberValidation("TR", "12345678901"); }).toThrow();
  });
});

describe("Identity Number Validation", () => {
  it("Valid Input", () => {
    expect(identityNumberValidation("TR", "57781220462")).toEqual(true);
  });

  it("Invalid Input", () => {
    expect(identityNumberValidation("TR", "57781220463")).toEqual(false);
  });

  it("Invalid CountryCode", () => {
    expect(() => { identityNumberValidation("tr", "57781220462"); }).toThrow();
    expect(() => { identityNumberValidation("US", "57781220462"); }).toThrow();
    expect(() => { identityNumberValidation("UK", "57781220462"); }).toThrow();
  });

  it("Invalid Length", () => {
    expect(() => { identityNumberValidation("TR", "1234567890"); }).toThrow();
    expect(() => { identityNumberValidation("TR", "123456789012"); }).toThrow();
  });
});

describe("Plate Validation", () => {
  it("Valid Input", () => {
    expect(plateValidation("TR", "34M1234")).toEqual(true);
    expect(plateValidation("TR", "34P12345")).toEqual(true);
    expect(plateValidation("TR", "34MK123")).toEqual(true);
    expect(plateValidation("TR", "34MK1234")).toEqual(true);
    expect(plateValidation("TR", "34ABC12")).toEqual(true);
    expect(plateValidation("TR", "34ABC123")).toEqual(true);
  });

  it("Invalid Input", () => {
    expect(plateValidation("TR", "34ASDF34")).toEqual(false);
    expect(plateValidation("TR", "34A34")).toEqual(false);
  });

  it("Invalid CountryCode", () => {
    expect(() => { plateValidation("tr", "34M1234"); }).toThrow();
    expect(() => { plateValidation("US", "34P12345"); }).toThrow();
    expect(() => { plateValidation("UK", "34MK123"); }).toThrow();
  });
});

describe("Phone Validation", () => {
  it("Valid Input", () => {
    expect(phoneValidation("TR", "+905074714044")).toEqual(true);
    expect(phoneValidation("TR", "05074714044")).toEqual(true);
    expect(phoneValidation("TR", "(507)4714044")).toEqual(true);
    expect(phoneValidation("TR", "(507) 471 4044")).toEqual(true);
  });

  it("Invalid Input", () => {
    expect(phoneValidation("TR", "0501 123 456")).toEqual(false);
    expect(phoneValidation("TR", "533")).toEqual(false);
  });

  it("Invalid CountryCode", () => {
    expect(() => { phoneValidation("tr", "05074714044"); }).toThrow();
    expect(() => { phoneValidation("US", "05074714044"); }).toThrow();
    expect(() => { phoneValidation("UK", "05074714044"); }).toThrow();
  });
});

describe("IP Address Validation", () => {
  it("Valid Input", () => {
    expect(ipAddressValidation("127.0.0.1")).toEqual(true);
    expect(ipAddressValidation("192.168.1.1")).toEqual(true);
    expect(ipAddressValidation("255.255.255.255")).toEqual(true);
    expect(ipAddressValidation("0.0.0.0")).toEqual(true);
  });

  it("Invalid Input", () => {
    expect(ipAddressValidation("255.255.255.255.")).toEqual(false);
    expect(ipAddressValidation("1.1.1")).toEqual(false);
    expect(ipAddressValidation("192.168.1.256")).toEqual(false);
  });
});
