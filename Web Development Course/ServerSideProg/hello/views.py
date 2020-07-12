from django.shortcuts import render
from django.http import HttpResponse
from hello.models import *
# Create your views here.
def index(request):
    d = Departments.objects.all()
    persons=Person.objects.all()
    return render(request,"index.html",{
        'department': d,
        'person':persons})
def department(request,id):
    p = Departments.objects.get(id=id)
    depart= Person.objects.filter(person_depart=p)
    return render(request,"People.html",{
        'p': p,
        'depart':depart
    })
def bio(request,id):
    p=Person.objects.get(id=id)
    return render(request,"bio.html",{
        'bio': p
    })