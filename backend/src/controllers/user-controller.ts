import {Request, Response} from 'express';

const getMe = async (req: Request, res: Response) => {
  if (req.user) {
    console.log('getMe', req.user);
    res.json({message: 'token ok', user: req.user});
  } else {
    res.sendStatus(401);
  }
};

export {getMe};
