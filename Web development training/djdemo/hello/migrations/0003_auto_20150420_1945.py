# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('hello', '0002_auto_20150420_1939'),
    ]

    operations = [
        migrations.RenameField(
            model_name='person',
            old_name='birthdate',
            new_name='dob',
        ),
    ]
