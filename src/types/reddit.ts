export interface RedditPost {
    id: string;
    title: string;
    author: string;
    created_utc: number;
    num_comments: number;
    score: number;
    url: string;
    subreddit: string;
  }
  
  export interface RedditResponse {
    data: {
      children: Array<{
        data: RedditPost;
      }>;
    };
  }
  
  export type SortOption = 'hot' | 'new' | 'controversial' | 'rising' | 'top';
  
  