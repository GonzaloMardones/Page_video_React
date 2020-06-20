import React from 'react'
import '../assets/styles/components/Search.scss'
import className from 'classnames'
import { connect } from 'react-redux'

import { searchVideo } from '../actions'

const Search = (props) => {
  const { isHome } = props
  const inputStyle = className('input',{
    isHome
  })

  const handleInput = (event) => {
    props.searchVideo(event.target.value)
  }


  return(
    <section className="main">
      <h2 className="main__title">¿Qué quieres ver hoy?</h2>
      <input
         type='text'
         className={inputStyle}
         placeholder='Buscar...'
         onChange={handleInput}
       />      
    </section>
)}

const mapDispatchToProps = {
  searchVideo,
};

export default connect(null, mapDispatchToProps)(Search);