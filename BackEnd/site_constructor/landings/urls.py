from .controllers import *
from django.urls import path

urlpatterns = [
   path('add/<str:name>/<str:address>/', landing_add),
   path('delete/<int:landing_id>/', landing_delete),
   path('get/<int:landing_id>/', landing_get),
   path('get/all/', landing_get_all),
   path('update/<int:landing_id>/<str:name_new>/<str:address_new>/', landing_update),
   path('users/<int:user_id>/', user_update),
   path('users/', user_add),
   path('users/<int:user_id>/', user_delete),
]