from django.db import models

class Recipe(models.Model):
    title = models.CharField(max_length=200)
    ingredients = models.TextField()  
    instructions = models.TextField()
    image = models.ImageField(upload_to='recipe_images/', blank=True, null=True) 
    cooking_time = models.IntegerField(null=True, blank=True)  
    servings = models.IntegerField(null=True, blank=True)

    def __str__(self):
        return self.title
