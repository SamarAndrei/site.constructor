from django.http import HttpResponse

# Create your views here.

def page(request):
    return HttpResponse('HEllo world!')