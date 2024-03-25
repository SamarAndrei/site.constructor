from .views import *
from django.urls import path

urlpatterns = [
   path('landing_add/', landing_add),
   path('landing_delete/', landing_delete),
   path('landing_get/', landing_get),
   path('landing_get_all/', landing_get_all),
   path('landing_update/', landing_update)
]