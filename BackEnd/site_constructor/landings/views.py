from django.shortcuts import render
from .models import Landing
from django.http import HttpResponse

def landing_add(request):
    name = input()
    address = input()
    n = Landing(land_name = name, land_address = address)
    n.save()
    return HttpResponse('новый лендинг')

def landing_delete(request):
    id = int(input())
    n = Landing.objects.get(pk = id)
    n.delete()

def landing_update(request):
    id = int(input())
    n = Landing.objects.get(pk = id)
    land_name_new = input()
    land_address_new = input()
    if (land_name_new != ""):
        n.land_name = land_name_new
    if (land_address_new != ""):
        n.land_address = land_address_new

def landing_get_all(request):
    Landing.objects.all()

def landing_get(request):
    id = int(input())
    Landing.objects.get(pk = id)





