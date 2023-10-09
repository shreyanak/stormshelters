# ==== CONFIGURE =====
FROM node:alpine 
# set working directory to /app inside the container
WORKDIR /app
# copy app files
COPY . ./

# ==== BUILD =====
# install dependencies
COPY package*.json ./
RUN npm install

# ==== RUN =======
# expose the port on which the app will be running
EXPOSE 3000
# start app
CMD [ "npm", "start" ]