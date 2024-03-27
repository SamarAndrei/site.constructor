from django.db import models
from users.models import Users

class Landing(models.Model):
    data = models.DateTimeField(auto_now=True)
    name = models.CharField(max_length=200,verbose_name='Название лендинга')
    address = models.CharField(max_length=200,verbose_name='Адрес')
    description = models.TextField(blank=True, verbose_name='Описание')
    image = models.ImageField(upload_to='photo/%Y/%m/%d/', blank=True, verbose_name='Изображение')
    keywords = models.CharField(max_length=200,verbose_name='Теги', blank=True) # теги указывать через пробел
    active = models.BooleanField(default=False)
    
