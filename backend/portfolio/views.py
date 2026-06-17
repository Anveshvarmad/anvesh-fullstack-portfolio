from rest_framework import status, viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import ContactMessage, Education, Experience, Profile, Project, SkillCategory
from .serializers import (
    ContactMessageSerializer,
    EducationSerializer,
    ExperienceSerializer,
    ProfileSerializer,
    ProjectSerializer,
    SkillCategorySerializer,
)


class ProfileViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer


class EducationViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Education.objects.all()
    serializer_class = EducationSerializer


class ExperienceViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Experience.objects.all()
    serializer_class = ExperienceSerializer


class ProjectViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer


class SkillCategoryViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = SkillCategory.objects.all()
    serializer_class = SkillCategorySerializer


@api_view(['GET'])
def portfolio_snapshot(request):
    profile = Profile.objects.first()
    data = {
        'profile': ProfileSerializer(profile).data if profile else None,
        'education': EducationSerializer(Education.objects.all(), many=True).data,
        'experience': ExperienceSerializer(Experience.objects.all(), many=True).data,
        'projects': ProjectSerializer(Project.objects.all(), many=True).data,
        'skills': SkillCategorySerializer(SkillCategory.objects.all(), many=True).data,
    }
    return Response(data)


@api_view(['POST'])
def contact(request):
    serializer = ContactMessageSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(
            {'message': 'Thanks for reaching out. Your message was saved successfully.'},
            status=status.HTTP_201_CREATED,
        )
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
