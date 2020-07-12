# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('hello', '0011_auto_20150427_2117'),
    ]

    operations = [
        migrations.RenameField(
            model_name='departments',
            old_name='image_department',
            new_name='image_d',
        ),
    ]
