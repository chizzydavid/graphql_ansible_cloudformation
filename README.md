# graphql-docker-cloudformation

## Summary ##

* Dockerized GraphQL application deployed on AWS using CloudFormation
* Access the playground at http://localhost:{port}/graphql

## Technology Stack ##

* CloudFormation
* Docker
* Jest
* NodeJS
* Typescript
* MongoDB
* TypeGraphQL
* Mongoose
* TypeDI (Dependency Injection Container)


## Setting Up ##

* Create a .env file at the root level of the project directory. Keys must match those in .env.template
```
DB_URL=
```
* Install all the dependencies
```sh
$ npm i
```
* Start the GraphQL server
```sh
$ npm run dev
```
