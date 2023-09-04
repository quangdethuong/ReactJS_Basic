import React, { Component } from 'react'

export default class BaiTapChonXe extends Component {
   state = {
    imgProduct: require('../asset/products/black-car.jpg')
   }

   renderCar = (imgNewProduct) => {
    this.setState({
        imgProduct: imgNewProduct
    });
   }
    
    render() {
        return (
            <div className="container-fluid">
            <div className="row">
                <div className="col-7">
                    <img style={{ width: "100%" }} src={this.state.imgProduct} alt="black_car" />
                </div>
                <div className="col-5">
                    <div className="card text-dark">
                        <div className="card-header text-primary">Exterior Color</div>
                        <div className="card-body">
                            <div className="row border border-link pt-2 pb-2 mt-2" onClick={()=>{this.renderCar(require('../asset/products/black-car.jpg'))}} style={{cursor:'pointer'}}>
                                <img className="col-2" src={require('../asset/icons/icon-black.jpg')}  alt="black_icon"/>
                                <div className="col-10">
                                    <h3>Crystal Black</h3>
                                    <p>Pearl</p>                           
                                </div>
                            </div>
                            <div className="row border border-link pt-2 pb-2 mt-2" onClick={()=>{this.renderCar(require('../asset/products/steel-car.jpg'))}} style={{cursor:'pointer'}}>
                                <img className="col-2" src={require('../asset/icons/icon-steel.jpg')}  alt="steel"/>
                                <div className="col-10">
                                    <h3>Modern Steel</h3>
                                    <p>Metallic</p>                           
                                </div>
                            </div>
                            <div className="row border border-link pt-2 pb-2 mt-2" onClick={()=>{this.renderCar(require('../asset/products/silver-car.jpg'))}} style={{cursor:'pointer'}}>
                                <img className="col-2" src={require('../asset/icons/icon-silver.jpg')}  alt="silver_icon"/>
                                <div className="col-10">
                                    <h3>Lunar Silver</h3>
                                    <p>Metallic</p>                           
                                </div>
                            </div>
                            <div className="row border border-link pt-2 pb-2 mt-2" onClick={()=>{this.renderCar(require('../asset/products/red-car.jpg'))}} style={{cursor:'pointer'}}>
                                <img className="col-2" src={require('../asset/icons/icon-red.jpg')}  alt="red_icon"/>
                                <div className="col-10">
                                    <h3>Rallye Red</h3>
                                    <p>Metallic</p>                           
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        )
    }
}