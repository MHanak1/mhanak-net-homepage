import PocketBase from 'pocketbase';

export const pocketbase_url = 'http://pocketbase.home:8090'; //set it to wherever your pocketbase is hosted, i use pocketbase.home and then set it to 127.0.0.1 in the hosts file (and to the server ip in the local dns, but then i also do some proxy passing with nginx, whatever you'll figure it out)
export const pb = new PocketBase(pocketbase_url);
export const POSTS_PER_PAGE = 10;
