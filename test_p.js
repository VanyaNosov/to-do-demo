console.log('one')

const p = new Promise((resolve, reject) => {
  console.log('two')
  const o = {
    a: 1,
    b: 2,
    v: '12',
  }
  resolve(o)
})
  .then((data) => {
    data.xren = '13'
    return data;
  })
  .then((newData) => {
    console.log(newData)
  })
  .catch(err => console.error('error', err))

console.log('three') 
