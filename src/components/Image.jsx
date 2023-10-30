import React from 'react'

const Image = ( props ) => {
  return (
    <section id="imageType" className={`image__wrap ${props.element}`}>
        <h2>{props.title}</h2>
        <p>이미지 유형입니다. 마우스 오버시 자세한 정보가 나오는 구조입니다.</p>
        <div className="image__inner container">
            <article className="image img1">
                <h3 className="image__title">뮤지컬 배우 김준수</h3>
                <p className="image__desc">가창력, 연기력, 그리고 춤 실력까지 완벽하게 겸비한 트리플-트릿 아티스트</p>
                <a className="image__btn" href="/">자세히 보기</a>
            </article>
            <article className="image img2">
                <h3 className="image__title">뮤지컬 엘리자벳 토드</h3>
                <p className="image__desc">2012년 10월, 김준수는 제 18회 한국뮤지컬대상에서 남우주연상과 인기상을 수상했다.</p>
                <a className="image__btn dark" href="/">자세히 보기</a>
            </article>
        </div>
    </section>
  )
}

export default Image