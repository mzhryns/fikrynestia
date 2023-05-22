# Use Node.js as base image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci --production

# Copy the rest of the project files
COPY . .

# Build the Nuxt project
RUN npm run build

# Expose the Nuxt application port
EXPOSE 3000

# Start the Nuxt application
CMD ["npm", "start"]