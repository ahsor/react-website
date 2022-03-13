import React from 'react'
import main from '../images/main.jpg'
import con11 from '../images/con1_01.jpg'
import con12 from '../images/con1_02.jpg'
import con31 from '../images/con2_01.jpg'
import con32 from '../images/con2_02.jpg'
import con33 from '../images/con2_03.jpg'
import './Home.css'

const Home = () => {
  return (
    <>
       <section className='homeSection'>
          <div  className='mainBanner'>
            <img src={main} />
          </div>
          <div className='content content01'>
              <div className='box11 animate__animated  animate__fadeInLeft animate__slower'>
                  <img src={con11} />
              </div>
              <div className='box12'>
                  <h2 className='box11 animate__animated animate__fadeInUpBig animate__slower'> BUSINESS TO BUSINESS </h2>
                  <h3 className='box11 animate__animated animate__fadeInUpBig animate__delay animate__slower'>맞춤정장 1위 루쏘소는 신뢰할 수 있는 B2B서비스를 제안합니다.</h3>
                  <p className='box11 animate__animated animate__fadeInUpBig animate__delay animate__slower'>
                      기업 이미지에 맞는 직원들의 옷차림은 <br/> 
                      현대사회의 중요한 비지니스 전략 중 하나입니다.
                      <br />
                      루쏘소는 단체의 성격별, 회사의 직종별 <br />
                      원단의 컨택부터 디자인 컨설팅, 제작 후 발송, 맞춤 후 <br />지속적인 AS와 관리까지 체계적으로 도와드립니다.
                  </p>
              </div>
          </div>
          <div className='content content02'>
              <div className='box21'>
                  <h2> DESIGN IS OPTION, FIT IS FACT </h2>
                  <h3>수트의 핏은 기술이자 팩트입니다. </h3>
                  <p>
                    루쏘소의 가장 큰 자산은 지난 15년간 선택해주신 <br />
                    약 30만여 고객님들의 사이즈 데이터입니다
                    <br />

                    우리는 이 데이터를 기반으로 <br />
                    고객님들의 나이대와 체형별로 나누어 분석하고 <br />
                    그에 맞는 각각의 루쏘소만의 패턴을<br />
                    제작하여 최적의 핏의 옷을 만듭니다.
                  </p>
              </div>
              <div className='box22'>
                  <img src={con12} />   
              </div>
          </div>
          <div className='content content03'>
              <div className='box31'>
                  <img  src={con31} />
              </div>
              <div className='box32'>
                  <img  src={con32} />
              </div>
              <div className='box33'>
                  <img  src={con33} />
              </div>
          </div>
          <div className='content content04'>
              <h2> TREND, ADVICE <br /> AND CRAFTSMANSHIP  </h2>
              <p>
              루쏘소는 모든 남성들의 라이프스타일을 읽고 트렌드를 선도하며 <br />
              패션 제작 뿐만 아니라 함께 누리고 즐기는 삶 속의 패션 문화 창조에 이르기까지를 생각하는 <br />
              패션문화 토털 솔루션 브랜드를 꿈꿉니다<br /><br />

              또한 루쏘소는 국내 외 모든 가맹점과 제일모직 등 협력사와의 상생 협력에 힘쓰며<br />
              크리에이티브한 젊은 인재 양성, 사라져가는 장인들의 고용 창출 등<br />
              다양한 이해관계자들과 지역사회를 배려하는 사회적 책임과 성장을 함께 추구하고 있습니다
              </p>
          </div>
       </section>

    </>
  )
}

export default Home