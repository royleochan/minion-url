FROM python:3.9

WORKDIR /code

COPY ./requirements.txt /code/requirements.txt

RUN pip install --no-cache-dir --upgrade -r /code/requirements.txt

COPY ./app /code/app

COPY ./main.py /code/main.py

# $PORT is automatically supplied by Heroku
CMD python3 main.py $PORT
