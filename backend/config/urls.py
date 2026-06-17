from django.contrib import admin
from django.urls import include, path
from django.http import JsonResponse


def health_check(request):
    return JsonResponse({'status': 'ok', 'service': 'anvesh-portfolio-api'})


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/health/', health_check, name='health-check'),
    path('api/', include('portfolio.urls')),
]
