FROM node:14
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
ENV REACT_APP_API_URL=http://backend:8080
EXPOSE 3000
CMD ["npm", "start"]
RUN echo "REACT_APP_API_URL=$REACT_APP_API_URL" >> .env