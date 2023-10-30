import React from 'react'

const ImgText = ( props ) => {
  return (
    <section id="imgTextType" className={`imgText__wrap ${props.element}`}>
        <h2 className="blind">이미지 텍스트 유형</h2>
        <div className="imgText__inner container">
            <div className="imgText__txt">
                <span className="small">이미지 텍스트 유형01</span>
                <h3 className="title">{props.title}</h3>
                <p className="desc">김준수는 올해로 가수 데뷔 20주년, 뮤지컬 데뷔 13주년을 맞이했다. 뮤지컬 배우로서 2010년부터 2023년까지 총 9개의 작품을 통해 9명의 삶을 연기했다.</p>
                <ul className="list">
                    <li><a href="/">2010 뮤지컬 ‘모차르트!’ - 모차르트</a></li>
                    <li><a href="/">2011 뮤지컬 ‘천국의 눈물’ - 준</a></li>
                    <li><a href="/">2012 뮤지컬 ‘엘리자벳’ - 토드</a></li>
                    <li><a href="/">2013 뮤지컬 ‘디셈버’ - 지욱</a></li>
                    <li><a href="/">2014 뮤지컬 ‘드라큘라’ - 드라큘라</a></li>
                    <li><a href="/">2015 뮤지컬 ‘데스노트’ – 엘(L)</a></li>
                    <li><a href="/">2016 뮤지컬 ‘도리안 그레이’ – 도리안</a></li>
                    <li><a href="/">2019 뮤지컬 ‘엑스칼리버’ – 아더</a></li>
                    <li><a href="/">2022 뮤지컬 '웨스트 사이드 스토리' - 토니</a></li>
                </ul>
            </div>
            <div className="imgText__img img1">
                <a href="/">팬송 'Red Diamond'</a>
            </div>
            <div className="imgText__img img2">
                <a className="deep" href="/">김준수 뮤지컬 총망라</a>
            </div>
        </div>
    </section>
  )
}

export default ImgText