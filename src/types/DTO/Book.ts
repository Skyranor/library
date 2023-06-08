export interface BookDTO {
  id: number;
  title: string;
  issueYear?: string;
  rating?: number;
  authors?: string[];
  image?: {
    url: string;
  };
  categories?: string[];
  booking?: {
    id: number;
    order: boolean;
    dateOrder: string;
    customerId: number;
    customerFirstName: string;
    customerLastName: string;
  };
  delivery?: {
    id: number;
    handed: boolean;
    dateHandedFrom?: string;
    dateHandedTo?: string;
    recipientId?: number;
    recipientFirstName?: string;
    recipientLastName?: string;
  };
  histories?: {
    id?: number;
    userId?: number;
  }[];
}

export interface BookDetailsDTO extends Omit<BookDTO, 'image'> {
  description?: string;
  publish?: string;
  pages?: string;
  cover?: string;
  weight?: string;
  format?: string;
  ISBN?: string;
  producer?: string;
  images?: {
    url: string;
  }[];
  comments?: CommentDTO[];
}

export interface CommentDTO {
  rating: number;
  createdAt: string;
  id?: number;
  text?: string;
  user: {
    commentUserId: number;
    firstName: string;
    lastName: string;
    avatarUrl?: string;
  };
}

export interface CategoryDTO {
  id: number;
  name: string;
  path: string;
  booksCount: number;
}
