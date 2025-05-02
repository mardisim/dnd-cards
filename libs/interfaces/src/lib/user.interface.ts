export interface IUserModel {
  id: number;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
  refreshToken: string | null;
}

export type ICreateUser = Omit<IUserModel, 'id' | 'refreshToken'>;

export type IJWTPayloadUser = Omit<IUserModel, 'id' | 'password'>;

export type ILoginUser = Pick<IUserModel, 'username' | 'password'>;

export interface ISignedUser {
  username: string;
  firstName: string;
  lastName: string;
  expiresIn: number;
  accessToken: string;
  refreshToken: string | null;
}

export interface IJWSTokens {
  accessToken: string;
  refreshToken: string;
}
