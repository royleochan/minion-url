# Minion Url Frontend

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Prerequisites

### Developing
- Node

### Releasing
- Docker
- Heroku

## Setup on local

1. Create .env.local at root according to `env_sample.txt` specified

2. Install dependencies
```
npm i
```

3. Run application
```
npm start
```


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Deployment to Heroku with heroku cli and docker

Build Image
```
docker build -t registry.heroku.com/minion-url-web/web .
```

Push Image to Heroku Container Registry
```
docker push registry.heroku.com/minion-url-web/web
```

Release Image
```
heroku container:release -a minion-url-web web
```
