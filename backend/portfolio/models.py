from django.db import models


class Profile(models.Model):
    full_name = models.CharField(max_length=120)
    title = models.CharField(max_length=180)
    location = models.CharField(max_length=120, blank=True)
    email = models.EmailField()
    phone = models.CharField(max_length=40, blank=True)
    linkedin_url = models.URLField(blank=True)
    github_url = models.URLField(blank=True)
    resume_url = models.CharField(max_length=250, default='/Anvesh_Dantuluri_Resume.pdf')
    summary = models.TextField()
    availability = models.CharField(max_length=180, blank=True)

    def __str__(self):
        return self.full_name


class Education(models.Model):
    school = models.CharField(max_length=180)
    degree = models.CharField(max_length=180)
    location = models.CharField(max_length=120, blank=True)
    start_date = models.CharField(max_length=60)
    end_date = models.CharField(max_length=60)
    coursework = models.JSONField(default=list, blank=True)
    sort_order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ['sort_order', 'school']

    def __str__(self):
        return f'{self.degree} — {self.school}'


class Experience(models.Model):
    company = models.CharField(max_length=180)
    role = models.CharField(max_length=180)
    location = models.CharField(max_length=120, blank=True)
    start_date = models.CharField(max_length=60)
    end_date = models.CharField(max_length=60)
    summary = models.TextField(blank=True)
    bullets = models.JSONField(default=list)
    tech_stack = models.JSONField(default=list, blank=True)
    sort_order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ['sort_order', 'company']

    def __str__(self):
        return f'{self.role} — {self.company}'


class Project(models.Model):
    title = models.CharField(max_length=180)
    subtitle = models.CharField(max_length=220, blank=True)
    description = models.TextField()
    bullets = models.JSONField(default=list, blank=True)
    tech_stack = models.JSONField(default=list)
    github_url = models.URLField(blank=True)
    live_url = models.URLField(blank=True)
    featured = models.BooleanField(default=False)
    sort_order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ['sort_order', 'title']

    def __str__(self):
        return self.title


class SkillCategory(models.Model):
    name = models.CharField(max_length=120)
    skills = models.JSONField(default=list)
    sort_order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ['sort_order', 'name']
        verbose_name_plural = 'Skill categories'

    def __str__(self):
        return self.name


class ContactMessage(models.Model):
    name = models.CharField(max_length=120)
    email = models.EmailField()
    subject = models.CharField(max_length=180)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    is_read = models.BooleanField(default=False)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f'{self.name} — {self.subject}'
