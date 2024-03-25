from .views import *
from django.urls import path

urlpatterns = [
   path('User_update/', User_update),
   path('User_add/', User_add),
   path('User_delete/', User_delete),
]