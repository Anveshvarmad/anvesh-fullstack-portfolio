from django.core.management.base import BaseCommand
from portfolio.models import Education, Experience, Profile, Project, SkillCategory


class Command(BaseCommand):
    help = 'Seed portfolio data from Anvesh Dantuluri resume.'

    def handle(self, *args, **options):
        Profile.objects.all().delete()
        Education.objects.all().delete()
        Experience.objects.all().delete()
        Project.objects.all().delete()
        SkillCategory.objects.all().delete()

        Profile.objects.create(
            full_name='Anvesh Dantuluri',
            title='Software Engineer | Backend Systems | AI-Integrated Services',
            location='Edison, NJ',
            email='anveshdantuluri@gmail.com',
            phone='+1 (201) 640-9986',
            linkedin_url='https://www.linkedin.com/in/anvesh-varma-2b0747249',
            github_url='',
            resume_url='/Anvesh_Dantuluri_Resume.pdf',
            availability='Open to Software Engineer, Backend Engineer, AI Systems, and Full-Stack roles.',
            summary=(
                'Software Engineer with 4+ years of experience building backend systems, RESTful APIs, '
                'and AI-integrated services across fintech and e-commerce domains. Strong in Python, Java, '
                'FastAPI, Django, React, cloud infrastructure, database optimization, CI/CD automation, and LLM integrations.'
            ),
        )

        Education.objects.bulk_create([
            Education(
                school='New York University',
                degree='Master of Science, Computer Engineering',
                location='New York, USA',
                start_date='Aug 2024',
                end_date='May 2026',
                coursework=[
                    'Machine Learning',
                    'Deep Learning',
                    'Distributed Systems',
                    'Big Data',
                    'Database Systems',
                    'Computer System Architecture',
                    'Advanced Python for Data Science',
                ],
                sort_order=1,
            )
        ])

        Experience.objects.bulk_create([
            Experience(
                company='JPMorgan Chase & Co.',
                role='Software Engineer',
                location='New York, NY',
                start_date='Dec 2025',
                end_date='May 2026',
                summary='Delivered backend APIs, AI-powered compliance workflows, semantic search, and internal reporting dashboards for enterprise banking use cases.',
                bullets=[
                    'Owned RESTful APIs in Python FastAPI and Node.js serving 100,000+ daily requests with OpenAI-powered compliance monitoring and predictive analytics.',
                    'Architected PostgreSQL, MongoDB, and ChromaDB persistence layers, reducing query latency by 30% and enabling semantic search over 10M+ financial records.',
                    'Led Docker and Kubernetes deployment strategy for 8 AWS-hosted microservices, reducing deployment time by 45% and maintaining 99.9% uptime.',
                    'Designed React dashboards for 500+ internal users, improving data visualization speed by 40% and eliminating manual reporting workflows.',
                    'Established CI/CD and TDD practices with Git, Bitbucket, and JIRA, reducing production defects by 30% across Agile sprints.',
                ],
                tech_stack=['Python', 'FastAPI', 'Node.js', 'React.js', 'PostgreSQL', 'MongoDB', 'ChromaDB', 'Docker', 'Kubernetes', 'AWS', 'OpenAI'],
                sort_order=1,
            ),
            Experience(
                company='CodeNest Solutions',
                role='Backend Python Developer',
                location='Hyderabad, India',
                start_date='Oct 2021',
                end_date='Nov 2023',
                summary='Built scalable Python backend services, optimized databases, improved deployments, and supported cross-functional product delivery.',
                bullets=[
                    'Developed Python backend services for multi-tenant SaaS platforms and enterprise integrations, improving API response time by 35%.',
                    'Normalized PostgreSQL and MySQL schemas and tuned SQL queries, reducing retrieval latency across high-traffic production environments.',
                    'Migrated backend microservices to Docker and optimized AWS allocation, improving deployment efficiency by 45% and lowering infrastructure costs by 30%.',
                    'Collaborated with 10+ stakeholders across product, QA, and operations to gather requirements, resolve defects, and ship business-aligned features.',
                    'Drove Agile sprint delivery with Git, GitHub, JIRA, and TDD practices, reducing recurring integration defects by 25%.',
                ],
                tech_stack=['Python', 'Django', 'FastAPI', 'PostgreSQL', 'MySQL', 'Docker', 'AWS', 'GitHub', 'JIRA', 'TDD'],
                sort_order=2,
            ),
            Experience(
                company='CodeNest Solutions',
                role='Python Developer',
                location='Hyderabad, India',
                start_date='May 2020',
                end_date='Sep 2021',
                summary='Implemented Django backend applications for e-commerce workflows, authentication, order data, and third-party integrations.',
                bullets=[
                    'Built Django applications for e-commerce workflows including payment gateway integrations, product management, and role-based authentication.',
                    'Designed PostgreSQL and MySQL schemas for consistent, low-latency transaction processing across high-volume order data.',
                    'Engineered RESTful API endpoints with validation and error-handling patterns to protect data integrity and reliability.',
                    'Standardized Docker environments and AWS deployments under TDD and Git-based version control.',
                ],
                tech_stack=['Python', 'Django', 'PostgreSQL', 'MySQL', 'REST APIs', 'Docker', 'AWS', 'Git'],
                sort_order=3,
            ),
        ])

        Project.objects.bulk_create([
            Project(
                title='Enterprise Inventory & Order Management System',
                subtitle='Microservices platform for order, inventory, and client-driven data access',
                description='A Java Spring Boot backend platform designed around microservices, GraphQL, caching, and production-style deployment practices.',
                bullets=[
                    'Designed a Spring Boot microservices platform with GraphQL across 5 services, reducing over-fetching by 60% versus REST endpoints.',
                    'Architected PostgreSQL indexes and Redis caching to achieve sub-80ms p95 latency under 10,000+ concurrent requests.',
                    'Deployed services using Docker/Kubernetes with Jenkins CI and 92% test coverage.',
                ],
                tech_stack=['Java', 'Spring Boot', 'GraphQL', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes', 'AWS', 'Jenkins'],
                featured=True,
                sort_order=1,
            ),
            Project(
                title='E-Commerce Backend Platform',
                subtitle='Production-style backend for payments, authentication, product, and order workflows',
                description='A Django backend platform built for high-volume e-commerce transaction flows and optimized database access.',
                bullets=[
                    'Owned backend architecture for 5,000+ daily transactions, including payment gateways, RBAC, and product management services.',
                    'Optimized PostgreSQL execution plans and introduced Redis caching, reducing retrieval latency by 30%.',
                    'Supported a 3x traffic increase without requiring infrastructure changes.',
                ],
                tech_stack=['Python', 'Django', 'PostgreSQL', 'Redis', 'Docker', 'AWS'],
                featured=True,
                sort_order=2,
            ),
            Project(
                title='AI Compliance Semantic Search Service',
                subtitle='LLM + vector database powered knowledge retrieval concept',
                description='A portfolio-grade extension of enterprise compliance search patterns using embeddings, metadata filtering, and auditable API responses.',
                bullets=[
                    'Modeled financial records into embeddings and metadata filters to support semantic retrieval through a FastAPI service.',
                    'Used ChromaDB-style vector search patterns with PostgreSQL-backed structured records for explainable search workflows.',
                    'Designed API responses with traceable evidence fields for internal review and dashboard consumption.',
                ],
                tech_stack=['Python', 'FastAPI', 'OpenAI APIs', 'ChromaDB', 'PostgreSQL', 'React.js'],
                featured=False,
                sort_order=3,
            ),
        ])

        SkillCategory.objects.bulk_create([
            SkillCategory(name='Languages', skills=['Python', 'Java', 'JavaScript', 'TypeScript', 'SQL', 'C'], sort_order=1),
            SkillCategory(name='Backend & APIs', skills=['Django', 'FastAPI', 'Flask', 'Node.js', 'REST APIs', 'GraphQL'], sort_order=2),
            SkillCategory(name='Frontend', skills=['React.js', 'AngularJS', 'HTML5', 'CSS3', 'Bootstrap'], sort_order=3),
            SkillCategory(name='Databases', skills=['PostgreSQL', 'MySQL', 'Microsoft SQL Server', 'SQLite', 'MongoDB', 'ChromaDB'], sort_order=4),
            SkillCategory(name='Cloud & DevOps', skills=['AWS EC2', 'AWS S3', 'AWS RDS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'CI/CD'], sort_order=5),
            SkillCategory(name='AI & LLM Integration', skills=['OpenAI APIs', 'Claude', 'Prompt Engineering', 'RAG', 'Embeddings', 'Vector Databases'], sort_order=6),
            SkillCategory(name='Practices & Tools', skills=['Git', 'GitHub', 'Bitbucket', 'JIRA', 'Confluence', 'Agile/Scrum', 'Test-Driven Development'], sort_order=7),
        ])

        self.stdout.write(self.style.SUCCESS('Portfolio data seeded successfully.'))
