from django.shortcuts import render, redirect
from .models import Todo

# Create your views here.

def home_page(request):
    
    if request.method == 'POST':
        title = request.POST.get('title')
        message = request.POST.get('message')
        
        todo = Todo(
            title=title,
            message=message,
        )
        todo.save()
        
        return redirect('home')
    
    todo = Todo.objects.all()
    
    return render(request, 'index.html', {'todo': todo})


def delete_todo(request, id):
    todo = Todo.objects.get(pk=id)
    todo.delete()
    
    return redirect('home')


def update_todo(request, id):
    
    todo = Todo.objects.get(pk=id)
    
    if request.method == 'POST':
        title = request.POST.get('title')
        message = request.POST.get('message')
        
        todo.title = title
        todo.message= message
        
        todo.save()
        
        return redirect('home')
    
    
    return render(request, 'update-data.html', {'todo': todo})