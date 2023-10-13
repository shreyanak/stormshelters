FROM python:3.10-slim

RUN apt-get update
RUN apt-get install -y python3
RUN pip3 install --upgrade pip

WORKDIR /backend


COPY requirements.txt ./
RUN pip3 install -r requirements.txt
COPY . ./