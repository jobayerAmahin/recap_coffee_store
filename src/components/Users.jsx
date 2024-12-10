import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Users = () => {
  const allUsers = useLoaderData();
  const [userList,setUserList]=useState(allUsers)
  const handleDelete=id=>{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
            fetch(`https://coffee-store-server-ten-chi.vercel.app/users/${id}`,{
                method:'DELETE'
            })
                .then(res=>res.json())
                .then(data=>{
                    if(data.deletedCount>1){
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                          });
                    }
                    const remainingUsers=userList.filter(user=>user._id!==id)
                    setUserList(remainingUsers)
                })
        }
      });
  }
  return (
    <div>
      <h1>Total Users: {allUsers.length}</h1>
      <div class="overflow-x-auto">
        <table class="table table-zebra">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
                userList.map(user=><tr key={user._id}>
                    <th>1</th>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                        <button className="btn bg-blue-300">Edit</button>
                        <button className="btn bg-red-400" onClick={()=>handleDelete(user._id)}>X</button>
                    </td>
                  </tr>)
            }

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
