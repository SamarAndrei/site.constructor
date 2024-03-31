from .controllers import *
from django.urls import path

urlpatterns = [
   path('', landing_add),
   path('<int:land_id/>', landing_delete),
   path('<int:land_id/>', landing_get),
   path('', landing_get_all),
   path('<int:land_id/>', landing_update),
   path('users/<int:user_id/>', user_update),
   path('users/', user_add),
   path('users/<int:user_id/>', user_delete),
]