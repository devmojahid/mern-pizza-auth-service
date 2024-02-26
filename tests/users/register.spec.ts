import app from "../../src/app";
import request from "supertest";
describe("POST /auth/register", () => {
    describe("Given all fields", () => {
        it("Should return 201 status code", async () => {
            //Arrange
            const userData = {
                firstName: "Mojahid",
                lastName: "Islam",
                email: "mojahid@test.com",
                password: "testpass",
            };
            //Act
            const response = await request(app)
                .post("/auth/register")
                .send(userData);
            //Assert
            expect(response.statusCode).toBe(201);
        });

        it("Should return json data", async () => {
            //Arrange
            const userData = {
                firstName: "Mojahid",
                lastName: "Islam",
                email: "mojahid@test.com",
                password: "testpass",
            };
            //Act
            const response = await request(app)
                .post("/auth/register")
                .send(userData);
            //Assert
            expect(response.headers["content-type"]).toEqual(
                expect.stringContaining("json"),
            );
        });

        it("Should persist with user in database ", async () => {
            //Arrange
            const userData = {
                firstName: "Mojahid",
                lastName: "Islam",
                email: "mojahid@test.com",
                password: "testpass",
            };
            //Act
            const response = await request(app)
                .post("/auth/register")
                .send(userData);
            //Assert
            expect(response.headers["content-type"]).toEqual(
                expect.stringContaining("json"),
            );
        });
    });
    // describe("Fields Are missing", () => {});
});
