
from django.contrib import admin
from django.urls import path
from Books import views


urlpatterns = [
    path('admin/', admin.site.urls),
    path('book_list/',views.book_list),
    path('author_list/',views.author_list),
    path('genre_list/',views.genre_list),
    path('publication_year_list/',views.publication_year_list),
    path('rating_list/',views.rating_list)
]
