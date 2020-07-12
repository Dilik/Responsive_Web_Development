# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('hello', '0002_person'),
    ]

    operations = [
        migrations.AlterField(
            model_name='person',
            name='DOB',
            field=models.DateField(null=True, blank=True),
        ),
        migrations.AlterField(
            model_name='person',
            name='bio',
            field=models.TextField(blank=True),
        ),
    ]
