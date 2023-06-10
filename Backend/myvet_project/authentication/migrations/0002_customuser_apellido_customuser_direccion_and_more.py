# Generated by Django 4.2.1 on 2023-06-04 17:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('authentication', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='customuser',
            name='apellido',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
        migrations.AddField(
            model_name='customuser',
            name='direccion',
            field=models.CharField(blank=True, max_length=255),
        ),
        migrations.AddField(
            model_name='customuser',
            name='dni',
            field=models.CharField(blank=True, max_length=8),
        ),
        migrations.AddField(
            model_name='customuser',
            name='nombre',
            field=models.CharField(blank=True, max_length=50),
        ),
        migrations.AddField(
            model_name='customuser',
            name='telefono',
            field=models.CharField(blank=True, max_length=15),
        ),
    ]