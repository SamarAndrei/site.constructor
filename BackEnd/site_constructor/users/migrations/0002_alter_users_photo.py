# Generated by Django 5.0.3 on 2024-03-27 07:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='users',
            name='photo',
            field=models.ImageField(blank=True, upload_to='photo/%Y/%m/%d/'),
        ),
    ]