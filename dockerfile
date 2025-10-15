# Use official Node.js image
FROM node:18-alpine

# Create app directory
WORKDIR /app

# Copy package files first (for layer caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Expose port (same as your .env PORT)
EXPOSE 3000

# Start the app
CMD ["npm", "run", "dev"]
