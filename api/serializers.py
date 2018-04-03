from rest_framework import serializers
from api.models import Api
from django.contrib.auth.models import User

class ApiSerializer(serializers.ModelSerializer):
	#owner = serializers.ReadOnlyField(source = 'owner.username')

	class Meta:
		model = Api
		fields = ('id','long_url','short_url',)

class UserSerializer(serializers.ModelSerializer):
	api = serializers.PrimaryKeyRelatedField(many = True, queryset = Api.objects.all())

	class Meta:
		model = User
		fields = ('id','username','api')