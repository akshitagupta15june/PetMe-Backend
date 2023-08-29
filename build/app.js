"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const cors = require("cors");
const routes_1 = require("./routes");
class App {
    constructor() {
        this.app = express();
        this.config();
        this.app.get('/', (_req, res) => {
            res.send({ ok: true });
        });
        this.routes();
    }
    config() {
        const acessControl = (_req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
            res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
            this.app.use(cors());
            next();
        };
        this.app.use(acessControl);
        this.app.use(express.json());
    }
    routes() {
        this.app.use(routes_1.default);
    }
    start(PORT) {
        this.app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    }
}
exports.default = App;
//# sourceMappingURL=app.js.map