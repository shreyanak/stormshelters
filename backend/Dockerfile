FROM python:3.11

RUN apt-get update
RUN apt-get install -y python3
RUN pip3 install --upgrade pip
RUN apt-get install libssl-dev

WORKDIR /backend


COPY requirements.txt ./
RUN pip3 install -r requirements.txt
COPY . ./

EXPOSE 8080
CMD ["gunicorn", "wsgi:app", "-w 2", "-b 0.0.0.0:8080", "-t 30"]