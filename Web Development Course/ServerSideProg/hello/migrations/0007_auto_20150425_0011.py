# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('hello', '0006_delete_message'),
    ]

    operations = [
        migrations.RenameField(
            model_name='person',
            old_name='department',
            new_name='person_depart',
        ),
    ]
