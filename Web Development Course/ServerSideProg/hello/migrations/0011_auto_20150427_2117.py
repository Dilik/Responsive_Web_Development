# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('hello', '0010_auto_20150425_1144'),
    ]

    operations = [
        migrations.AddField(
            model_name='departments',
            name='image_department',
            field=models.FileField(null=True, upload_to='', blank=True),
        ),
        migrations.AlterField(
            model_name='departments',
            name='image',
            field=models.URLField(null=True, blank=True),
        ),
    ]
