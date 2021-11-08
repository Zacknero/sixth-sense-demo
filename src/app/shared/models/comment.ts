/* Comment interface for comments of post*/
export interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
