# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('hello', '0008_person_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='departments',
            name='image',
            field=models.URLField(blank=True, null=True),
        ),
    ]
