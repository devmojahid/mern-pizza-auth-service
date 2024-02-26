import app from "./src/app";
import { discountParcentize } from "./src/utils";
import request from "supertest";

describe.skip("App", () => {
    it("should Calculet the discount", () => {
        const result = discountParcentize(100, 10);
        expect(result).toBe(10);
    });
    it("should response 200 status code", async () => {
        const response = await request(app).get("/").send();
        expect(response.statusCode).toBe(200);
    });
});
