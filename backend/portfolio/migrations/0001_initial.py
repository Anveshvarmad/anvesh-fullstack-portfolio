# Generated manually for the local portfolio starter project.

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name='ContactMessage',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=120)),
                ('email', models.EmailField(max_length=254)),
                ('subject', models.CharField(max_length=180)),
                ('message', models.TextField()),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('is_read', models.BooleanField(default=False)),
            ],
            options={'ordering': ['-created_at']},
        ),
        migrations.CreateModel(
            name='Education',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('school', models.CharField(max_length=180)),
                ('degree', models.CharField(max_length=180)),
                ('location', models.CharField(blank=True, max_length=120)),
                ('start_date', models.CharField(max_length=60)),
                ('end_date', models.CharField(max_length=60)),
                ('coursework', models.JSONField(blank=True, default=list)),
                ('sort_order', models.PositiveIntegerField(default=0)),
            ],
            options={'ordering': ['sort_order', 'school']},
        ),
        migrations.CreateModel(
            name='Experience',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('company', models.CharField(max_length=180)),
                ('role', models.CharField(max_length=180)),
                ('location', models.CharField(blank=True, max_length=120)),
                ('start_date', models.CharField(max_length=60)),
                ('end_date', models.CharField(max_length=60)),
                ('summary', models.TextField(blank=True)),
                ('bullets', models.JSONField(default=list)),
                ('tech_stack', models.JSONField(blank=True, default=list)),
                ('sort_order', models.PositiveIntegerField(default=0)),
            ],
            options={'ordering': ['sort_order', 'company']},
        ),
        migrations.CreateModel(
            name='Profile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('full_name', models.CharField(max_length=120)),
                ('title', models.CharField(max_length=180)),
                ('location', models.CharField(blank=True, max_length=120)),
                ('email', models.EmailField(max_length=254)),
                ('phone', models.CharField(blank=True, max_length=40)),
                ('linkedin_url', models.URLField(blank=True)),
                ('github_url', models.URLField(blank=True)),
                ('resume_url', models.CharField(default='/Anvesh_Dantuluri_Resume.pdf', max_length=250)),
                ('summary', models.TextField()),
                ('availability', models.CharField(blank=True, max_length=180)),
            ],
        ),
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=180)),
                ('subtitle', models.CharField(blank=True, max_length=220)),
                ('description', models.TextField()),
                ('bullets', models.JSONField(blank=True, default=list)),
                ('tech_stack', models.JSONField(default=list)),
                ('github_url', models.URLField(blank=True)),
                ('live_url', models.URLField(blank=True)),
                ('featured', models.BooleanField(default=False)),
                ('sort_order', models.PositiveIntegerField(default=0)),
            ],
            options={'ordering': ['sort_order', 'title']},
        ),
        migrations.CreateModel(
            name='SkillCategory',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=120)),
                ('skills', models.JSONField(default=list)),
                ('sort_order', models.PositiveIntegerField(default=0)),
            ],
            options={'verbose_name_plural': 'Skill categories', 'ordering': ['sort_order', 'name']},
        ),
    ]
