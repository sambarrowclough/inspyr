import json


from os import listdir
from os.path import isfile, join
v='heroicons-0.4.1/src/solid'
vi = [f for f in listdir(v) if isfile(join(v, f))]


a=[]
for i in vi:
    p = v + "/" + i
    f=open(p, 'r')
    svg=f.read()
    o={}
    o['name']=i
    o['svg']=svg
    a.append(o)


print(json.dumps(a))
# print(len(a))
