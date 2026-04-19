# Express & Sequelize Assignment

## Project Description
A simple backend application built with Express and Sequelize that demonstrates models, relationships, and CRUD operations using Students and Courses.

**Student** has many **Courses** (one-to-many relationship)

## Developer
- Name: Adam Ghanem
- Major: CAP

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

### Students
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /students | Get all students |
| GET | /students/:id | Get one student |
| POST | /students | Create student |
| PUT | /students/:id | Update student |
| DELETE | /students/:id | Delete student |

### Courses
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /courses | Get all courses |
| GET | /courses/:id | Get one course |
| POST | /courses | Create course |
| PUT | /courses/:id | Update course |
| DELETE | /courses/:id | Delete course |

## Sample Requests

### Create Student
POST /students
```json
{
  "name": "Adam Ghanem",
  "major": "CAP"
}
```

### Create Course
POST /courses
```json
{
  "title": "Data Structures",
  "credits": 3,
  "StudentId": 1
}
```