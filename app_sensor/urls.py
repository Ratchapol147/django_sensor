from django.urls import path
from django_distill import distill_path
from . import views

urlpatterns = [
      distill_path('', views.fertilizer, name='fertilizer'),
      distill_path('Dashboardplant/',views.Dashboardplant, name='Dashboardplant'),
      distill_path('plant1/',views.plant1, name='plant1'),
      distill_path('plant2/',views.plant2, name='plant2'),
      distill_path('plant3/',views.plant3,name='plant3'),
      distill_path('plant4/',views.plant4,name='plant4'),
      distill_path('plant5/',views.plant5,name='plant5'),
]