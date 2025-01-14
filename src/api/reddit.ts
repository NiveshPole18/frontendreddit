import axios from 'axios';
import { RedditResponse, SortOption } from '../types/reddit';

const BASE_URL = 'https://backendreddit-1.onrender.com/api';

export const fetchPosts = async (sort: SortOption = 'hot', limit: number = 10) => {
  try {
    const response = await axios.get<RedditResponse>(
      `${BASE_URL}/posts/${sort}?limit=${limit}`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
};

export const searchPosts = async (query: string) => {
  try {
    const response = await axios.get<RedditResponse>(
      `${BASE_URL}/posts/search?q=${encodeURIComponent(query)}`
    );
    return response.data;
  } catch (error) {
    console.error('Error searching posts:', error);
    return [];
  }
};

