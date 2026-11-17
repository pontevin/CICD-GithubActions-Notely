import { IncomingHttpHeaders } from "http";
import { getAPIKey } from "../api/auth.js";
import { describe, expect, test } from "vitest";

describe("APIKey", () => {
  test("is null", () => {
    const headers: IncomingHttpHeaders = {
        authorization: "SomeKey 1234567890"
    };
    expect(getAPIKey(headers)).toBeNull();
  });

  test("has valid value", () => {
    const headers: IncomingHttpHeaders = {
        authorization: "ApiKey 1234567890"
    };
    expect(getAPIKey(headers)).toBe("1234567890");
  });
});