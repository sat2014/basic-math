# The Node version that we'll be running for our version of React.
# You may have to search the Node directory for a version that fits
# the version of React you're using.
#FROM node:8.9-alpine

# Create a work directory and copy over our dependency manifest files.
#RUN mkdir /app
#WORKDIR /app
#COPY /src /app/src
#COPY build /app/build
#COPY ["package.json", "package-lock.json*", "./"]

# If you're using yarn:
#  yarn build
#RUN npm install --production --silent && mv node_modules ../
#RUN npm install -g serve

# Expose PORT 80 on our virtual machine so we can run our server
#EXPOSE 80

# FROM nginx:alpine
# RUN mkdir /app
# WORKDIR /app
# COPY /build /usr/share/nginx/html
# EXPOSE 80
#CMD [“nginx”, “-g”, “daemon off;”]

FROM nginx:1.15.2-alpine
COPY ./build /var/www
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
ENTRYPOINT ["nginx","-g","daemon off;"]

