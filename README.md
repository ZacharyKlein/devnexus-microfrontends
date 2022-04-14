# DevNexus - Microfrontends Demo

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
curl -X POST http://localhost:8080/refresh
```
