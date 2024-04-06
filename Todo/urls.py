from django.urls import path
from Todo import views

urlpatterns = [
    path('', views.home_page, name='home'),
    path('delete-todo/<int:id>', views.delete_todo, name='delete-todo'),
    path('update-todo/<int:id>', views.update_todo, name='update-todo'),
    path('update-data', views.update_todo, name='update-todo'),
]
