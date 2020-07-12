from django.db import models

# Create your models here.
class Person(models.Model):
    first_name = models.CharField(max_length=80)
    last_name = models.CharField(max_length=80)
    bio = models.TextField(blank=True)
    dob = models.DateField(blank=True, null=True)
    image = models.URLField(blank=True, null=True)
    profile_image = models.FileField(blank=True, null=True)

    def __str__(self):
        buf = self.last_name + ", " + self.first_name
        if self.dob:
            buf += " (" + str(self.dob) + ")"
        return buf

class Publication(models.Model):
    year = models.IntegerField()
    title = models.CharField(max_length=100)
    publisher = models.CharField(max_length=100)
    author = models.ForeignKey(Person)

    def __str__(self):
        return self.title + "/" + str(self.year)

