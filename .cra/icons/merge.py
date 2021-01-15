import json


from os import listdir
from os.path import isfile, join
v='modulz/src'
vi = [f for f in listdir(v) if isfile(join(v, f))]


a=[]
for i in vi:
    p = v + "/" + i
    f=open(p, 'r')
    svg=f.read()
    o={}
    o['name']=i
    o['svg']=svg
    o['src']='modulz'
    # o['solid']=False
    a.append(o)


print(json.dumps(a))
# print(len(a))
