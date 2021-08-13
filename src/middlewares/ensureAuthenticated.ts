import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken"

export function eusureAuthenticated(
    request: Request, 
    response: Response, 
    next: NextFunction
) {
    //Recebre o token
    const authToken = request.headers.authorization;

    //VAlidar se o token está preenchido
    if(!authToken) {
        return response.status(401).end();
    }
        const [,token] = authToken.split(" ");
    console.log(token);

   try { 
    const decode = verify( token , "0614e409a085b502837228525d5d6e6e");
    
     return next();
   } catch(err) {
     return response.status(401).end();
   }


}