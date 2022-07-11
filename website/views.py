from django.shortcuts import render

# Create your views here.
def home(request):
    context = {

    }
    return render(request, 'website/home.html', context)

def home2(request):
    context = {

    }
    return render(request, 'website/home2.html', context)