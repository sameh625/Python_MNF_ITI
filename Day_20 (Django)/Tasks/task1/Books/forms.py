from django import forms
from .models import Book, Author

class AuthorForm(forms.ModelForm):
    class Meta:
        model = Author
        fields = ['name']

class BookForm(forms.ModelForm):
    author = forms.ModelChoiceField(queryset=Author.objects.all(), label="Author")

    class Meta:
        model = Book
        fields = ['title', 'author']