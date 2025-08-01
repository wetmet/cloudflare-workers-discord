# cloudflare-workers-discord

A [slash-create](https://npm.im/slash-create) template, using [Cloudflare Workers](https://workers.cloudflare.com). This project is based on [`https://github.com/Snazzah/slash-create-worker`](https://github.com/Snazzah/slash-create-worker)

## Getting Started
### Cloning the repo
To get started with this project, clone the repository:
```sh
git clone <repository_url>
```

After cloning, install the dependencies using npm:
```sh
npm install
```
### Installing and setting up Wrangler
> Make sure to [sign up for a Cloudflare Workers account](https://dash.cloudflare.com/sign-up/workers) in a browser before continuing.
Install wrangler with npm:
```sh
npm install -D wrangler@latest
```
Read more about [installing wrangler](https://developers.cloudflare.com/workers/cli-wrangler/install-update).

Afterwards, run `wrangler login` to login to your Cloudflare account with OAuth:
```sh
wrangler login
```

### Filling in secrets
You can enter in environment secrets with `wrangler secret put`, here are the keys that are required to run this:
```sh
npx wrangler secret put DISCORD_APP_ID
npx wrangler secret put DISCORD_PUBLIC_KEY
npx wrangler secret put DISCORD_BOT_TOKEN
```

### Development
To run this locally, create a `.env` file and a `.dev.vars` file based on the provided examples, then you can run `wrangler dev` to start a local dev environment and use something like ngrok to tunnel it to a URL.

To sync commands in the development environment, run `npm run sync:dev` (or `yarn sync:dev`).

> Note: When you create a command, make sure to include it in the array of commands in `./src/commands/index.ts`.

### Production
To sync to production, run `npm run sync`. To publish code to a worker, run `npm run deploy`.
