# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('hello', '0009_departments_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='departments',
            name='image',
            field=models.URLField(default=0),
            preserve_default=False,
        ),
    ]
