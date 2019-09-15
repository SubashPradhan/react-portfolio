import React from 'react'
import '../../Components/Style/Home.css'
import Sky from 'react-sky'
import Typist from 'react-typist'

export default function View(props) {
  const {background} = props

  return <div align='center'>
    <div className="sky">
    {background && <Sky
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
        10: "https://www.resourcifi.com/wp-content/themes/resourcifi-child/img/express-min.png",
        11: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYAAAACDCAMAAACz+jyXAAAA4VBMVEX///8AAACu3f97xv8YZ8AWl/YXfdkYY7wWnf38/PySkpJ0w/+y3//s7Oy8vLyZ0//z8/NlZWVCQkK2tra74v+Rz//V1dWpqakjb8NBQUFvb2+bm5tbW1t/f3/k5OQhnPdMTEzx+f/IyMgfHx8AkvZTU1Ojo6PN6v8xMTHn9f/T09Pm5uaLi4t3d3c4ODjr9v8nJycAXr0PDw/F5v/Z7/+j1/8ig9rV4/Nls/hfkdDG1+4loPdFgcqduuFvndVNrvi3y+g1eMeRsN1PhMunwuUAWrzN3vFar/gAddcAbNZNneZmsmkhAAANgElEQVR4nO1dbWPiuBGG7O1Sk5hAeFsIsLxsEkKAEELau+62u9frdXv3/39Qgz0jy9JoLBOwQ6rny90axZb16JkZSTNQKLDYvP9kwJe/fjTib/xNHezh/fz5PY2/fCj9RKP0S969fkt4TE/Aw9/z7vSbwpe0BJS+jvLu85vCk0ECRgIe/pF3l98Wbg0SMJug+7y7/MbwjpaAiYCHf+bd4beG23QE/ORi0H3jG8mAgYDSL17e/X1zOEujgN9dDLp3jEg3TBNQ+ph3b98impQNoglwMeghcP/JloCS2wY6CKhIlCTAxaCHwY2tAh6cAA6Db3YElL7m3dG3ioZug0gCvufd0beKez0SJQgo/eq2gQ4FPRIlCHj4V97dPEacNDlsoNWtlQlCAdw2ONzk9aqvE5t3DE6fsJl2NKkTEMWgjyccbvN50VeLJ46BdzhaWiRKKAC3gUbs+D/m9aKvFZtTTgIn0Gr0I4mA0q94xxsngFR4YhnA3eWzzwkEPHyHlqMzJ4BU4L0ADpj3iScgikE3rADcib0OVgJNHDElElUJiGJQJ4C0uGUlgFHj5hNPANr2W278z9xSjQIvAWwVj0QVAqJ0ODYGdWsAEqwERCT6yBEgYtB75wF2ACcBEYnG90TjBJR+w6FlBeA8gAEjVgJot0/MBDz8G+/0xHkAJwATTjgJNKDR7SezAnC5wMagzgMYwUsAJ658NBkjQMSgXsN5gN1wxgVCIhI1KUCcxTsB7Ip7TgFUJCoTEMWgTgA7o8F5ATwWaNAEPFjFoEcoAN+vZvYs1guIY4EvFAGlr+iCuRj0+EIgf95ZdS4zy3VtcAzgYiwq15AIiGJQTgAb04NfKwbr4hZLWxF43su44iRARKIRAVE6HHsQcHRZ07ViiLlF22p9vqjVat1+ueLv/MBHLhDC4RORaESAOIpkDwKOTgCzNRAwSRpSr9IpSlgvxrt5jlGTkQBuImwIAmxi0MbReYCxGNE7vmGrV1RR3+2RnATEsQCWawgCopIMLgY9OgFYK2CmDX9xvaO55SQgFmMNVQEiHY47CDiTn1PtDQP0KKW2O+FnCdPu8PCuYDgX7HDOJjoBNl6DBCsBaDP6FicgKsngYtC4ABbQ0RbRh2X4UW3Xd9gfWlYCWIthX171hqtAANR7WYH1AhiJwtEkEiBKMrhFWCM+iSrmmVKFj653fYdE+K1ZvdydjpNbDrrL1bLPj/8l9PeiXti+o+e1ysMXTB5GAuJY4D5GgF0MqngAH2R7pfcAuTmYBfIguqzYNL5rJURA1SHMfsmaVl/Sd84L4LFAGIkCAdE+KCcA9TEwCKuB1oF++EnnBe/Aw+ulICARYKZ2NzoqbhgJYCT6KCvg9//AVS4G1UKgdtEwCjijLvf1Qhr2SwAIdri3LSOPkYDYE/0RESDS4UZMDKoJoHAHrquvfoAzaravF9LfcK8EtPceMjASEJFokCQHBHyHa1wMqicjoiFeqR9cw4w63L7FayeA8wLn0CQoHA4IiNLhUglADHRRdQLDFwbSyXj1BNyYCRDHAuefgQDhgrkYlMrGvSuStt6Hyzv7NH8wq7fb48GdWUJAgEUYaoEDEOCdmwnAY4ENKuABBcDEoJQACoUp2XPwaVMxfHfz8hbX8nhWgmtzYgRn8wtgcNVtqx8OyiHgyd0yYt5W71KOYc5MB46AQZ/+c+86vG7aMOLS1XEy//w5ICDaB00pAGGDlEAUgtByNBgQlcpRxkJtBGjh3gE4cuUFx0UTlFDgWv2c2VrjCMA1pWpPW+uE2zISwNn8GBIg0uFSCwDDnbglqF6oF6HZhUyAxlKIurYpE39zMwGKAqwI8APgQrjn+QKRWGGmqDEqyLxjDF25dHW4++jH52cCSr/BX3jmg4AnQzZuFUxxV74Iw7301CsWBOCegIya/GdmAhQbYUNAlbpPgGm0dsZVvRJpdMn+y2AkgJHoyZYAcRTJLMIMAigUytA7YhAlUqwJEOO/Xi2nQgsLqYWZAGW74WUE1KLZUwV3E480PGjILHUYL9CE23tbE/QRzwiYGNSYjj4gpgcEoZJZsiVAjO689dxDvz7Ux67VDbBYhZ9cLbqAvmoiavDBYrIDAbLdg9VOfMsLuqotgWQwdXsYiTbffxAxKLMIY7Jx19r08MOxWUkz0pIAH84Ep4JOsL9TaWPMCyHWAR5C7Zm4frEDAfI2LtigVWx3zuDCYmC8AC7GNl8+lHAflDkIYOoxoCPd6P2hv7LdsCQADJBEHY6ztq2dZiG2CwFyVIG7vvKzcLeLX+qY09XFscDpfzEdjlmEcenoY22OzvX3tSOgSrwoLvXUx6YhoGMkoDAIUMUoqDpAxPQEXZXjXAise/xmi7liQxwLPP5hEYNyJak+nH0JZ+TB+8o+0Y4ADOxiL9WjZ9qeCAAkrITrMMmkjoGLT9ruZdLV0ar8CS6YOQjg6zHU6QFuuSe3sSLAg8AuHs9XNJ7CxlkS4E20WQAxQNL+9a3ZBuGoWlSl8qkoaIPw39fE61oRUF0pWgr/NHz5rqL1TAnAmD8KjWC3K/nAyewFmvGGTEVAQjauB3EQRi7hyExiyxYrAkA6q/isgsjoQonysyUAJtmVp/yBtlOlganbi48rE4Mm5WItYp0ZTIkZa0UAWNoL5fbh1pB67JktATALJmiDwFpOLLZ7zV7gPNbOLIDEijwMOz35X/G5YUUALKqX9baEen0ZFxgOQaYEYGSHb3UXzrKesX0Ec67uqXzEy+yDJiYjxhdeMK5xO2JFAKYZ0VAmW8YEQNR5Ff9nsgUqMBKIvkSowMWgFvUYMBah8wx9prJCtyKg+4oJKEAvvFjfrTKomSytKLxnEqItjnXB6gSBKAy1snI9fgL6sXtAZGbx7AIngWiL0xyD2hQkwWo18J6wplT2CPdggvL1ARgHhYHoLPGGMpiKDTG7jQKwKkiC5IggrSn83ytlgWJFADi61fUlgWvljlkT4IcbSuGpTDjLVrY1HMbS1egbVIwCsEtHj9ZeEIRqx3c2BMBdllaPzJoA7O52ksEplPURvlkCGImaY1C7xB5YQvWFUtX42IoA+NvESpYAmRMAZme7+QMm1z4hw1y6Gk5w8yLMtiQ1jNVXHozqVP3cigBMZrF6scwJgN2fjmhtbYEYCUAkajwIsC5JLePEn5AWCAkY8ntBQ/UKg+wJABdVxbB7wTVWYExXP91uxZkXYdYFSWCDygPDHKYUoB9qQwS1tppavcRRFdgPAeNwz6tduFtZU4/wjBLY1hwZXfCZdWpnNdyw6YbbOXpJLhAwHWiXZAJm+iUztA1KM/ZDAJxz9GHZk66AzFyxcc8ko6SoyIPAbAl9VKGnD81WxGhjnWJ8ie9fUpIAizCx6Nx+CIAnTv3wv5arMIBxOfy8GNuDAKIRpi1QYQAnGqLXFVGTVabuIi2kq+0pwWiUQCFtZ5tGGM6EGZthRQD0rhW6qpSZ92YJmGPQVCWpUZFbca0fE1Ux3bAcTOaxtOsQszeYZVTsVAJr5VfKBkqjJ9YqLd+/G9dryg7guIKAvJ45XKnrBT1WBFRDffeCydRJW0lv9AKPJgvUSGXk5tGQUvWgIuFq1ev2wheZrHUCClFe6KozHC7RTi31MZNy6CbT6Wqt3euiaILuY+yyo8vSPVJn3psqNk7PTQSkq8mWEtYoS0Dkf8yWxGh4V3rDgFTilkOt1YpIDyOgn6TbESAn5aWu/TGlqxsJOEu+pwxffM8CvZJtK4MwGYNvVKej/oUBz5hTh9/VjtZO9oz7JwCLn5+xTmhJwCABIwFpv5RAmHWiaHWLcmwMtgHpkCTAU6l6Xr8Z1sa+NsZy+LR/E4Rrx+JutT90IGQiwJiNa8J4GX5xwdIUbMyiuV0LRrQ/7XQ6U6KU+1pWwXBO2H/xUKnlpBu3fbXlBY2pfpBVn24/WFLRlozBdKgnqFiDLloyEZD+5wH0xHoF1dZlbXhxtahD2lk1aE4al0Gl/9x0WOvXW3zmjTeo93vPN61djgfKg30jiCjN9IHyNH8Qim63elZSAgYCUgvg/wRjkxGzAZmubiDA/T4GDfA6O36dFhUI0QQ4AdCA1KUkX2ECla5OE+AEQAK+/GnChAU8CC9AEuAEQAK/1Gk3D7AFIQGSAPf7GAQGuApIqAngQCyHKQLczwNo8OoLUTL4ku+00QMhigAnAAXyJtD6ZV+OcK4yQBDgBKBitrfx170AQYATgApPnHZc7RwAIdSKDZ0AJwAdsA3aud7d/yLuEwlwAtAR7Pl1K3v5RjMlV1cj4Ah/HuDwqPSJc8wdsUlQwNF9OfTRIe4FVAKcAA6Oe04Bx/f7GEeImBdQCHACyAD3jAKcALKALIE4AU4AmWBkUoDzABlBKlqKEeAEkBFGBgUc3S8kHS0iLyAT4ASQGaJ0dYkA5wEyhKjbkwhwAsgSugKcADJFQyPg+H4i7KiBXkAQkDId3eGlgKIlQYATQMbw4gpIV5DksAc8xghwAsgcoRcAApwHyAFB0RIQ4ASQA4IfGwsJcB4gF9wIApwA8kETCHDp6Dnh2QsEBDgB5ATvPCDACSA3bE63BLiCpPzQPD13AsgTm2cFOAHkifOmS0fPFZumS0fPF24RvBf8D7DJSzR4/x2bAAAAAElFTkSuQmCC",
        12: "https://www.pngfind.com/pngs/m/168-1682595_source-ericsaupe-com-report-mysql-logo-png-postgresql.png",
        13: "https://cdn.imgbin.com/17/2/7/imgbin-docker-logo-kubernetes-software-deployment-engineer-logo-docker-logo-qesaY9bNnpr9RwKq2cbqrtZf6.jpg",
        14: "https://cdn4.iconfinder.com/data/icons/scripting-and-programming-languages/512/JQuery_logo-512.png"
      }}
      how={40}
      time={20}
      size={'100px'}
    />}
  </div>
    <img src='Subash.JPG' alt='Subash' className='my-picture' />

    <Typist>
    <div className='welcome-text'>
      Hi I am Subash Pradhan !<br />
      A Full Stack Developer !<br />
      Welcome To My PortFolio !<br />
      Nice To Meet You !
   </div>
   </Typist>

  </div>


}