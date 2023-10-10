FROM python:3.10-slim
WORKDIR /backend
COPY backend/requirements.txt ./
RUN pip3 install --upgrade pip
RUN pip3 install -r requirements.txt
COPY backend ./
EXPOSE 5000
CMD python3 app.py