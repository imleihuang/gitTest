# You should always specify a full version here to ensure all of your developers
# are running the same version of Node.
FROM node:8

WORKDIR /usr/src/app

COPY package*.json ./

# Build for production.
RUN yarn install

COPY . .

# Tell Docker about the port we'll run on.
EXPOSE 3000

CMD ["yarn", "start"]