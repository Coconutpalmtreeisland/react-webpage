import React from 'react'

import card01 from "../assets/img/card01.jpg";
import card02 from "../assets/img/card02.jpg";
import card03 from "../assets/img/card03.jpg";

const cardInfo = [
    {
        img: card01,
        title: "Ballad & Musical Concert with Orchestra",
        desc: "뮤지컬을 시작한 후 매년 연말 시즌에 열리는 콘서트이다. 1부는 해당 년도에 한 뮤지컬 중 주요 넘버를 골라 뮤지컬을 요약한 구성이다. 1부와 2부 사이에 팬들의 3가지 소원을 들어주는 지니타임이 있으며, 2부는 김준수의 발라드나 OST를 부르거나, 타가수의 발라드를 커버한다. 앵콜로 Incredible이나 사쿠란보 같은 댄스곡을 넣는다.",
    },
    {
        img: card02,
        title: "XIA Fanmeeting Tour <COCOTIME>",
        desc: "데뷔 20주년을 맞아 개최된 콘서트로 팬덤 이름 '코코넛'과 시그니처 코너 '지니타임'을 합쳐 코코타임이라는 이름으로 지어진 팬미팅 콘서트이다. 각 나라를 돌며 하는 투어 형식으로 한국 뿐만 아니라 일본, 대만에서도 개최되었다. 오직 팬들만을 위한 vcr과 김준수에 대해 알아볼 수 있는 대화와 소통을 통해 추억을 공유하며 앞으로의 미래도 함께 꿈꾸는 시간을 선사했다.",
    },
    {
        img: card03,
        title: "PALMTREE ISLAND GALA CONCERT",
        desc: "김준수가 소속사의 대표로서 콘서트를 기획하고 참여하는 콘서트이다. 자신의 소속사 배우들과 함께 대표 넘버나 부르고 싶었던 넘버 등을 부르는 다양한 구성으로 되어있다. 이 콘서트는 김준수가 소속사의 배우만으로 하나의 콘텐츠를 만들 수 있다는 바람을 가지고 시작한 콘서트이다. 소속 배우들의 다양한 모습과 가족같은 모습을 볼 수 있으며 올해로 2회를 맞이했다.",
    }
]

const Card = ( props ) => {
  return (
    <section id="cardType" className={`card__wrap ${props.element}`}>
        <h2>{props.title}</h2>
        <p>
            김준수의 브랜드 콘서트를 소개하는 사이트입니다.<br />
            NEXON Lv1 Gothic OTF 22px 150% #666
        </p>
        <div className="card__inner container">
            {cardInfo.map((card, key) => (
                <article key={key} className="card">
                    <figure className="card__header">
                        <img src={ card.img } alt={ card.title } />
                    </figure>
                    <div className="card__body">
                        <h3 className="title">{ card.title }</h3>
                        <p className="desc">{ card.desc }</p>
                        <a href="/" className="btn">더 자세히 보기
                            <span aria-hidden="true">
                            <svg width="51" height="8" viewBox="0 0 51 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M50.3536 4.35355C50.5488 4.15829 50.5488 3.84171 50.3536 3.64645L47.1716 0.464466C46.9763 0.269204 46.6597 0.269204 46.4645 0.464466C46.2692 0.659728 46.2692 0.976311 46.4645 1.17157L49.2929 4L46.4645 6.82843C46.2692 7.02369 46.2692 7.34027 46.4645 7.53553C46.6597 7.7308 46.9763 7.7308 47.1716 7.53553L50.3536 4.35355ZM0 4.5H50V3.5H0V4.5Z" fill="black"/>
                                </svg>
                            </span>
                        </a>
                    </div>
            </article>
            ))}
        </div>
    </section>
  )
}

export default Card