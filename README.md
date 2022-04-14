# DevNexus - Microfrontends Demo

This application demonstrates a UI container (`micro-container`) composed of two microfrontends (`micro-app1` and `micro-app2`), backed by a Micronaut application (`backend`) exposing two separate API endpoints that are consumed by each respective SPA. 

To run, start the two `micro-app*` applications by running the following command in each directory:

```
cd micro-app1
yarn webpack serve
```

Then start the `micro-container`:


```
cd micro-container
yarn webpack serve
```

Start the backend:

```
cd backend
./gradlew run
```

Once everything is running, browse to http://localhost:8000

To refresh the weather forecast, run the following command:

```
curl -X POST http://localhost:8082/refresh
```

## Micronaut SPA Demo

SPA/Micronaut demo (w/o microfrontends)

https://github.com/ZacharyKlein/micronaut-spa-webinar
