import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    email: 'diego@rocketsea.com.br',
    password: '12333',
    techs: [
      'Node.js',
      'ReactJS',
      'React Native',
      { title: 'javascritpt', experience: 1000 }
    ]
  });


  return response.json({ message: 'Hello Word' });
};