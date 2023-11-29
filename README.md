# Discord Bots

Welcome. This is my modest collection of discord bots. Enjoy.

## Architecture

Each discord bot should map to a single camelCased file in the `/bots` directory. Additional functions, etc. can be added to the `/utils` directory and `require`d as needed.

Each file in the `/bots` directory should map to exactly one key in the `.env` file with the following convention:

* A bot executed with JavaScript in `bot.js` will have a token with name `BOT_TOKEN` in `.env`
* A bot with JavaScript in `myDiscordBot.js` will have a token with name `MYDISCORDBOT_TOKEN` in `.env`

```bash
BOT_TOKEN=fr243fs23rfr32234f43refv
MYDISCORDBOT_TOKEN=jhiu344u3uyu34y5783ytugih87h
```

