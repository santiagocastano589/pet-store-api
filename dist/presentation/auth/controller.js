"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const domain_1 = require("./../../domain"); // 1
class AuthController {
    constructor(authRepository //9
    ) {
        this.authRepository = authRepository;
        this.registerUser = (req, res) => {
            const [error, registerUserDto] = domain_1.RegisterUserDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            this.authRepository.register(registerUserDto) //10
                .then(user => res.json(user)) // 11
                .catch(error => res.status(500).json(error)); // 12
        }; // 3
        this.loginUser = (req, res) => {
            res.json('loginUser controller'); // 8
        }; // 6
    } // 2
}
exports.AuthController = AuthController;
