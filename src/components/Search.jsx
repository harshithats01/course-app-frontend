import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const Search = () => {
    const [data, setData] = useState(
        {
            "course": " "
        }
    )
    const [result, setResult] = useState([])

//delete event handling
const deleteCourse=(id)=>{
    let input={"_id":id}
    axios.post("http://localhost:8080/delete",input).then(
        (response)=>{
            if(response.data.status =="success"){
                alert("successfully deleted");
            }else{
                alert("error in deletion");
            }
        }
    ).catch().finally()
}






    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }

    //Search button event
    const readValue = () => {
        console.log(data)
       axios.post("localhost:8080/search",data).then((response)=>{
        setResult(response.data)
        
    }
    ).catch(
        (error) => {
        console.log(error.message)
        alert(error.map)
    }
    ).finally()
    }
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                    </div>
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                            <label htmlFor="" className="form-label">Course:</label>
                            <input type="text" className="form-control" name='course' value={data.course} onChange={inputHandler} />

                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-success" onClick={readValue}>Search</button>
                        </div>
                        <div className="row">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">course</th>
                                            <th scope="col">title</th>
                                            <th scope="col">description</th>
                                            <th scope="col">date</th>
                                            <th scope="col">duration</th>
                                            <th scope="col">venue</th>
                                            <th scope="col">trainer</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                      {
                                        result.map((value,index)=>{
                                            return   <tr>
                                            <th scope="row">{value.course}</th>
                                            <td>{value.title}</td>
                                            <td>{value.description}</td>
                                            <td>{value.date}</td>
                                            <td>{value.duration}</td>
                                            <td>{value.venue}</td>
                                            <td>{value.trainer}</td>
                                            <td><button className="btn btn-danger" onClick={()=>deleteCourse(value._id)}>Delete</button></td>
                                            
                                        </tr>
                                        })
                                      }

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Search