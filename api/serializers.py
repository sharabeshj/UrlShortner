from rest_framework import serializers
from api.models import Api
from django.contrib.auth.models import User

class ApiSerializer(serializers.ModelSerializer):
	#owner = serializers.ReadOnlyField(source = 'owner.username')

	class Meta:
		model = Api
		fields = ('id','unique_id','long_url','short_url',)

	# short_url = serializers.ReadOnlyField()	

class UserSerializer(serializers.ModelSerializer):
	api = serializers.PrimaryKeyRelatedField(many = True, queryset = Api.objects.all())

	class Meta:
		model = User
		fields = ('id','username','api')