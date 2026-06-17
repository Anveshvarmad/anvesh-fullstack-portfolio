# Anvesh Dantuluri — Dynamic Portfolio

A full-stack portfolio built with:

- **Backend:** Django + Django REST Framework + SQLite
- **Frontend:** React + TypeScript + Vite + React Router
- **Dynamic data:** About, education, experience, projects, and skills are served from Django API endpoints
- **Contact form:** Saves messages into the Django database and admin panel

## Project structure

```text
anvesh-fullstack-portfolio/
├── backend/
│   ├── config/                  # Django project settings
│   ├── portfolio/               # Django app: models, serializers, views, API routes
│   ├── manage.py
│   └── requirements.txt
├── frontend/
│   ├── public/                  # Resume PDF
│   ├── src/
│   │   ├── api/                 # API client
│   │   ├── components/          # Shared UI components
│   │   ├── pages/               # 7 portfolio pages
│   │   ├── App.tsx
│   │   └── styles.css
│   └── package.json
└── scripts/
    └── start-dev.sh             # Optional helper to run both apps
```

## Pages included

1. Home
2. About Me
3. Education
4. Work Experience
5. Projects
6. Skills
7. Contact

## Requirements

Install these first:

- Python 3.12+
- Node.js 20.19+ or 22.12+
- npm

## Local setup — backend

Open Terminal 1:

```bash
cd anvesh-fullstack-portfolio/backend
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python manage.py migrate
python manage.py seed_portfolio
python manage.py createsuperuser
python manage.py runserver 127.0.0.1:8000
```

Backend URLs:

```text
http://127.0.0.1:8000/api/health/
http://127.0.0.1:8000/api/snapshot/
http://127.0.0.1:8000/admin/
```

## Local setup — frontend

Open Terminal 2:

```bash
cd anvesh-fullstack-portfolio/frontend
npm install
cp .env.example .env
npm run dev
```

Frontend URL:

```text
http://localhost:5173
```

## Optional: run both with one command

After completing backend and frontend setup once:

```bash
cd anvesh-fullstack-portfolio
./scripts/start-dev.sh
```

## How to edit portfolio content

You have two options:

### Option 1 — Edit from Django Admin

1. Run the backend.
2. Open `http://127.0.0.1:8000/admin/`.
3. Log in using the superuser you created.
4. Edit Profile, Education, Experience, Projects, and Skills.

### Option 2 — Edit seed data

Edit:

```text
backend/portfolio/management/commands/seed_portfolio.py
```

Then rerun:

```bash
python manage.py seed_portfolio
```

## Main backend files

```text
backend/portfolio/models.py
backend/portfolio/serializers.py
backend/portfolio/views.py
backend/portfolio/urls.py
backend/portfolio/admin.py
```

## Main frontend files

```text
frontend/src/App.tsx
frontend/src/api/client.ts
frontend/src/pages/HomePage.tsx
frontend/src/pages/AboutPage.tsx
frontend/src/pages/EducationPage.tsx
frontend/src/pages/ExperiencePage.tsx
frontend/src/pages/ProjectsPage.tsx
frontend/src/pages/SkillsPage.tsx
frontend/src/pages/ContactPage.tsx
frontend/src/styles.css
```

## API endpoints

```text
GET  /api/snapshot/
GET  /api/profile/
GET  /api/education/
GET  /api/experience/
GET  /api/projects/
GET  /api/skills/
POST /api/contact/
```

## Production notes for later

For deployment, use PostgreSQL instead of SQLite, configure environment variables, build the React app, and serve it through a platform such as Render, Railway, Fly.io, AWS, or Vercel + a separate Django API host.
