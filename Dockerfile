# Use the official Node.js image as a parent image
FROM node:18-alpine

# Set the working directory in the Docker image
WORKDIR /app

# Copy the package.json and package-lock.json files into the image
COPY package*.json ./

# Install the application dependencies
RUN npm install

# Copy the application code into the image
COPY . .

# Build the application
RUN npm run build

# Expose the application on port 3000
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
