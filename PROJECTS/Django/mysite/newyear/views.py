import datetime
from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def index(request):
    currenttime = datetime.datetime.now()
    return render(request, "newyear/index.html", {
        "newyear": currenttime.month == 1 and currenttime.day == 1
    })