export interface Author {
  id: string;
  name: string;
  title: string;
  role: string;
  avatar: string;
}

export interface Article {
  id: string;
  title: string;
  description: string;
  category: string;
  date: string;
  image: string;
  author: Author;
  content: {
    introduction: string;
    sections: {
      id: string;
      title: string;
      content: string;
    }[];
  };
  tableOfContents: {
    id: string;
    title: string;
  }[];
}
