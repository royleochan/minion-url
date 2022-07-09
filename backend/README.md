# Minion Url Backend

This project is written using FastAPI.

## Prerequisites
### Developing
- Python3
- Running postgres instance

### Releasing
- Docker
- Heroku

## Setup on local

1. Create .env at root according to `env_sample.txt` specified

2. Create and activate virtual env
```
python3 -m venv venv

source venv/bin/activate
```

3. Install dependencies
```
pip install - r requirements.txt
```

4. Run application on port 8000
```
python3 main.py 8000
```

## Deployment to Heroku with heroku cli and docker

Build Image
```
docker build -t registry.heroku.com/minion-url/web .
```

Push Image to Heroku Container Registry
```
docker push registry.heroku.com/minion-url/web
```

Release Image
```
heroku container:release -a minion-url web
```
