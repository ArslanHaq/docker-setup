# pull docker image
FROM node:17-alpine

RUN npm install -g nodemon

#specify working directory which is root/app
WORKDIR /app

COPY package.json .

#run the commands which is needed, install dependencies
RUN npm install

#copy data from source to destination .is root
COPY . .


#specify the port in which this container is running or running
EXPOSE 4000

#specify the command which docker container runs
CMD [ "npm", "run" , "dev" ]
