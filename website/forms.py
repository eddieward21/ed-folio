from django import forms
from .models import Client
from django.forms import ModelForm
from django import forms

class ClientForm(ModelForm):
    class Meta:
        model = Client
        fields = ("__all__")
        widgets = {
            'name': forms.TextInput(attrs = {'style':'display:block; width:100%; font-size:1rem; font-weight:400; line-height:1.5; border-color:#00ac96 !important; border-style: solid !important; border-width: 0 0 1px 0 !important; padding:0px !important; color: #495057; height: auto; border-radius:0; background-color: black; color:white; font-family:Poppins; margin-top:6px'}),
            'email': forms.TextInput(attrs = {'style':'display:block; width:100%; font-size:1rem; font-weight:400; line-height:1.5; border-color:#00ac96 !important; border-style: solid !important; border-width: 0 0 1px 0 !important; padding:0px !important; color: #495057; height: auto; border-radius:0; background-color: black; color:white;font-family:Poppins; margin-top:6px'}),
            'message': forms.TextInput(attrs = {'style':'display:block; width:100%; font-size:1rem; font-weight:400; line-height:1.5; border-color:#00ac96 !important; border-style: solid !important; border-width: 0 0 1px 0 !important; padding:0px !important; color: #495057; height: auto; border-radius:0; background-color: black; color:white;font-family:Poppins; margin-top:6px'}),

        }