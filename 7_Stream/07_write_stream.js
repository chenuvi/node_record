const fs = require('fs')

const ws = fs.createWriteStream('text1.txt', {
    flags: 'w',
    mode: 438,
    fd: null,
    encoding: 'utf8',
    highWaterMark: 3,
})

ws.write('缺月昏昏漏未央，', (err) => {
    console.log(err, 'err 1')
    console.log('数据写完了 ok1')
})
ws.write('一灯明灭照秋床。', (err) => {
    console.log(err, 'err2')
    console.log('数据写完了 ok2')
})