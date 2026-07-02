# Anvesh Full-Stack Portfolio

A dynamic full-stack developer portfolio built with **React, TypeScript, Django, PostgreSQL, Docker, Render, and Vercel**.

## Live Demo

Portfolio:
https://anvesh-fullstack-portfolio.vercel.app/

Backend API:
https://anvesh-fullstack-portfolio-1.onrender.com/api

## Tech Stack

**Frontend**

* React
* TypeScript
* Vite
* React Router
* CSS animations
* Parallax effects

**Backend**

* Python
* Django
* Django REST Framework
* Gunicorn
* WhiteNoise

**Database & Deployment**

* PostgreSQL
* Docker
* Render
* Vercel
* GitHub

## Features

* Animated cinematic home page
* Multi-page portfolio layout
* About, Education, Experience, Projects, Skills, and Contact pages
* Dynamic portfolio data from Django API
* Rotating technical skills globe
* Parallax background effects
* GitHub and LinkedIn profile links
* Responsive design for desktop and mobile

## Project Structure

```text
anvesh-fullstack-portfolio/
├── backend/
│   ├── config/
│   ├── portfolio/
│   ├── Dockerfile
│   ├── start.sh
│   ├── requirements.txt
│   └── manage.py
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── styles.css
│   ├── public/
│   └── package.json
│
├── docker-compose.yml
└── README.md
```

## Local Setup

Clone the repository:

```bash
git clone https://github.com/Anveshvarmad/anvesh-fullstack-portfolio.git
cd anvesh-fullstack-portfolio
```

Run with Docker:

```bash
docker compose up --build
```

Local URLs:

```text
Frontend: http://localhost:5173
Backend:  http://localhost:8000/api/snapshot/
Admin:    http://localhost:8000/admin/
```

Stop containers:

```bash
docker compose down
```

## Backend API

Main API endpoints:

```text
/api/health/
/api/snapshot/
```

The frontend uses `/api/snapshot/` to load portfolio data.

## Deployment

Frontend is deployed on **Vercel**.

Backend and PostgreSQL database are deployed on **Render**.

Frontend environment variable:

```text
VITE_API_BASE_URL=https://anvesh-fullstack-portfolio-1.onrender.com/api
```

Backend environment variables:

```text
DEBUG=False
SECRET_KEY=your-secret-key
DATABASE_URL=your-postgres-url
ALLOWED_HOSTS=anvesh-fullstack-portfolio-1.onrender.com
CORS_ALLOWED_ORIGINS=https://anvesh-fullstack-portfolio.vercel.app
CSRF_TRUSTED_ORIGINS=https://anvesh-fullstack-portfolio.vercel.app
```

## Author

**Anvesh Varma Dantuluri**

* Portfolio: https://anvesh-fullstack-portfolio.vercel.app/
* GitHub: https://github.com/Anveshvarmad
* LinkedIn: https://www.linkedin.com/in/anvesh-varma-2b0747249
