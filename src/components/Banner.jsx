import React from 'react'

const Banner = ( props ) => {
  return (
    <section id="bannerType" className={`banner__wrap ${props.element}`}>
        <h2 className="blind">배너 영역</h2>
        <div className="banner__inner">
            <h3 className="title">{props.title}</h3>
            <p className="desc">
                더 다양한 포트폴리오는 사이트를 통해 제공하고 있습니다.
                <a href="/" title="유튜브 페이지 이동">incredorable12.dothome.co.kr</a>
            </p>
            <span className="small">배너 유형01</span>
        </div>
    </section>
  )
}

export default Banner