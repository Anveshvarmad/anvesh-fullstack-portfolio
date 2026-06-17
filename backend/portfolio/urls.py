from django.urls import include, path
from rest_framework.routers import DefaultRouter

from .views import (
    EducationViewSet,
    ExperienceViewSet,
    ProfileViewSet,
    ProjectViewSet,
    SkillCategoryViewSet,
    contact,
    portfolio_snapshot,
)

router = DefaultRouter()
router.register('profile', ProfileViewSet, basename='profile')
router.register('education', EducationViewSet, basename='education')
router.register('experience', ExperienceViewSet, basename='experience')
router.register('projects', ProjectViewSet, basename='projects')
router.register('skills', SkillCategoryViewSet, basename='skills')

urlpatterns = [
    path('', include(router.urls)),
    path('snapshot/', portfolio_snapshot, name='portfolio-snapshot'),
    path('contact/', contact, name='contact'),
]
