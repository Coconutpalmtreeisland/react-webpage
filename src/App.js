import React from 'react'
import './assets/css/reset.css'
import './assets/css/style.css'

import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

import { Slider } from './components/Slider'
import Image from './components/Image'
import ImgText from './components/ImgText'
import Card from './components/Card'
import Banner from './components/Banner'
import Text from './components/Text'

const App = () => {
    return (
        <>
            <Header element="nexon" />
            <Main>
                <Slider element="nexon" title="PALMTREE ISLAND" />
                <Image element="nexon section" title="이미지 유형" />
                <ImgText element="nexon section" title="김준수 뮤지컬 작품 살펴보기" />
                <Card element="nexon section" title="김준수의 콘서트" />
                <Banner element="nexon" title="개발자 코코넛" />
                <Text element="nexon section" title="텍스트 유형01" />
            </Main>
            <Footer element="nexon section gray" />
        </>
    )
}

export default App