import { apiData, processedData } from "./actions.data";
import { processWorks } from "./actions";

describe("Filter and sort function", () => {
  test("It should sort and select API results", () => {
    expect(processWorks(apiData)).toEqual(processedData);
  });
});
