"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_router_1 = __importDefault(require("./routes/user-router"));
const error_handler_1 = require("./middlewares/error-handler");
const auth_router_1 = __importDefault(require("./routes/auth-router"));
const cors_1 = __importDefault(require("cors"));
const restaurant_router_1 = __importDefault(require("./routes/restaurant-router"));
const reservation_router_1 = __importDefault(require("./routes/reservation-router"));
const menu_router_1 = __importDefault(require("./routes/menu-router"));
const path_1 = __importDefault(require("path"));
const hostname = '127.0.0.1';
const port = 3000;
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));
app.use(express_1.default.json());
app.use(express_1.default.static('public'));
// app.get('/', (req: Request, res: Response) => {
//   res.send('Tervetuloa');
// });
app.use('/api/user', user_router_1.default);
app.use('/api/auth', auth_router_1.default);
app.use('/api/restaurants', restaurant_router_1.default);
app.use('/api/reservations', reservation_router_1.default);
app.use('/api/menu', menu_router_1.default);
// Handles any requests that don't match the ones above and sends the index.html file
// This is needed for our SPA to work; otherwise, the browser would try to request a route from the server
// Html file shows 404 page if route is not found
app.get('*', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '..', 'public', 'index.html'));
});
// if non of routes works uses this
app.use(error_handler_1.notFoundHandler);
// errorHandler that handles all errors
app.use(error_handler_1.errorHandler);
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
