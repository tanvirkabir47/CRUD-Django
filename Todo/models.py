from django.db import models

# Create your models here.
class Todo(models.Model):
    title = models.CharField(max_length=150)
    message = models.TextField(max_length=500)
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        ordering = ['-created_at',]
    
    
    def __str__(self):
        return self.title