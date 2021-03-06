import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from "react-router-dom"
import { Link } from "react-router-dom";

import "./style.css"
import API from "../../utils/API"
import Footer from '../../components/Footer';


// import SomeComponent from '../../components/SomeComponent';
class AddProductPage extends React.Component {
    state = {
        name: '',
        description: '',
        price: '',
        details: '',
        userId: ''
    }

    // useEffect(()=>{
    //     API.getAllPlayers().then(res=>{
    //         console.log(res.data)
    //         setPlayersState(res.data)
    //         setFilteredPlayersState(res.data)
    //     }).catch(err=>{
    //         console.log(err);
    //     })
    // },[])

    // const params = useParams(); // for retrieving id from .../path/:id apis
    // const history = useHistory();

    // const handleDeleteBtnClick = event=>{
    //     event.preventDefault();
    //     API.deletePlayerById(params.id).then(res=>{
    //         history.push('/')
    //     })
    // }

    handleInputChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        })
    }

    handleFormSubmit = event => {
        event.preventDefault();
        API.addProduct(this.state).then(newProduct => {
            console.log(this.state)
            this.setState({
                name: '',
                description: '',
                price: '',
                details: '',
                userId: ''
            })
        })
    }
    // const handleFormSubmit = event=>{
    // OR
    // const this.handleInputChange = event=>{
    //     event.preventDefault();
    //     API.createPlayer(playerState).then(newPlayer=>{
    //         console.log(newPlayer)
    //         setPlayerState({
    //             name:'',
    //             team:''
    //         })
    //         history.push("/")
    //     })
    // }
render() {
    return (
        <div className="AddProductPage container">
            <div className="body">


                <h1>AddProductPage</h1>

                <div className="section">

                    <form>
                        <div className="field is-horizontal">
                            <div className="field-body">
                                <div className="field">
                                    <label className="label">Product Name</label>
                                    <div className="control">
                                        <input className="input" type="text" onChange={this.handleInputChange} name="name" value={this.state.className} placeholder="Product Name" />
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label">Product Description</label>
                                    <div className="control">
                                        <input className="input" type="text" onChange={this.handleInputChange} name="description" value={this.state.description} placeholder="Description" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="field is-horizontal">
                            <div className="field-body">
                                <div className="field">
                                    <label className="label">Price</label>
                                    <div className="control">
                                        <input className="input" type="text" onChange={this.handleInputChange} name="price" value={this.state.price} placeholder="Price" />
                                    </div>
                                </div>
                                {/* <div className="field">
                                    <label className="label">Unit</label>
                                    <div className="control">
                                        <input className="input" type="text" onChange={this.handleInputChange} name="price_unit" value={this.state.unit} placeholder="Unit" />
                                    </div>
                                </div> */}
                            </div>
                        </div>
                        <div className="field is-horizontal">
                            <div className="field-body">
                                <div className="field">
                                    <label className="label">Details</label>
                                    <div className="control">
                                        <input className="input" type="text" onChange={this.handleInputChange} name="details" value={this.state.details} placeholder="details" />
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label">Photo Placeholder</label>
                                    <div className="control">
                                        <input className="input" type="text" onChange={this.handleInputChange} name="userId" value={this.state.userId} placeholder="use upload component instead" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button className="button is-success is-light" onClick={this.handleFormSubmit}>Add Product!</button>
                    </form>
                    <div className="section">
                        <button class="button">
                            <Link to="/detail" >DetailPage</Link>
                        </button>
                    </div>
                </div>
            </div>
           
        </div>

    )
}
}

export default AddProductPage