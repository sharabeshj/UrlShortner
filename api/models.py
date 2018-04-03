from django.db import models
from django.db.models.signals import pre_save
from django.dispatch import receiver
from api import base_62_converter as conv
from django.contrib.auth.models import User
# Create your models here.

class Api(models.Model):
	#owner = models.ForeignKey(User,related_name = 'api', on_delete = models.CASCADE)
	id = models.AutoField(primary_key = True)
	long_url = models.CharField(max_length = 100,null=True)
	short_url = models.CharField(max_length = 30,null = True)

@receiver(pre_save,sender = Api)
def save_short_url(sender,instance,**kwargs):
	instance.short_url = conv.dehydrate(id)	
