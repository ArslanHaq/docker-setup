<!-- create docker image t=tag or name , .=relative path where the Dockerfile exist -->

> docker build -t myapp2 .
> \*--images of dockers

> Docker Images

---run container

> docker run --name myapp_c1(container name with u want to start) myapp(image name)

run container if we expose the port from the container

> docker run --name myapp_c1 -p 4000(localhostPort):4000(dockerPort) myapp

to view running container

> docker ps

to view all containers

> docker ps -a

to start an existing container

> docker start myapp_c1

delete docker images

> docker image rm 'image name' -f(if you want to delete by force)

delete everything

> docker system prune -a

to keep local directly and docker directory linked directly we need to

> docker run --name myapp_c_nodemon -p 4000:4000 --rm -v E:\Arslan's Drive\docker crash course\docker-crash-course-lesson-5\api:/app -v /app/node_modules myapp:nodemon

to run docker-compose

> docker-compose up

to remove or down docker-compose

> docker-compose down --rmi all -v
