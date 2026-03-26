from django.urls import path, include
from .views import *

urlpatterns = [
    path('demo/', function1),
    path('signup' , Createaccount)
]