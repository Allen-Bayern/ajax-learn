#!/usr/bin/env python3
# -*- coding: utf-8 -*-

from flask import Flask
import public.add_json as add_json

app = Flask(__name__)

# load the root
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

# open the css
with open('public/style.css', mode = 'r', encoding='utf-8') as opencss:
    css = opencss.read()
    
@app.route('/style.css')
def add_css():
    return css

# add a new javascript fragment
with open('public/two.js', mode='r', encoding = 'utf-8') as new_js:
    new_js_reader = new_js.read()
    
@app.route('/two.js')
def add_new_js():
    return new_js_reader

# add new html
new_html = '''
<div class="pku">
    同志们，朋友们，今天是五四青年节。
    七十九年前，北京大学的爱国青年发起了具有划时代意义的五四运动。
    五四运动的精神，最根本的就是中华民族的爱国主义精神。
    当代中国的广大青年，要继续继承和发扬五四运动的光荣传统，努力担当起振兴中华的历史使命，创造出无愧于时代和人民的业绩。
</div>
'''

@app.route('/three.html')
def add_new_html():
    return new_html

# add json
@app.route('/five.json')
def add_new_json():
    return add_json.json0