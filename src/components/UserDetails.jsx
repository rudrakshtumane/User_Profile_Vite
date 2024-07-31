import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const UserDetails = ({ onDelete }) => {
    const {id} = useParams();
    const [user, setUser] = useState("");
    useEffect(() => {
      axios
        .get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response) => {
          setUser(response.data);
        });
    },[id]);

    const handleDelete = () => {    
        onDelete(id);
        // navigate('/'); 
      };

  return (
    <>
    <div className="card card-side shadow-xl w-full max-w-md bg-gradient-to-r from-[#232526] to-[#414345] ">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
      alt="Movie" className="h-full"/>
  </figure>
  <div className="card-body">
    <h2 className="card-title text-white">{user.name}</h2>
    <p>{user.username}</p>
    <p>{user.email}</p>
    <p>{user.phone}</p>
    <p>{user.website}</p>
    <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input
    type="radio"
    name="rating-2"
    className="mask mask-star-2 bg-orange-400"
    defaultChecked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
</div>
    <div className="card-actions justify-end">
      <button className="btn btn-outline btn-error" onClick={handleDelete}>Delete</button>
    </div>
  </div>
</div>
    </>
  )
}

export default UserDetails