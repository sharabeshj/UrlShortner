from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver
from api import conv
from django.contrib.auth.models import User
import random
# Create your models here.
def random_number():
	return random.randint(10000,99999)


class Api(models.Model):
	#owner = models.ForeignKey(User,related_name = 'api', on_delete = models.CASCADE)
	id = models.AutoField(primary_key = True)
	unique_id = models.IntegerField(default = random_number)
	long_url = models.CharField(max_length = 100)
	short_url = models.CharField(max_length = 30,blank = True)

@receiver(post_save,sender = Api)
def save_short_url(sender,instance,**kwargs):
	instance.short_url = conv.dehydrate(instance.unique_id)	
