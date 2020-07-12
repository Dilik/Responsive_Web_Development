from django.conf.urls import include, url
from django.contrib import admin
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    # Examples:
    # url(r'^$', 'ServerSideProg.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^$', 'hello.views.index',name='home'),
    url(r'^department/([0-9]+)$', 'hello.views.department', name='person'),
    url(r'^bio/([0-9]+)$','hello.views.bio',name='bio'),
    url(r'^admin/', include(admin.site.urls)),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)