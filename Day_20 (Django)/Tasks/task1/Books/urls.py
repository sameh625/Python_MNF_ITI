from django.urls import path
from . import views

urlpatterns = [
    path('api/books', views.books_list_api, name='books_list_api'),
    path('api/books/<int:id>', views.book_detail_api, name='book_detail_api'),
]
