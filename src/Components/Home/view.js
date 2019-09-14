import React from 'react'
import '../../Components/Style/Home.css'
import Typist from 'react-typist'
import Sky from 'react-sky';import styled, { keyframes } from "styled-components";
import BounceInUp from "@bit/formidablelabs.react-animations.bounce-in-up";
const BounceInUpAnimation = keyframes`${BounceInUp}`;
const BounceInUpDiv = styled.div`
  animation: infinite 5s ${BounceInUpAnimation};
`;

export default function View() {
  return <div align='center'>
    <Sky
      images={{
        0: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png',
        1: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png",
        2: "https://www.smalsresearch.be/wp-content/uploads/2014/07/js5logo.png",
        3: "https://material-ui.com/static/brand.png",
        4: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png",
        5: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png",
        6: "https://banner2.kisspng.com/20180511/zie/kisspng-redux-react-javascript-vue-js-single-page-applicat-5af5cde3d3a5e8.2671715915260584678669.jpg",
        7: "http://pngimg.com/uploads/github/github_PNG20.png",
        8: "https://miro.medium.com/max/1200/1*GkrYGz_r9W6AVgEloQpJFQ.png",
        9: "https://library.kissclipart.com/20181123/oyq/kissclipart-sql-db-clipart-microsoft-azure-sql-database-d8fe86afd77ee124.jpg",
        10: "https://www.resourcifi.com/wp-content/themes/resourcifi-child/img/express-min.png"
      }}
      how={40}
      time={15}
      size={'100px'}
      // background={'palettedvioletred'}
    />
    {/* <Typist> */}
    <BounceInUpDiv>
      
    <img src='Subash.JPG' alt='Subash' className='my-picture' />
    </BounceInUpDiv>
    <Typist.Delay ms={5000}/>
      <div className='welcome-text'>
        Hi I am Subash Pradhan !<br />
        A Full Stack Developer !<br />
        Welcome To My PortFolio !<br />
        Nice To Meet You !
   </div>
    {/* </Typist> */}
  </div>


}