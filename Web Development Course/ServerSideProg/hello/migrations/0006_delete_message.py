# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('hello', '0005_person_department'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Message',
        ),
    ]
