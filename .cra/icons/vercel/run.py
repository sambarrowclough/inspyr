import json

with open('vercel.json') as f:
    ls = json.load(f)
    for i in ls:
        name = i['name'] + '.svg'
        o=open(name, 'w')
        o.write(i['svg'])
