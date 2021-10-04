import getRandomFact from './FactsHandler';

jest.mock("axios");

describe("getRandomFact Test", () => {
    it("should call axios.get", async () => {
         await getRandomFact();

        expect(axios.get).toHaveBeenCalled();
      });
})