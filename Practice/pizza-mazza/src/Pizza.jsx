function Pizza(props) {

  return (
    <div className="pizza flex flex-col items-center border-b-1 rounded-xl  p-4 m-4">
      <h4>{props.name}</h4>
      <p>{props.desc}</p>
      <img className='w-32 m-4 rounded-md' src={props.img} alt={props.name} />
      <p>$10</p>
    </div>
  )
}

export default Pizza