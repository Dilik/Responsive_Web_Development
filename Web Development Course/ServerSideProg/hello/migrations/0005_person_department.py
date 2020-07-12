# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('hello', '0004_departments'),
    ]

    operations = [
        migrations.AddField(
            model_name='person',
            name='department',
            field=models.ForeignKey(default=0, to='hello.Departments'),
            preserve_default=False,
        ),
    ]
