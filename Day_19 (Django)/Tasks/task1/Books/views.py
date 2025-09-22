from django.shortcuts import render
from .models import Book

def book_list(request):
    books = Book.objects.all()
    return render(request, "Books/book_list.html", {"books": books})

def book_add(request):
    if request.method == "POST":
        title = request.POST.get("title")
        author = request.POST.get("author")
        Book.objects.create(title=title, author=author)
        books = Book.objects.all()
        return render(request, "Books/book_list.html", {"books": books})
    return render(request, "Books/add.html")

def book_detail(request, id):
    book = Book.objects.get(pk=id)
    return render(request, "Books/view.html", {"details": book})

def book_update(request, id):
    book = Book.objects.get(pk=id)
    if request.method == "POST":
        book.title = request.POST.get("title")
        book.author = request.POST.get("author")
        book.save()
        books = Book.objects.all()
        return render(request, "Books/book_list.html", {"books": books})
    return render(request, "Books/edit.html", {"details": book})
    

def book_delete(request, id):
    book = Book.objects.get(pk=id)
    book.delete()
    books = Book.objects.all()
    return render(request, "Books/book_list.html", {"books": books})


