from django.db import models

class Users(models.Model):
    name = models.CharField(max_length = 100, verbose_name = 'Имя пользователя')
    email = models.EmailField()
    password = models.CharField(max_length = 25)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    photo = models.ImageField(upload_to='photo/%Y/%m/%d/', blank=True)
