import React, { Component } from 'react'
import style from './Styling.module.css'

export default class Styling extends Component {
  render() {
    const styleText = {
      color: 'pink',
      padding: '15px',
      backgroundColor: 'black'
    }
    return (
      <div>
        <div>
          <p classname="{style.txtStyle}"> css</p>
        </div>
        <p style={styleText}>
            Nguyeenx nhat quang
        </p>
      </div>

    )
  }
}