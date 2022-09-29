export interface UserState {
  user: {
    user: {
      aud: string;
      email: string;
      exp: number;
      iat: number;
      id: string;
      isAdmin: boolean;
      iss: string;
      name: string;
    };
    isLoggedIn: boolean;
  };
}
