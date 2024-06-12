import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const AddCourse = () => {
    const [data, setData] = useState([]
       

    )
    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }
    const readValue = () => {
        console.log(data)
        axios.post("http://localhost:8080/add",data).then(
            (Response)=>{
                console.log(Response.data)
                if(Response.data.status == "success"){
                    alert("Successfully Added")
                }else{
                    alert("error")
                }
            }
        ).catch(
            (error)=>{
                alert(error.message)
            }
        )

    }
    return (
        <div>

            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"></div>
                    <div className="row">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Course:</label>
                            <input type="text" className="form-control" name='course' value={data.course} onChange={inputHandler} />

                        </div>

                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Title:</label>
                            <input type="text" className="form-control" name='title' value={data.title} onChange={inputHandler} />

                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                            <label htmlFor="" className="form-label">Description:</label>
                            <textarea name="description" id="" className="form-control" value={data.description} onChange={inputHandler} ></textarea>

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Date:</label>
                            <input type="date" className="form-control" name='date' value={data.date} onChange={inputHandler} />

                        </div>

                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Duration:</label>
                            <input type="text" className="form-control" name='duration' value={data.duration} onChange={inputHandler} />

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Venue:</label>
                            <input type="text" className="form-control" name='venue' value={data.venue} onChange={inputHandler} />

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Trainer:</label>
                            <input type="text" className="form-control" name='trainer' value={data.trainer} onChange={inputHandler} />

                        </div><br />



                    </div>

                </div><br />
                <button className="btn btn-success" onClick={readValue} >Add</button>

            </div>



        </div>
    )
}

export default AddCourse