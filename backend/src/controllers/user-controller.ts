import {Request, Response} from 'express';

const getMe = async (req: Request, res: Response) => {
  if (req.user) {
    console.log('getMe', req.user);
    res.json({message: 'token ok', user: req.user});
  } else {
    res.sendStatus(401);
  }
};

const getProfileData = async (req: Request, res: Response) => {
  if (req.user) {
    console.log('getProfileData', req.user);
    const {id, username, email, phonenumber, user_type, favourite_bgr_id} = req.user;
    if (favourite_bgr_id) {
      // Implement favourite burger fetching
      // Fornow just return it with burger id
    }

    // const userReservations = ;
  } else {
    res.sendStatus(401);
  }
};

// TODO (meaby): add user update and delete functions

export {getMe, getProfileData};
