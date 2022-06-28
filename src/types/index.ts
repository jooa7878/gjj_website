export interface ISvg {
  classNames?: string;
}

export interface IUser {
  name: string;
  dueDate: string;
}

export interface ILogin {
  isLogin: boolean;
}

export interface IUserTable {
  list: IUser[];
}
