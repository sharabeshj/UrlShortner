from django.conf.urls import url
from api import views
from rest_framework.routers import DefaultRouter


urlpatterns = [
	url(r'^api$',views.ApiList.as_view()),
	url(r'^api/(?P<pk>[0-9]+)',views.ApiDetail.as_view()),
	url(r'^login/$',views.login, name = 'login'),	
]