import fastify from "fastify";
import cors from "@fastify/cors";

const server = fastify({logger: true});

server.register(cors, {
    origin: "*", // Permite requisições de qualquer origem
    methods: ["GET", "POST", "PUT", "DELETE"], // Métodos permitidos
})

const teams = [
    {id: 1, name: "Mclaren", base: "Woking, United Kingdom"},
    {id: 2, name: "Mercedes", base: "Brackley, United Kingdom"},
    {id: 3, name: "Red Bull Racing", base: "Milton Keynes, United Kingdom"},
    {id: 4, name: "Ferrari", base: "Maranello, Italy"},
    {id: 5, name: "Alpine", base: "Enstone, United Kingdom"},
    {id: 6, name: "Aston Martin", base: "Silverstone, United Kingdom"},
    {id: 7, name: "Williams", base: "Grove, United Kingdom"}
]

const drivers = [
    {id: 1, name: "Max Verstappen", team: "Red Bull Racing"},
    {id: 2, name: "Lewis Hamilton", team: "Mercedes"},
    {id: 3, name: "Lando Norris", team: "Mclaren"},
    {id: 4, name: "Charles Leclerc", team: "Ferrari"},
    {id: 5, name: "Carlos Sainz", team: "Ferrari"},
    {id: 6, name: "Pierre Gasly", team: "Alpine"},
    {id: 7, name: "Esteban Ocon", team: "Alpine"},
    {id: 8, name: "Fernando Alonso", team: "Aston Martin"},
    {id: 9, name: "Lance Stroll", team: "Aston Martin"},
    {id: 10, name: "Alex Albon", team: "Williams"},
    {id: 11, name: "Oscar Piastri", team: "Mclaren"},
    {id: 12, name: "George Russell", team: "Mercedes"},
    {id: 13, name: "Sergio Pérez", team: "Red Bull Racing"}
]


server.get("/teams", async(request, response) => {
    response.type("application/json").code(200);
    return(teams);
})

server.get("/drivers", async(request, response) => {
    response.type("application/json").code(200);
    return(drivers);
})

interface DriverParams{
    id: string;
}

server.get<{Params: DriverParams}>("/drivers/:id", async(request, response) => {
    const id = parseInt(request.params.id);
    const driver = drivers.find(d => d.id === id);

    if (!driver) {
        response.type("application/json").code(404);
        return {message: "Driver not found"};
    } else {
        response.type("application/json").code(200);
        return {driver};
    }
});

server.listen({port: 3333}, () => {
    console.log("Server init")
})