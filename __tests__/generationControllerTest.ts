import { identityNumberGeneration, taxNumberGeneration } from '../src/controllers/generationController';
import { identityNumberValidation } from '../src/controllers/validationController';

describe("Identity Number Generation", () => {
  it("Valid Input", () => {
    const generatedValue = identityNumberGeneration("TR");
    console.log(generatedValue);
    expect(identityNumberValidation("TR", generatedValue)).toEqual(true);
  });

  it("Invalid CountryCode", () => {
    expect(() => { identityNumberGeneration("tr"); }).toThrow();
    expect(() => { identityNumberGeneration("US"); }).toThrow();
    expect(() => { identityNumberGeneration("UK"); }).toThrow();
  });
});

describe("Tax Number Generation", () => {
  // TODO: Fix invalid generations (80556762942) 
  // it("Valid Input", () => {
  //   expect(taxNumberValidation("TR", taxNumberGeneration("TR"))).toEqual(true);
  // });

  it("Invalid CountryCode", () => {
    expect(() => { taxNumberGeneration("tr"); }).toThrow();
    expect(() => { taxNumberGeneration("US"); }).toThrow();
    expect(() => { taxNumberGeneration("UK"); }).toThrow();
  });
});
