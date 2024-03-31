from django.http import JsonResponse, HttpResponseNotAllowed, HttpResponseBadRequest, HttpResponse
from django.shortcuts import render, get_object_or_404
from .models import Landing, User
from .services import LandingService


def landing_add(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        address = request.POST.get('address')
        n = Landing(land_name=name, land_address=address)
        n.save()
        return JsonResponse({'message': 'Landing added successfully'})
    return HttpResponseNotAllowed(['POST'])


def landing_delete(request, land_id):
    if request.method == 'DELETE':
        n = get_object_or_404(Landing, pk=land_id)
        n.delete()
        return HttpResponse('Landing deleted successfully')
    else:
        return HttpResponseNotAllowed(['DELETE'])


def landing_update(request, land_id):
    if request.method == 'PUT':
        n = get_object_or_404(Landing, pk=land_id)
        land_name_new = request.POST.get('land_name', '')
        land_address_new = request.POST.get('land_address', '')

        if land_name_new != "":
            n.land_name = land_name_new
            n.save()
        if land_address_new != "":
            n.land_address = land_address_new
            n.save()

        return JsonResponse({'message': 'Landing updated successfully'})
    else:
        return HttpResponseNotAllowed(['PUT'])


def landing_get_all(request):
    if request.method == 'GET':
        landings = Landing.objects.all()
        landing_list = [{'land_name': landing.land_name, 'land_address': landing.land_address} for landing in landings]
        return JsonResponse(landing_list, safe=False)
    else:
        return HttpResponseNotAllowed(['GET'])


def landing_get(request, land_id):
    if request.method == 'GET':
        n = get_object_or_404(Landing, pk=land_id)
        return render(request, 'landing.html', {'landing': n})
    else:
        return HttpResponseNotAllowed(['GET'])


def user_add(request):
    if request.method == 'POST':
        user_name = request.POST.get('user_name', '')
        email = request.POST.get('email', '')
        password = request.POST.get('password', '')

        user_service = LandingService()
        success = user_service.add_user(user_name, email, password)

        return JsonResponse({'success': success})

def user_update(request, user_id):
    if request.method == 'PUT':
        name_new = request.POST.get('name', '')
        email_new = request.POST.get('email', '')
        password_new = request.POST.get('password', '')

        user_service = LandingService()
        success = user_service.update_user(user_id, name_new, email_new, password_new)

        return JsonResponse({'success': success})

def user_delete(request, user_id):
    if request.method == 'DELETE':
        user_service = LandingService()
        success = user_service.delete_user(user_id)
        return JsonResponse({'success': success})