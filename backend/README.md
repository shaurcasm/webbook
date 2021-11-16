

# Start commands for docker-compose file
Builds, (re)creates, starts, and attaches to containers for a service:
`docker-compose up`

# Start command for Docker
Build your image:
`docker build <your path> -t <<username>/<project-name>>`

Run:
`docker run -p 8080:<server-port> <<username>/<project-name>>`

Basic Docker Commands:
List your docker images: `docker images`
List your running containers: `docker ps`
Kill a running container: `docker kill <id of container from docker ps(first 3 letters)>`