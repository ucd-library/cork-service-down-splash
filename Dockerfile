FROM node:24

RUN apt-get update && apt-get install -y \
  apt-transport-https \
  ca-certificates \
  gnupg \
  curl \
  cron \
  lsb-release \
  vim \
  procps


# Set working directory
RUN mkdir /cork-service-down-splash
WORKDIR /cork-service-down-splash

# Install app dependencies
COPY package.json .
COPY package-lock.json .
RUN npm install

# Copy app source code
COPY src ./src

# Build the client
RUN npm run dist

CMD ["bash", "-c", "npm run start"]