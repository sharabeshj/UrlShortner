from django.shortcuts import render
from rest_framework import viewsets
from api.models import Api
from api.serializers import ApiSerializer,UserSerializer
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.models import User
from rest_framework import permissions
from django.views.decorators.csrf import csrf_exempt
from api.permissions import IsOwnerOrReadOnly
from django.http import JsonResponse
from django.contrib.auth import login as auth_login,authenticate

# Create your views here.

def login(request):
	if request.method == "POST":
		username = request.POST['username']
		password = request.POST['password']
		user = authenticate(username=username,password=password)
		if user is not None:
			if user.is_active:
				auth_login(request,user)
				return JsonResponse({'status':'ok'})
			
class ApiList(APIView):
	permission_classes = (permissions.IsAuthenticatedOrReadOnly,
                      IsOwnerOrReadOnly,)

	def get(self,request,format = None):
		api = Api.objects.all()
		serializer = ApiSerializer(api,many = True)
		return Response(serializer.data)
	
	def post(self,request,format = None):
		serializer = ApiSerializer(data = request.data)
		if serializer.is_valid():
			serializer.save(owner = self.request.user)
			return Response(serializer.data,status = status.HTTP_201_CREATED)
		return Response(serializer.errors,status = status.HTTP_400_BAD_REQUEST)	

	
				

class ApiDetail(APIView):
	permission_classes = (permissions.IsAuthenticatedOrReadOnly,
                      IsOwnerOrReadOnly,)
	def get_object(self,pk):
		try:
			return Api.objects.get(pk = pk)
		except Api.DoesNotExist:
			raise Http404

	def get(self,request,pk,format = None):
		api = self.get_object(pk)
		serializer = ApiSerializer(api)
		return Response(serializer.data)
