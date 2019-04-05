export interface Post {
  id: number;
  title: string;
}

// export interface RootObject {
//   posts: Models[];
// }


export interface Comment {
  id: number;
  body: string;
  postId: number;
}

export interface Profile {
  name: string;
}
export interface All {
  posts: Post[];
  comments: Comment[];
  profile: Profile;
}
