from django.conf.urls import include, url
from django.contrib import admin
from djdemo import settings
from django.conf.urls.static import static

urlpatterns = [
    # Examples:
    # url(r'^$', 'djdemo.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),
    url(r'^$', 'hello.views.homepage', name='home'),
    url(r'^person/([0-9]+)$', 'hello.views.person', name='person'),
    url(r'^junk$', 'hello.views.junk'),
    url(r'^admin/', include(admin.site.urls)),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
