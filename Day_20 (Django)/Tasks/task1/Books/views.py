from django.shortcuts import render
from .models import Book
from .forms import BookForm
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import BookSerializer

# def book_list(request):
#     books = Book.objects.all()
#     return render(request, "Books/book_list.html", {"books": books})

# def book_add(request):
#     if request.method == "POST":
#         form = BookForm(request.POST)
#         if form.is_valid():
#             form.save()
#             form = BookForm()  
#     else:
#         form = BookForm()
#     return render(request, "Books/add.html", {"form": form})

# def book_detail(request, id):
#     book = Book.objects.get(pk=id)
#     return render(request, "Books/view.html", {"details": book})

# def book_update(request, id):
#     book = Book.objects.get(pk=id)
#     if request.method == "POST":
#         book.title = request.POST.get("title")
#         book.author = request.POST.get("author")
#         book.save()
#         books = Book.objects.all()
#         return render(request, "Books/book_list.html", {"books": books})
#     return render(request, "Books/edit.html", {"details": book})
    

# def book_delete(request, id):
#     book = Book.objects.get(pk=id)
#     book.delete()
#     books = Book.objects.all()
#     return render(request, "Books/book_list.html", {"books": books})

@api_view(['GET', 'POST'])
def books_list_api(request):
    if request.method == 'GET':
        books = Book.objects.all()
        serializer = BookSerializer(books, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = BookSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

@api_view(['GET', 'POST', 'DELETE'])
def book_detail_api(request, id):
    book = Book.objects.get(pk=id)

    if request.method == 'GET':
        serializer = BookSerializer(book)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = BookSerializer(book, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=200)
        return Response(status=400)


    elif request.method == 'DELETE':
        book.delete()
        return Response(status=204)
