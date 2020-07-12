# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('hello', '0005_publication'),
    ]

    operations = [
        migrations.AddField(
            model_name='publication',
            name='author',
            field=models.ForeignKey(to='hello.Person', default=0),
            preserve_default=False,
        ),
    ]
