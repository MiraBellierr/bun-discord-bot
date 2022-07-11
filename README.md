<img width="120" height="120" align="left" style="float: left; margin: 0 10px 0 0;" alt="kanna" src="https://cdn.discordapp.com/avatars/995295800722718740/d73803f4bec1c77fe5f1d7a605290a5d.jpg">

# Bun Discord Bot

An interaction Discord bot written in JS and TS using Bun runtime environment. Contains simple get avatar and get user info commands. Starting up the bot only takes `0.02-0.05 ms`.

## This bot is created with Bun runtime

Using [Bun runtime](https://bun.sh). Please visit their website on how to setup Bun runtime.

## Getting Started

### Cloning the repo

```sh
git clone https://github.com/MiraBellierr/bun-discord-bot
```

### Development

To run this locally, rename `.env.example` to `.env` and fill in the variables, then you can run `bun run.js` to start a local dev environment and use something like ngrok/cloudflare to tunnel it to a URL.

### Using ngrok

A way to expose a localhost port to a URL is by using ngrok. [download](https://ngrok.com/download)

First, download and install ngrok, then type `ngrok http 1337` in a new terminal. This will create a https://\*.ngrok.io URL.

To instruct discord to use your server for all user-created interactions, you must:

- Go to to [Discord Developers Portal Applications Page](https://discord.com/developers/applications).
- Select / Create a new application. On the application's page, fill the "Interactions endpoint URL" input with the https://\*.ngrok.io/interactions url.
- Invite your application to your server using this URL: `https://discord.com/oauth2/authorize?client_id=[client-id]&scope=applications.commands`
- You're ready to go!

Be aware that the ngrok URL expires after 2 hours, you'll have to restart the ngrok command after this delay.
