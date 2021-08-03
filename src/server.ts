import express from "express";
// @types/express
const app = express();

app.get("/test", (request, response) => {
    // request => entrando
    // response => saindo
    return response.send("Olá");
});

app.post("/test-post", (request, response) => {
    return response.send("Olá, método POST");
});

app.listen(3000 , () => console.log("Sever is running"));