# Use the official Node.js image
FROM node:18-alpine

# Set the working directory to the root of the server directory
WORKDIR /App

# Copy package.json from the parent directory
COPY package.json ./

# Install dependencies
RUN npm i

# Copy the rest of the server application
COPY . .

# Expose port 5003 (adjust as needed)
EXPOSE 5003

# Start the server application
 CMD ["npm","start"]
