export interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
}

export interface Comment {
  author: string;
  content : string;
  role: "student" | "admin"
}