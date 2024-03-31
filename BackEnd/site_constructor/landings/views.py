from django.http import JsonResponse, HttpResponseNotAllowed, HttpResponseBadRequest, HttpResponse
from django.shortcuts import render, get_object_or_404
from .models import Landing, User


def landing_add(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        address = request.POST.get('address')
        n = Landing(land_name=name, land_address=address)
        n.save()
        return JsonResponse({'message': 'Landing added successfully'})
    return HttpResponseNotAllowed(['POST'])


def landing_delete(request, id):
    if request.method == 'DELETE':
        n = get_object_or_404(Landing, pk=id)
        n.delete()
        return HttpResponse('Landing deleted successfully')
    else:
        return HttpResponseNotAllowed(['DELETE'])


def landing_update(request, id):
    if request.method == 'PUT':
        n = get_object_or_404(Landing, pk=id)
        land_name_new = request.POST.get('land_name', '')
        land_address_new = request.POST.get('land_address', '')

        if land_name_new != "":
            n.land_name = land_name_new
        if land_address_new != "":
            n.land_address = land_address_new
        n.save()

        return JsonResponse({'message': 'Landing updated successfully'})
    else:
        return HttpResponseNotAllowed(['PUT'])


def landing_get_all(request):
    if request.method == 'GET':
        landings = Landing.objects.all()
        landing_list = [{'land_name': l.land_name, 'land_address': l.land_address} for l in landings]
        return JsonResponse(landing_list, safe=False)
    else:
        return HttpResponseNotAllowed(['GET'])


def landing_get(request, id):
    if request.method == 'GET':
        n = get_object_or_404(Landing, pk=id)
        return render(request, 'landing.html', {'landing': n})
    else:
        return HttpResponseNotAllowed(['GET'])


def user_add(request):
    if request.method == 'POST':
        user_name = request.POST.get('user_name', '')
        email = request.POST.get('email', '')
        password = request.POST.get('password', '')

        user = User(name=user_name, email=email, password=password)
        user.save()

        return JsonResponse({'message': 'User added successfully'})
    else:
        return HttpResponseNotAllowed(['POST'])


def user_update(request, id):
    if request.method == 'PUT':
        user = get_object_or_404(User, pk=id)
        name_new = request.POST.get('name', '')
        email_new = request.POST.get('email', '')
        password_new = request.POST.get('password', '')

        if name_new != "":
            user.name = name_new
        if email_new != "":
            user.email = email_new
        if password_new != "":
            user.password = password_new
        user.save()

        return JsonResponse({'message': 'User updated successfully'})
    else:
        return HttpResponseNotAllowed(['PUT'])


def user_delete(request, id):
    if request.method == 'DELETE':
        user = get_object_or_404(User, pk=id)
        user.delete()
        return JsonResponse({'message': 'User deleted successfully'})
    else:
        return HttpResponseNotAllowed(['DELETE'])

    





