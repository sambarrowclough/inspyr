import json
with open('modulz.json') as f:
    icons = json.load(f)

    for i in icons:
        print(i)
