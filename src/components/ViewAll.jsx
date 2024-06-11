import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const ViewAll = () => {
    const [data, changeData] = useState([])
    const fetchdata=()=>{
        axios.get("http://localhost:8088/view").then((response)=>{
            changeData(response.data)
            console.log(response.data)
        }).catch((error) => {
            alert(error.message)
        })
    }
    useEffect(
        () => { fetchdata() }, []
    )
    
    return (
        <div>
            <Navbar/>

            <div class="container">
                <div class="row">
                    <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">


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
                            {data.map(
                                (value, index) => {
                                    return <tbody>
                                        <tr>
                                            <th scope="row">{value.course}</th>
                                            <td>{value.title}</td>
                                            <td>{value.description}</td>
                                            <td>{value.date}</td>
                                            <td>{value.duration}</td>
                                            <td>{value.venue}</td>
                                            <td>{value.trainer}</td>
                                        </tr>

                                    </tbody>
                                }
                            )}

                        </table>
                    </div>
                </div>
            </div>




        </div>
    )
}

export default ViewAll