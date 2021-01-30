# ----- Base ------
FROM node:10.15.3-slim AS base

WORKDIR /usr/app
COPY package*.json ./
ENV TZ=UTC


# ----- Dependencies -----
FROM base AS dependencies

RUN npm set progress=false && npm config set depth 0
RUN npm install --only=production
RUN cp -R node_modules prod_node_modules
RUN npm install


# ----- Build -----
FROM base AS build

# Copy node_modules from dependencies
COPY --from=dependencies /usr/app/node_modules ./node_modules

# Copy required files for build
COPY ./src ./src
COPY ./babel.config.js ./babel.config.js
COPY ./package.json ./package.json
COPY ./package-lock.json ./package-lock.json

# Build app
RUN npm run build


# ----- Release -----
FROM base AS release

COPY --from=dependencies /usr/app/prod_node_modules ./node_modules
COPY --from=build /usr/app/dist ./dist

# Configure port env
ARG port=3000
EXPOSE $port

# Non-root user
USER node

# Start app
CMD ["node", "dist/server.js"]
