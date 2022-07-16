from django.shortcuts import render

# Create your views here.
def home(request):
    context = {

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