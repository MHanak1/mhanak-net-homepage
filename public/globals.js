import PocketBase from 'pocketbase';

export const pocketbase_url = 'http://pocketbase.home:8090'; //set it to wherever your pocketbase is hosted, i use pocketbase.home and then set it to 127.0.0.1 in the hosts file
export const pb = new PocketBase(pocketbase_url);
export const POSTS_PER_PAGE = 10;
