const fs = require('fs')
const read = (path) => fs.readFileSync(path).toString()
const print = console.log
const rdir = (path) => fs.readdirSync(path).toString()
const str = d => JSON.stringify(d, null, 2)

const iconic_path = './Iconic/SVG'
const feather_path = './feather'
const radix_path = './radix-icons'
const herosolid_path = './heroicons/solid'
const herooutline_path = './heroicons/outline'

// print(comp(herooutline_path))
let all = [];
[herooutline_path, herosolid_path, iconic_path, feather_path, radix_path, ].forEach(source => {
  const f = rdir(source)
  // print(source)
  f.split(',').forEach(name => {
    let svg
    try {
      svg = read(`${source}/${name}`)
    } catch (e) {}
    all.push({
      svg,
      source,
      name
    })
  })
})

print(str(all))
////
//x = (rdir(herooutline_path).split(','))

//x.forEach(y => {
//  try {
//    print(read(`${herooutline_path}/${y}`))
//  } catch (e) {
//    // console.log(e)
//  }
//})
