from .views import *
from django.urls import path

urlpatterns = [
   path('landings/', landing_add),
   path('landings/', landing_delete),
   path('landings/', landing_get),
   path('landings/', landing_get_all),
   path('landings/', landing_update),
   path('users/', User_update),
   path('users/', User_add),
   path('users/', User_delete),
]