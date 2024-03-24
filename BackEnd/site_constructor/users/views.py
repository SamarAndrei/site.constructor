from django.shortcuts import render
from .models import Users
from django.http import HttpResponse

def User_add(request):
    user_name = input()
    email = input()
    password = input()
    User = Users(name = user_name, email = email, password = password)
    User.save()

def User_update(request):
    id = int(input())
    user = Users.objects.get(pk = id)
    name_new = input()
    email_new = input()
    password_new = input()
    if (name_new != ""):
        user.name = name_new
    if (email_new != ""):
        user.email = email_new
    if (password_new != ""):
        user.password = password_new


def User_delete(request):
    id = int(input())
    user = Users.objects.get(pk = id)
    user.delete()