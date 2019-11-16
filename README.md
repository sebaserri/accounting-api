# Accounting-api

A REST API for Accounting Notebook using Moongose, Node.js, Express and Docker Compose, Supertest and artillery.io

## Install

```bash
npm install
```

## Run

```bash
node index
```

Runs on port 3001: http://localhost:3001

## Usage

Build Docker

```bash
docker-compose build
```

Run Docker

```bash
docker-compose up
```

## Endpoints

### Fetch all transactions
Method: GET - URL: /api/transaction

### Creates a transaction 
Method: POST - URL: /api/transaction - Payload: 
```bash
{
	"type": "credit",
	"amount": "150"
}
```

### Get a transaction by Id
Method: GET - URL: /api/transaction/f54580e3-0fd4-4923-bc06-e9383257533b


Import file "Accounting API.postman_collection.json" to run the test on Postman.

## Supertest

Run:

```bash
npm install
```

## Artillery

Source: https://artillery.io/

Install:

```bash
npm install -g artillery
```

Runing the script accouting.yml

```bash
artillery run accouting.yml
```
Target: http://localhost:3001/api/transaction


Target (Running on Docker): http://0.0.0.0:3001/api/transaction
