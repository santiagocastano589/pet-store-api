import { Request, Response } from 'express'; // 5
import { AuthRepository, CustomError,  RegisterUserDto } from '../../domain';



export class AuthController { // 1

    constructor(
        private readonly authRepository: AuthRepository //9
    ){} // 2

    private handleError = ( error: unknown, res: Response ) => {
        if ( error instanceof CustomError ) {
            return res.status(error.statusCode).json({ error: error.message });
          }

        return res.status(500).json({ error: 'Internal Server Error' });
    }


    registerUser = (req: Request, res: Response) => { // 4
        const [error, registerUserDto] = RegisterUserDto.create(req.body);
        if ( error ) return res.status(400).json({ error });

        this.authRepository
        .register(registerUserDto!) //10
        .then((user) => res.json(user)) // 11
        .catch((error) => this.handleError(error, res)); 
    } // 3

    loginUser =  (req: Request, res: Response) => { // 7
        res.json('loginUser controller') // 8
    } // 6

}