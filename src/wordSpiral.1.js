//direction
const d = [
  { x: 0, y: -1 },  //up
  { x: 1, y: 0 },   //right
  { x: 0, y: 1 },   //down
  { x: -1, y: 0 },  //left
]

export const wordSpiral = s => {
  ////// CHECK INPUT
  if (typeof s != 'string') return []

  ////// DRAW CHARACTERS TO POINTS
  let ps = {}             //points
  let p = { x: 0, y: 0 }  //current point
  let m = 3               //current move direction
  
  //start drawing
  for (let i = s.length - 1; i >= 0; i--) {
    for (let j = 0, k = s.charCodeAt(i) - 96; j < k; j++) {
      //add character to point
      if (!ps[p.x]) ps[p.x] = {}
      if (!ps[p.x][p.y]) ps[p.x][p.y] = s[i]

      //move point for the next character
      p.x = p.x + d[m].x
      p.y = p.y + d[m].y
    }
    
    //turn right
    m = (m + 1) % 4
  }
  
  ////// FIND BOUNDARY
  let t = 0, r = 0, b = 0, l = 0  //top, right, bottom, left

  for (let x in ps) {
    x = Number(x)
    if (x < l) l = x
    else if (x > r) r = x
    
    for (let y in ps[x]) {
      y = Number(y)
      if (y < t) t = y
      else if (y > b) b = y
    }
  }
  
  ////// DRAW POINTS INTO ARRAY OF STRINGS
  let ss = []       //strings
  let w = r - l + 1 //width
  
  for (let y = t; y <= b; y++) {
    let s = Array(w).fill(' ')
    
    for (let x = l; x <= r; x++)
      if (ps[x] && ps[x][y]) s[x - l] = ps[x][y]

    ss.push(s.join(''))
  }

  ////// RETURN
  return ss;
}