This is a a repository of version 2 of my personal website created in [Next.js](https://nextjs.org). It uses [Pocketbase](https://pocketbase.io/) as it's backend. The site features the homepage (duh) a gallery and a list of my projects some may be interested in.

## Hosting it yourself

First, get [Pocketbase](https://pocketbase.io/), run it, and in the settings load the configuration from `pocketbase_config.json`.

Then, go to `public/globals.js` and set the `pocketbase_url` to where the Pocketbase is setup (if you are running Pocketbase on the same machine as this, use `http://127.0.0.1:8090`)

Finally, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Actually, before it actually runs `npm install \[...\]` any packages i forgot to put in as dependencies.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
