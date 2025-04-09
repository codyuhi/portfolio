#!/bin/zsh

docker build --tag 'cody-portfolio' .

docker run -p 80:80 --detach 'cody-portfolio'

open http://localhost:80

# When done, run the commands below:
# Get the id of the docker container that's running
# docker ps
# Kill the docker container
# docker kill <CONTAINER_ID>