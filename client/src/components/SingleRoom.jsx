const SingleRoom = ({ location, rating, owner, date, price }) => {
  return (
    <div>
      <img src="" alt="" />
      <p>{location}</p>
      <p>{rating}</p>
      <p>Stay with {owner}</p>
      <p>{date}</p>
      <p>
        <b>${price} night</b>
      </p>
    </div>
  )
}

export default SingleRoom
