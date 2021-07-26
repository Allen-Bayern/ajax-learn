#!/usr/bin/env python3
# -*- coding: utf-8 -*-

from flask import Flask

app = Flask(__name__)

with open('index.html', mode='r', encoding='utf-8') as open_index:
    
    index = open_index.read()

    @app.route('/')
    def hello_world():
        return index
    
    # open javascript
    with open('src/main.js', mode='r', encoding='utf-8') as javascript:
        js_reader = javascript.read()
        @app.route('/main.js')
        def get_js():
            return js_reader

    # open css
    with open('public/style.css', mode = 'r', encoding='utf-8') as opencss:
        css = opencss.read()
        @app.route('/style.css')
        def add_css():
            return css