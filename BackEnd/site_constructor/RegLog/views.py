from django.shortcuts import render
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib import messages

# Create your views here.

def user_register(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, 'Вы успешно зарегистрировались')
            return redirect('страница с авторизацией')
        else:
            messages.error(request, 'Ошибка регистрации')
    else:
        form = UserCreationForm()
    return render(request, 'какой-то html файл', {'form' : form})

def user_login(request):
    return render(request, 'какой-то html файл')
