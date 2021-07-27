#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import json

dict_list = [{
        'site' : 'Vue',
        'url' : 'https://vuejs.org/'
    }, 
    {
        'site' : 'React',
        'url' : 'https://reactjs.org/'
    }]

json0 = json.dumps(dict_list, ensure_ascii=False, indent=4)