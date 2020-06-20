import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'

import Search from '../components/Search'
import Categories from '../components/Categories'
import Carousel from '../components/Carousel'
import CarouselItem from '../components/CarouselItem'

import '../assets/styles/App.scss'


const Home = ({ mySearch, myList, trends, originals }) => {
    return(
        <>
            <Search isHome/>
            {
                mySearch.length > 0 && (
                <Categories title='Búsqueda'>
                    <Carousel>
                    {mySearch.map((item) => (
                        <CarouselItem
                        key={item.id}
                        {...item}
                        isList
                        />
                    ))}
                    </Carousel>
                </Categories>
                )
            }

            {myList.length > 0 &&
                <Categories title ="Mi lista">
                    <Carousel>
                    {myList.map(item =>
                        <CarouselItem key={item.id} {...item} isList/>
                    )} 
                    </Carousel>
                </Categories>
            }
            {(trends.length > 0 && mySearch.length === 0) && (
            <Categories title="Tendencias">
                <Carousel>
                    {trends.map(item =>
                        <CarouselItem key={item.id} {...item}/>
                    )}                
                </Carousel>
            </Categories>
            )}
            {(originals.length > 0 && mySearch.length === 0) && (
            <Categories title="Originales">
                <Carousel>
                    {originals.map(item =>
                        <CarouselItem key={item.id} {...item}/>
                    )} 
                </Carousel>
            </Categories>
            )}
        </>
    )
}

const mapStateToProps = state =>{
    return {
        mySearch: state.mySearch,
        myList: state.myList,
        trends: state.trends,
        originals: state.originals
    }
}

export default connect(mapStateToProps, null)(Home)