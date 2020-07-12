# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('hello', '0007_auto_20150425_0011'),
    ]

    operations = [
        migrations.AddField(
            model_name='person',
            name='image',
            field=models.URLField(blank=True, null=True),
        ),
    ]
