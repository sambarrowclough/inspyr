import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const postsDirectory = join(process.cwd(), '_posts')

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

export function getPostBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach(field => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (data[field]) {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllPosts(fields = []) {
  const slugs = getPostSlugs()
  const posts = slugs
    .map(slug => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? '-1' : '1'))
  return posts
}

export function getIcons() {
  return JSON.parse(
    fs.readFileSync(process.cwd() + '/public/assets/all2.json', 'utf8')
  )

  return getAllIcons()
}

export function getIndex() {
  return fs.readFileSync(process.cwd() + '/index.json', 'utf8')
}

//const fs = require('fs')
const read = path => fs.readFileSync(path).toString()
const print = console.log
const rdir = path => fs.readdirSync(path).toString()
const str = d => JSON.stringify(d, null, 2)

// join(process.cwd(), '_posts')
const iconic_path = join(process.cwd(), '/public/assets/Iconic/SVG')
const feather_path = join(process.cwd(), '/public/assets/feather')
const radix_path = join(process.cwd(), '/public/assets/radix-icons')
const herosolid_path = join(process.cwd(), '/public/assets/heroicons/solid')
const herooutline_path = join(process.cwd(), '/public/assets/heroicons/outline')

// print(comp(herooutline_path))
const getAllIcons = () => {
  let all = []
  ;[
    herooutline_path,
    herosolid_path,
    iconic_path,
    feather_path,
    radix_path
  ].forEach(source => {
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

  return all
}
