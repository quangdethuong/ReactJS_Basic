import React, { Component } from 'react'
import dataGlasses from '../DataGlasses/dataGlasses.json'

export default class BaiTapChonKinh extends Component {

    state = {
        glassCurrent: {
            "id": 1,
            "price": 30,
            "name": "GUCCI G8850U",
            "url": "./glassesImage/v1.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip."
        }
    }

    changeGlasses = (newGlasses) => {
        this.setState({
            glassCurrent: newGlasses
        })
    }


    renderGlassesList = () => {
        return dataGlasses.map((data, index) => {
            return <img onClick={() => { this.changeGlasses(data) }} src={data.url} alt="" className='ml-2 p-2 border border-width-1' style={{ width: '110px', cursor: 'pointer' }} />
        })
    }



    render() {
        const keyFrame = `@keyframes aniGlasses${Date.now()} {
            from {
                width: 0;
                transform: rotate(45deg);
                opacity:0;
            }
            to {
                width:150px;
                opacity:0.7;
                transform: rotate(0deg);

            }
        }`;

        const styleGlasses = {
            width: '150px',
            top: '75px',
            right: '70px',
            opacity: '0.7',
            transform: 'rotate(0deg)',
            animation: `aniGlasses${Date.now()} 2s`
        }

        const infoGlasses = {
            width: '250px',
            top: '200px',
            left: '270px',
            paddingLeft: '15px',
            backgroundColor: 'rgba(255,127,0,.5)',
            textAlign: 'left',
            height: '105px'
        }

        return (
            <div style={{ backgroundImage: 'url(./glassesImage/background.jpg)', width: '100%', minHeight: '2000px', backgroundRepeat: 'no-repeat', backgroundSize: 'contain' }}>
                <style>
                    {keyFrame}
                </style>
                <div style={{ backgroundColor: 'rgba(0,0,0,.5)', width: '100%', minHeight: '2000px' }}>
                    {/* <nav style={{ backgroundColor: 'rgba(87,83,149,0.8)' }} className="navbar navbar-expand-sm navbar-dark">
                        <a className="navbar-brand" href="#">CyberLearn Movie</a>
                        <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
                        <div className="collapse navbar-collapse" id="collapsibleNavId">
                            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Link</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                                    <div className="dropdown-menu" aria-labelledby="dropdownId">
                                        <a className="dropdown-item" href="#">Action 1</a>
                                        <a className="dropdown-item" href="#">Action 2</a>
                                    </div>
                                </li>
                            </ul>
                            <form className="form-inline my-2 my-lg-0">
                                <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                            </form>
                        </div>
                    </nav> */}
                    <div style={{ height: '100px', backgroundColor: 'rgba(0,0,0,0.4)', display: 'flex', justifyContent: 'center' }}>
                        <h1 style={{ color: 'white', display: 'flex', alignItems: 'center' }}>TRY GLASSSES APP ONLINE</h1>
                    </div>
                    <div className="container">
                        <div className="row mt-5 text-center">
                            <div className='col-6'>
                                <div className="position-relative">
                                    <img className="position-absolute" style={{ width: '250px' }} src="./glassesImage/model.jpg" alt='model.jpg' />
                                    <img style={styleGlasses} className="position-absolute" src={this.state.glassCurrent.url} alt='model' />
                                    <div style={infoGlasses} className="position-relative ">
                                        <span style={{ color: '#AB82FF', fontSize: '17px' }} className="font-weight-bold">${this.state.glassCurrent.name}</span> <br />
                                        <span style={{ fontSize: '13px', fontWeight: '400' }}>${this.state.glassCurrent.desc}</span>
                                    </div>
                                </div>
                            </div>
                            <div className='col-6'>
                                <img style={{ width: '250px' }} src="./glassesImage/model.jpg" alt="" />

                            </div>
                        </div>
                    </div>
                    {/* block chứa kính */}
                    <div className="bg-light container text-center mt-5 d-flex justify-content-center p-5">
                        {this.renderGlassesList()}
                    </div>
                </div>

            </div>
        )
    }
}
