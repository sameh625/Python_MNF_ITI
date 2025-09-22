from django.shortcuts import render

books=[
    {"title": "To Kill a Mockingbird", "author": "Harper Lee"},
    {"title": "1984", "author": "George Orwell"},
    {"title": "The Great Gatsby", "author": "F. Scott Fitzgerald"},
    {"title": "Pride and Prejudice", "author": "Jane Austen"},
    {"title": "Moby-Dick", "author": "Herman Melville"}
]

authors = [
    {"name": "Harper Lee"},
    {"name": "George Orwell"},
    {"name": "F. Scott Fitzgerald"},
    {"name": "Jane Austen"},
    {"name": "Herman Melville"}
]

genres = [
    {"type": "Classic"},
    {"type": "Dystopian"},
    {"type": "Novel"},
    {"type": "Romance"},
    {"type": "Adventure"}
]

publication_years = [
    {"title": "To Kill a Mockingbird", "year": 1960},
    {"title": "1984", "year": 1949},
    {"title": "The Great Gatsby", "year": 1925},
    {"title": "Pride and Prejudice", "year": 1813},
    {"title": "Moby-Dick", "year": 1851}
]

ratings = [
    {"title": "To Kill a Mockingbird", "rating": 4.8},
    {"title": "1984", "rating": 4.7},
    {"title": "The Great Gatsby", "rating": 4.6},
    {"title": "Pride and Prejudice", "rating": 4.5},
    {"title": "Moby-Dick", "rating": 4.4}
]



def author_list(request):
    return render(request,"Books/author_list.html",{
        "authors":authors
    })

def book_list(request):
    return render(request,"Books/book_list.html",{
        "books":books
    })
    

def genre_list(request):
    return render(request, "Books/genre_list.html",{
        "genres":genres
    })


def publication_year_list(request):
    return render(request, "Books/publication_year_list.html",{
        "years":publication_years
    })


def rating_list(request):
    return render(request, "Books/rating_list.html",{
        "ratings":ratings
    })
