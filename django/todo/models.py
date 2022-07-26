from django.conf import settings
from django.db import models
from django.utils import timezone


class Post(models.Model):
    
    title = models.CharField(max_length=200)
    task_content = models.TextField()
    status=models.CharField(max_length=10)
    created_date = models.DateTimeField(default=timezone.now)
    
    def __str__(self):
        return self.title