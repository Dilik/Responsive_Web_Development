from django.shortcuts import render
from django.http import HttpResponse
from hello.models import *

# Create your views here.
def homepage(request):
    sum = 0
    for i in range(101):   # Sum of numbers from 1 to 100
        sum += i
    people = Person.objects.filter()
    numPeople = people.count()
    return render(request, 'homepage.html',
                  {'answer': sum,
                   'people': people,
                   'numPeople': numPeople})

def person(request, id):
    p = Person.objects.get(id=id)
    pubs = Publication.objects.filter(author=p)
    return render(request, 'person.html',
        {'p': p,
         'pubs':pubs
         })


def junk(request):
    return HttpResponse("Another page..... <a href='/'>Go home</a>")

