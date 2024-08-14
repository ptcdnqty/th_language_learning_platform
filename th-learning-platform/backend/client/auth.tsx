import express, { Request, Response } from 'express';
import { UserModel } from './user.js';
import { db } from '../index.js'

const router = express.Router();
const userModel = new UserModel(db);

router.post('/login', async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const user = await userModel.getUserByUsernameAndPassword(username, password);
  if (user) {
    // Authenticate user and return token
    const token = generateToken(user);
    res.json({ token });
  } else {
    res.status(401).json({ error: 'Invalid username or password' });
  }
});

export default router;

function generateToken(user: any) {
    throw new Error('Function not implemented.');
}
