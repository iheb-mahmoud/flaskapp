# Use the official Node.js image
FROM node:14

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package.json ./

# Install dependencies
RUN npm install

# Copy the rest of the client application
COPY . .

# Build the production version
RUN npm run build

# Expose port 3000
EXPOSE 3000

# Start the client application on port 3000
CMD ["npm", "start"]

