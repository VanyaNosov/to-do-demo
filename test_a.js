console.log('1212')

async function funk(a) {
  console.log(1)
  return { a: 1 }
}

async function aw() {
  const t = await funk(1)
  console.log(t)
}

aw()

console.log('adadadf')