release: python3 manage.py migrate
web: daphne portfolio.wsgi:application --port $PORT --bind 0.0.0.0 -v2
celeryworker: celery --app todo.celery worker & celery --app todo beat -l INFO & wait -n
