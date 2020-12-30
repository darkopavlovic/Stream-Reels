# Stream Reels API

Discovery platform for Twitch clips.

# Usage

This app is hosted on [Heroku](https://streamreels.herokuapp.com).

# Installing

- Prerequisite: Node 14.x
- Install dependencies by running `npm install`
- Create a .env file that contains
  - MONGODB_USERNAME, MONGODB_PASSWORD, MONGODB_DATABASE_NAME
  - TWITCH_CLIENT_ID, TWITCH_CLIENT_SECRET, TWITCH_CALLBACK_URL
  - SESSION_SECRET
  - PORT, NODE_ENV
- Start dev server with `npm run dev`

# Built With

- NodeJS with Express
- Passport
- Twitch API
- React
- Material UI
