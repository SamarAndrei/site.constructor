from django.db import models

class Landing(models.Model):
    time = models.DateTimeField(auto_now=True)
    name = models.CharField(max_length=200,verbose_name='Название лендинга')
    address = models.CharField(max_length=200,verbose_name='Адрес')
    description = models.TextField(blank=True, verbose_name='Описание')
    image = models.ImageField(upload_to='photo/%Y/%m/%d/', blank=True, verbose_name='Изображение')
    active = models.BooleanField(default=False)

class User(models.Model):
    name = models.CharField(max_length = 100, verbose_name = 'Имя пользователя')
    email = models.EmailField()
    password = models.CharField(max_length = 25)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

