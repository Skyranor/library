import { BookDTO } from './Book';

export interface UserRegisterDTO {
  email: string;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  phone: string;
}

export interface UserLoginDTO extends UserRegisterDTO {
  id: number;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface UserAPI {
  jwt: string;
  user: UserLoginDTO;
}

export interface UserDTO extends UserLoginDTO {
  confirmed: boolean;
  blocked: boolean;
  role: {
    id: number;
    name: string;
    description: string;
    type: string;
  };
  comments: [
    {
      id: number;
      rating: number;
      text?: string;
      bookId: number;
    }
  ];
  avatar: string;
  booking: {
    id: number;
    order: boolean;
    dateOrder: string;
    book: Pick<BookDTO, 'id' | 'title' | 'rating' | 'issueYear' | 'authors'> & {
      image: string;
    };
  };
}
