# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('hello', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='person',
            name='birthdate',
            field=models.DateField(null=True, blank=True),
        ),
        migrations.AlterField(
            model_name='person',
            name='bio',
            field=models.TextField(blank=True),
        ),
    ]
