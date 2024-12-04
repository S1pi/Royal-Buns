import {UserReturn} from '../user';

// Toimii jos on --files package.json tiedostossa
declare global {
  namespace Express {
    interface Request {
      user?: UserReturn;
    }
  }
}
