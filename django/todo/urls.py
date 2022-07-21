from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name="home"),
    path('addtask/', views.add_task),
    path('delete/?<str:task_title>/',views.delete, name='delete'),

]