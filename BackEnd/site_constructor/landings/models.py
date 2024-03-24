from django.db import models

class Landing(models.Model):
    land_bd = models.DateTimeField(auto_now=True)
    land_name = models.CharField(max_length=200,verbose_name='Название лендинга')
    land_address = models.CharField(max_length=200,verbose_name='Адрес')
    
