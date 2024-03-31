from django.http import JsonResponse, HttpResponseNotAllowed, HttpResponseBadRequest, HttpResponse
from django.shortcuts import render, get_object_or_404
from .models import Landing, User
from .services import LandingService


def landing_add(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        address = request.POST.get('address')

        landing_service = LandingService()
        success = landing_service.add_landing(name, address)

        return JsonResponse({'success': success})


def landing_delete(request, landing_id):
    if request.method == 'DELETE':
        landing_service = LandingService()
        success = landing_service.delete_landing(landing_id)
        return JsonResponse({'success': success})


def landing_update(request, landing_id):
    if request.method == 'PUT':
        name_new = request.POST.get('name')
        address_new = request.POST.get('address')

        landing_service = LandingService()
        success = landing_service.update_landing(landing_id, name_new, address_new)

        return JsonResponse({'success': success})


def landing_get_all(request):
    if request.method == 'GET':
        landing_service = LandingService()
        success = landing_service.get_all_landing()
        return JsonResponse({'success': success})


def landing_get(request, landing_id):
    if request.method == 'GET':
        landing_service = LandingService()
        success = landing_service.get_landing(landing_id)
        return JsonResponse({'success': success})


def user_add(request):
    if request.method == 'POST':
        user_name = request.POST.get('user_name')
        email = request.POST.get('email')
        password = request.POST.get('password')

        user_service = LandingService()
        success = user_service.add_user(user_name, email, password)

        return JsonResponse({'success': success})

def user_update(request, user_id):
    if request.method == 'PUT':
        name_new = request.POST.get('name')
        email_new = request.POST.get('email')
        password_new = request.POST.get('password')

        user_service = LandingService()
        success = user_service.update_user(user_id, name_new, email_new, password_new)

        return JsonResponse({'success': success})

def user_delete(request, user_id):
    if request.method == 'DELETE':
        user_service = LandingService()
        success = user_service.delete_user(user_id)
        return JsonResponse({'success': success})