from .views import *
from django.urls import path

urlpatterns = [
    path('register/', user_register),
    path('login/', uset_login),
]