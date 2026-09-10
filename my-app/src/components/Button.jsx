

function Button() {

  let count = 0;

  const handleClick2 = (name) => {
    if (count < 3) {
      count++;
      return (<p>{`You clicked me ${count} time/s`}</p>)
    }
    return (<p>{`${name} stop click`}</p>)
  }

  return (
    <div>
      <button onClick={() => handleClick2('Andy')}>Click Me</button>
    </div>
  )
}

export default Button
