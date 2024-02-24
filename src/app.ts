import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("Auth System Hear");
});

export default app;
