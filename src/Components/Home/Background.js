import React, { Component } from "react"
import Sky from 'react-sky'

class Background extends Component{
  state = { background: '' }
  render() {
    setTimeout(function () {
      this.setState({
        background: 'true'
      })
    }.bind(this), 6000)
    return <div>
      {this.state.background && <Sky
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
          11: "https://packagecontrol.io/readmes/img/400c0120521ea01b18587b44befe61e65a590f6e.png",
          12: "https://www.pngfind.com/pngs/m/168-1682595_source-ericsaupe-com-report-mysql-logo-png-postgresql.png",
          13: "https://cdn.imgbin.com/17/2/7/imgbin-docker-logo-kubernetes-software-deployment-engineer-logo-docker-logo-qesaY9bNnpr9RwKq2cbqrtZf6.jpg",
          14: "https://cdn4.iconfinder.com/data/icons/scripting-and-programming-languages/512/JQuery_logo-512.png"
        }}
        how={50}
        time={15}
        size={'100px'}
      />}
    </div>

    }
  }
// }

export default Background