from django.db import models
from django.core.files import File

# Create your models here.

class Departments(models.Model):
    title=models.CharField(max_length=80)
    image=models.URLField(blank=True,null=True)
    image_d=models.FileField(blank=True, null=True)
    def __str__(self):
        return self.title

class Person(models.Model):
    first_name=models.CharField(max_length=80)
    last_name=models.CharField(max_length=80)
    bio=models.TextField(blank=True)
    DOB=models.DateField(blank=True,null=True)
    person_depart = models.ForeignKey(Departments)
    image=models.URLField(blank=True,null=True)
    def __str__(self):
        buf = self.first_name+" "+self.last_name
        return buf