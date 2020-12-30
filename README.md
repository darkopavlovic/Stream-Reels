# Stream Reels API

Discovery platform for Twitch clips.

# Usage

This app is hosted on [Heroku](https://streamreels.herokuapp.com).

# Installing

- Prerequisite: Node 14.x
- Install dependencies by running `npm run setup`
- Create a .env file that contains
  - MONGODB_USERNAME, MONGODB_PASSWORD, MONGODB_DATABASE_NAME
  - TWITCH_CLIENT_ID, TWITCH_CLIENT_SECRET, TWITCH_CALLBACK_URL
  - SESSION_SECRET
  - PORT, NODE_ENV
- Start dev servers with `npm run backend` and `npm run client`

# Built With

- NodeJS with Express
- MongoDB
- Passport
- Twitch API
- React
- Material UI
