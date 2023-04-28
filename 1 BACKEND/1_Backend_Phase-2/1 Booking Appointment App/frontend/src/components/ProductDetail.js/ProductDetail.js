import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './productdetail.css'
function ProductDetail() {
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [phoneNo,setPhNo]=useState();
    const [allDetail,setAllDetail]=useState([]);

    let handleSendDatatoDB=async ()=>{
        let obj={name,email,phoneNo};
        let result=await axios.post('http://localhost:5000/api/post',obj);
        getDataFromDb();
    }

    let getDataFromDb=async ()=>{
        let result=await axios.get('http://localhost:5000/api/get');
        setAllDetail(result.data);
    }

    let handleRemove=async (id)=>{
        // console.log(id);
       let res=await axios.delete(`http://localhost:5000/api/${id}`);
        getDataFromDb();
    }

    useEffect(()=>{
        getDataFromDb();
    },[])


  return (
    <div className='product-detail-cont'>
        <h2>Booking Appointment App</h2>
        <div className="input-cont">
            <div className="small-cont">
                <div className='label'>Name</div>
                <input className='itag'  type="text" onChange={(e)=>{setName(e.target.value)}} />
            </div>
            <div className="small-cont">
                <div className='label'>Email</div>
                <input className='itag' type="text" onChange={(e)=>{setEmail(e.target.value)}} />
            </div>
            <div className="small-cont">
                <div className='label'>Phone No.</div>
                <input className='itag' type="number" onChange={(e)=>{setPhNo(e.target.value)}} />
            </div>
            <button  className='btn' onClick={handleSendDatatoDB}>ADD</button>
        </div>

        <div className="show-detail">
           {
            allDetail.length>0?allDetail.map((val)=>{
                return (
                    <div className="parentcont">
                      <div className='one-ticket'>
                            <label>Name - </label>
                            <div className="child cExA">{val.name}</div>
                        </div>
                        <div className='one-ticket'>
                            <label>Email-</label>
                            <div className="child cDesc ">{val.email} </div>
                        </div>
                        <div class='one-ticket'>
                        <label>Call- </label>
                        <div className="child cSelcV" > {val.phoneNo}</div>
                       </div>
                         <button className='delete' onClick={()=>{handleRemove(val._id)}}>Delete</button>
                         <div className='update'  ><i class="fa fa-lock"></i></div>
                    </div>
                )
            }):<h1>Empty</h1>
           }
        </div>
    </div>
  )
}

export default ProductDetail