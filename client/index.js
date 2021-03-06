// Import from the module './whiteboard':
//   The default export, naming it draw,
//   An export named `events`, calling it `whiteboard`.
import whiteboard, {draw} from './whiteboard'


// Example: Draw a single stroke.
draw([0, 0], [250, 250], 'red', true)

whiteboard.on('draw',(start,end,strokeColor)=> {
  console.log(start, end, strokeColor)
})

const socket = io(window.location.origin)

socket.on('connect', function(){
  console.log('I have made a persistent two-way connection to the server!')
})
