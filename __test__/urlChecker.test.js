import { checkUrl } from "../src/client/js/urlChecker";

describe("Tests with http/https protocols", () => {
    test("http:// test should return true", () => {
      const url = "http://www.google.com";
      expect(checkUrl(url)).toBe(true);
    });
    test("https:// test should return true", () => {
      const url = "https://www.google.com";
      expect(checkUrl(url)).toBe(true);
    });
  });

  describe("Tests without http/https protocol", () => {
    test("Test should return true", () => {
      const url = "google.com";
      expect(checkUrl(url)).toBe(false);
    });
    test("Test should return true", () => {
      const url = "www.google.com";
      expect(checkUrl(url)).toBe(false);
    });
  });