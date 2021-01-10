cat feather/feather.json  heroicons-0.4.1/src/solid/solid.json heroicons-0.4.1/src/outline/outline.json vercel/vercel.json modulz/modulz.json  | jq '.[]' | jq -s > all.json
