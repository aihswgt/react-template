import React from 'react'
import HeaderComponent from '../components/HeaderComponent'

export default class Layout extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div>
        <HeaderComponent/>
      </div>
    )
  }
}