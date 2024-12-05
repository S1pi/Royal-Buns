import {Request, Response} from 'express';

const getMe = async (req: Request, res: Response) => {
  if (req.user) {
    console.log('getMe', req.user);
    res.json({message: 'token ok', user: req.user});
  } else {
    res.sendStatus(401);
  }
};

// TODO (meaby): add user update and delete functions

export {getMe};
