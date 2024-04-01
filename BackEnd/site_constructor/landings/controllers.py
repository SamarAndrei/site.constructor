from django.http import JsonResponse, HttpResponseNotAllowed, HttpResponseBadRequest, HttpResponse
from .services import LandingService
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods, require_GET, require_POST



@require_POST
def landing_add(request):
    name = request.POST.get('name')
    address = request.POST.get('address')

    landing_service = LandingService()
    success = landing_service.add_landing(name, address)

    return JsonResponse({'success': success})

@require_http_methods(["DELETE"])
def landing_delete(request, landing_id):
    landing_service = LandingService()
    success = landing_service.delete_landing(landing_id)
    return JsonResponse({'success': success})

@require_http_methods(["PUT"])
def landing_update(request, landing_id):
    name_new = request.POST.get('name')
    address_new = request.POST.get('address')

    landing_service = LandingService()
    success = landing_service.update_landing(landing_id, name_new, address_new)

    return JsonResponse({'success': success})

@require_GET
def landing_get_all(request):
    landing_service = LandingService()
    success = landing_service.get_all_landing()
    return JsonResponse({'success': success})

@require_GET
def landing_get(request, landing_id):
    landing_service = LandingService()
    success = landing_service.get_landing(landing_id)
    return JsonResponse({'success': success})

@require_POST
def user_add(request):
    user_name = request.POST.get('user_name')
    email = request.POST.get('email')
    password = request.POST.get('password')

    user_service = LandingService()
    success = user_service.add_user(user_name, email, password)

    return JsonResponse({'success': success})

@require_http_methods(["PUT"])
def user_update(request, user_id):
    name_new = request.POST.get('name')
    email_new = request.POST.get('email')
    password_new = request.POST.get('password')

    user_service = LandingService()
    success = user_service.update_user(user_id, name_new, email_new, password_new)

    return JsonResponse({'success': success})

@require_http_methods(["DELETE"])
@csrf_exempt
def user_delete(request, user_id):
    user_service = LandingService()
    success = user_service.delete_user(user_id)
    return JsonResponse({'success': success})