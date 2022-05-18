export interface User {
  id: string;
  email: string;
  password: string;
  name: {
    firstName: string;
    lastName: string;
  };
}

export interface CreateUserDTO extends Omit<User, 'id'> {}
