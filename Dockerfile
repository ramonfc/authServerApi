FROM node
WORKDIR /authServerApi
COPY ["package.json", "package-lock.json", "./"]
RUN npm i
COPY . .
CMD ["npm", "start"]