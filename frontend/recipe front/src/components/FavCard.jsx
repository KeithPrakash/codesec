
 
const FavCard = ({ item, index ,removeItem}) => {
  

  return (
    <div key={index}   className='hover:scale-105 hover:shadow-lg' >
    <img src={item?.image} alt=""  className='rounded-xl'/>

    <h3 className='font-semibold text-lg'>{item?.title}</h3>
    <button className='py-2 px-3 rounded bg-pink-700 text-white font-semibold' onClick={()=>removeItem(item?._id)}>remove</button>
      </div>
  )
}

export default FavCard