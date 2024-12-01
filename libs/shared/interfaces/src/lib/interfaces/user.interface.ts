export interface IUserModel {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  password: string;
}

export type IRegisterUser = Omit<IUserModel, 'id'>;

export type IJWTPayloadUser = Omit<IUserModel, 'id' | 'password'>;

export type ILoginUser = Pick<IUserModel, 'username' | 'password'>;

export interface ISignedUser {
  username: string;
  firstName: string;
  lastName: string;
  expiresIn: number;
  token: string;
}
