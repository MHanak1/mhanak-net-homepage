import PocketBase from 'pocketbase';

export const pocketbase_url = 'http://192.168.1.66:8090' //set it to wherever your pocketbase is hosted
export const pb = new PocketBase(pocketbase_url);
export const POSTS_PER_PAGE = 10;
