interface User {
  [key: string]: any;
  id?: string;
  name?: string;
  refreshToken?: string;
}

declare global {
  namespace Express {
    interface Request {
      user?: User;
    }
  }
}
