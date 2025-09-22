from django.urls import path
from . import views

urlpatterns = [
    path('', views.book_list, name='book_list'),
    path('add/', views.book_add, name='book_add'),
    path('<int:id>/', views.book_detail, name='book_detail'),
    path('<int:id>/update/', views.book_update, name='book_update'),
    path('<int:id>/delete/', views.book_delete, name='book_delete'),
]
