import axios from "axios";
import GetData from ".";

describe("test data", () => {
  beforeAll(async () => {
    global.myGlobalObject = await GetData();
  });
  afterAll(() => {
    // Clean up the global object after the tests
    delete global.myGlobalObject;
  });

  it("should test something using the global object", () => {
    // Use the global object in your test
    expect(global.myGlobalObject).toBeDefined();
  });
});
