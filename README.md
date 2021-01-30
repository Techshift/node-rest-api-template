Node REST API Template

## Installation

```
npm install
```

Create a .env file at the project and fill the following:
```
PORT=number
MONGO_URL=string (required)
```

## Run

A development server
```
npm run serve
```

A production server
```
npm run build
npm start
```

With docker
```
docker build --tag techshiftltd/node-rest-api-template:latest .
docker run -p 3000:3000 techshiftltd/node-rest-api-template:latest
```

## Todo

- [x] Express
- [x] Logger
- [x] Eslint
- [x] Prettier
- [ ] MongoDB
- [x] Docker
- [ ] Jest tests
- [ ] Jest e2e tests
- [ ] Sentry
- [ ] Datadog
- [ ] CICD
- [ ] SQL
- [ ] Redis
- [ ] Kafka
- [ ] gRPC
- [ ] Swagger
- [ ] CHANGELOG
