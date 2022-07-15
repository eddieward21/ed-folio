"""
ASGI config for todo project.
It exposes the ASGI callable as a module-level variable named ``application``.
For more information on this file, see
https://docs.djangoproject.com/en/3.2/howto/deployment/asgi/
"""
from channels.auth import AuthMiddlewareStack
import os
from django.core.asgi import get_asgi_application
import django
from channels.routing import ProtocolTypeRouter
from channels.routing import URLRouter

from portfolio.routing import websocket_urlpatterns

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'todo.settings')
django.setup()

application = ProtocolTypeRouter({
    'http': get_asgi_application(),
    'websocket': AuthMiddlewareStack(
        URLRouter(
            websocket_urlpatterns
        )
    )
})