# Use the official Node.js image as the base image
FROM node:16

# Set the working directory inside the container
WORKDIR /app

# Copy all files from the project directory to the working directory
COPY . .

# Install project dependencies
RUN npm ci

RUN npm run build

# Expose a port (if your Node.js application needs to listen on a specific port)
EXPOSE 3000

# Define the command to run your Node.js application
CMD [ "node", "./dist/index.js" ]