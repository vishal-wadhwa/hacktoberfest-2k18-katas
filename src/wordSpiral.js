export const wordSpiral = s => {
  let ords = Array(s.length)
  const ord = ch => {
    return ch.charCodeAt(0) - 96
  }

  let x = 0, y = 0

  const dx = [0, 1, 0, -1]
  const dy = [1, 0, -1, 0]

  //mxs: d r u l
  let mxd = 0, mxu = 0, mxl = 0, mxr = 0

  for (let i = 0; i < s.length; ++i) {
    ords[i] = ord(s[i])
    x += dx[i % 4] * ords[i] + dx[(i + 1) % 4]
    y += dy[i % 4] * ords[i] + dy[(i + 1) % 4]

    mxd = Math.max(mxd, y)
    mxr = Math.max(mxr, x)
    mxu = Math.max(mxu, -y)
    mxl = Math.max(mxl, -x)
  }

  let row = ' '.repeat(mxl + mxr)
  let ans = [...Array(mxd + mxu)].map(_ => row.split(''))

  x = mxl
  y = mxu

  for (let i = 0; i < s.length; ++i) {
    let ct = 0

    while (ct < ords[i]) {
      ans[y][x] = s[i]
      x += dx[i % 4]
      y += dy[i % 4]
      ++ct
    }

    x += dx[(i + 1) % 4] - dx[i % 4]
    y += dy[(i + 1) % 4] - dy[i % 4]
  }

  return ans.map(row => row.join(''))
}