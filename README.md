# Express & Sequelize Assignment

## Project Description
A simple backend application built with Express and Sequelize that demonstrates models, relationships, and CRUD operations using Authors and Books.

## Setup Instructions
1. Clone the repository
2. Run `npm install`
3. Run `npx sequelize-cli db:migrate`
4. Run `node app.js`

## How to Run
```bash
node app.js
```
Server will start on http://localhost:3000

## Available APIs

### Authors
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /authors | Get all authors |
| GET | /authors/:id | Get one author |
| POST | /authors | Create author |
| PUT | /authors/:id | Update author |
| DELETE | /authors/:id | Delete author |

### Books
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /books | Get all books |
| GET | /books/:id | Get one book |
| POST | /books | Create book |
| PUT | /books/:id | Update book |
| DELETE | /books/:id | Delete book |

## Sample Requests

### Create Author
POST /authors
```json
{
  "name": "Adam Ghanem",
  "bio": "CAP Student"
}
```

### Create Book
POST /books
```json
{
  "title": "My First Book",
  "genre": "Education",
  "AuthorId": 1
}
```