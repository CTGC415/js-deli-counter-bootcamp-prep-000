
var number = 0

function takeANumber(line) {
  ++number
  line.push(number)
  return `Welcome. You are number ${number} in line.`
}

function nowServing(line) {
  if (line.length === 0) {
    return 'There is nobody waiting to be served!'
  }
<<<<<<< HEAD
  
=======
>>>>>>> a11861ea2e96d1cf9e767f4fafe2c2edafb6e48d
  var name = line.slice(0,1)
  line.shift()
  return `Currently serving ${name}.`
}

function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty."
  }
<<<<<<< HEAD
  
=======
>>>>>>> a11861ea2e96d1cf9e767f4fafe2c2edafb6e48d
  let i = 0
  var message = `The line is currently: ${i + 1}. ${line[i]}`
  i++
  
  while (i < line.length) {
    message = message + `, ${i + 1}. ${line[i]}`
<<<<<<< HEAD
    i++
=======
>>>>>>> a11861ea2e96d1cf9e767f4fafe2c2edafb6e48d
  }
  
  return message
}