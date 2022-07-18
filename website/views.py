from django.shortcuts import render
from .forms import ClientForm
# Create your views here.
def home(request):
    clientForm = ClientForm()
    if request.method == "POST":
        clientForm = ClientForm(request.POST)
        if clientForm.is_valid():
            clientForm.save()
    context = {
        'clientForm':clientForm

    }
    return render(request, 'website/home.html', context)
    
def projects(request):
    context = {

    }
    return render(request, 'website/projects.html', context)

def about(request):
    context = {

    }
    return render(request, 'website/about.html')

def home2(request):
    context = {

    }
    return render(request, 'website/home2.html', context)

def home3(request):
    context = {

    }
    return render(request, 'website/home3.html', context)