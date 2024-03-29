import { DataSource } from "typeorm";
import app from "../../src/app";
import request from "supertest";
import { AppDataSource } from "../../src/config/data-source";
import { User } from "../../src/entity/User";
import { truncate } from "../utils";
describe("POST /auth/register", () => {
    let connection: DataSource;

    beforeAll(async () => {
        connection = await AppDataSource.initialize();
    });

    beforeEach(async () => {
        //database truncate
        await truncate(connection);
    });

    afterAll(async () => {
        await connection.destroy();
    });
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
            await request(app).post("/auth/register").send(userData);
            //Assert
            const userRepository = connection.getRepository(User);
            const users = await userRepository.find();
            expect(users).toHaveLength(1);
            expect(users[0].firstName).toBe(userData.firstName);
            expect(users[0].lastName).toBe(userData.lastName);
            expect(users[0].email).toBe(userData.email);
        });
    });
    // describe("Fields Are missing", () => {});
});
