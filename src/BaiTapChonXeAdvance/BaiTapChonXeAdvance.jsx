import React, { Component } from 'react'
import './BaiTapChonXeAdvance.css'
import dataFeature from '../DataCarAdvance/arrayFeatures.json'
import dataWheels from '../DataCarAdvance/wheels.json'

export default class BaiTapChonXeAdvance extends Component {

    state = {
        lxFeature: {
            "id": 1,
            "title": "Crystal Black",
            "type": "Pearl",
            "img": "./images/icons/icon-black.jpg",
            "srcImg": "images-black/images-black-1/",
            "color": "Black",
            "price": "19,550",
            "engineType": "In-Line 4-Cylinder",
            "displacement": "1996 cc",
            "horsepower": "158 @ 6500 rpm",
            "torque": "138 lb-ft @ 4200 rpm",
            "redline": "6700 rpm",
            "wheels": [
                {
                    "idWheel": 1,
                    "srcImg": "images-black/images-black-1/"
                },
                {
                    "idWheel": 2,
                    "srcImg": "images-black/images-black-2/"
                },
                {
                    "idWheel": 3,
                    "srcImg": "images-black/images-black-3/"
                }
            ]
        }
    }

    changeLxFeature = (newLxFeature) =>{
        this.setState({
            lxFeature :newLxFeature
        })
    }

    renderIcon = () => {
        return dataFeature.map((data, index) => {
            return <div className="row mt-1 border border-color-default m-3" key={index} style={{cursor: 'pointer'}} onClick={() => {this.changeLxFeature(data)}}>
                <div className="col-2">
                    <img className="p-3" style={{ width: '100%'}} src={data.img} alt={index}   />
                </div>
                <div className="col-10">
                    <h3 className="p-3">{data.title}</h3>
                    <span className="p-3 pt-0 mt-0">{data.type}</span>
                </div>
            </div>
        })
    }






    renderWheels

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-6">
                        <div className="model">
                            <img style={{ width: '100%' }} src="./images/images-black/images-black-1/civic-1.jpg" alt='empty' />
                        </div>
                        <div className="card mt-2">
                            <h5 className="card-header text-default">See more LX feature</h5>
                            <table className="table border border-color-light" border="1" >
                                <tbody>
                                    <tr>
                                        <td>Color</td>
                                        <td>{this.state.lxFeature.color}</td>
                                    </tr>
                                    <tr>
                                        <td>Price</td>
                                        <td>{this.state.lxFeature.price}</td>
                                    </tr>
                                    <tr>
                                        <td>Engine Type</td>
                                        <td>{this.state.lxFeature.engineType}</td>
                                    </tr>
                                    <tr>
                                        <td>Displacement</td>
                                        <td>{this.state.lxFeature.displacement}</td>
                                    </tr>
                                    <tr>
                                        <td>Horse Power</td>
                                        <td>{this.state.lxFeature.horsepower}</td>
                                    </tr>
                                    <tr>
                                        <td>Torque</td>
                                        <td>{this.state.lxFeature.torque}</td>
                                    </tr>
                                    <tr>
                                        <td>Redline</td>
                                        <td>{this.state.lxFeature.redline}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>


                    <div className="col-6">
                        <div className="card text-left">
                            <h5 className="card-header text-default">Exterior color</h5>
                            <div className="container-fluid">
                                {this.renderIcon()}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
