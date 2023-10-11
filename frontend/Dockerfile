# ==== CONFIGURE =====
FROM node:alpine 
# set working directory to /frontend inside the container
WORKDIR /frontend
# ENV PATH /app/node_modules/.bin:$PATH

# copy app files
COPY frontend ./

# ==== BUILD =====
# install dependencies
RUN npm install
RUN CI=false npm run build

# ==== RUN =======
# expose the port on which the app will be running
EXPOSE 3000
# start app
CMD [ "npm", "start" ]