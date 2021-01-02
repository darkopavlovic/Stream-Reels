# Stream Reels ![GitHub package.json version](https://img.shields.io/github/package-json/v/darkopavlovic/stream-reels) [![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)

Discovery tool for Twitch clips.

Stream Reels pulls the popular Twitch clips of the day. The user can also filter the clips by week, month, and all time. This web app serves as a proof of concept to build an automated Reddit/TikTok style app to view trending Twitch clips.

# Usage

This app is hosted on [Heroku](https://streamreels.herokuapp.com).

# Installing

- Prerequisite: Node 14.x
- Install dependencies by running `npm run setup`
- Create a .env file that contains
  - TWITCH_CLIENT_ID, LIMIT
  - PORT, NODE_ENV
- Start dev servers with `npm run backend` and `npm run client`

# Built With

- NodeJS with Express
- Twitch API
- React
- Material UI

# License

This project is licensed under the MIT License.
