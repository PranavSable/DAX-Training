from django.shortcuts import render, redirect
from .models import Post

# Create your views here.
def home(request):
    home=Post.objects.all()
    return render(request,'todo/home.html',{'home':home})

def add_task(request):
    if request.method=="POST":
        obj = Post()
        obj.title=request.POST.get('title')
        obj.task_content=request.POST.get('task_content')
        obj.status=request.POST.get('status')
        obj.save()
        return redirect(home)
    return render(request,'todo/input.html',{})    

def delete(request,task_title):
    obj = Post.objects.get(title=task_title)
    obj.delete()
    home=Post.objects.all()
    return render(request,'todo/home.html',{'home':home})