import React, { Component } from 'react'
import ReactBnbGallery from 'react-bnb-gallery'
import gitgudImage from '../images/gitgud.png'
 
const photos = [{
  photo: gitgudImage,
  caption: "Git-Gud Real world Project",
  subcaption: "GraphQl, React, Redux,Apollo",
  thumbnail: gitgudImage,
}, {
  photo: "https://source.unsplash.com/c77MgFOt7e0/1144x763",
  caption: "La Habana, Cuba",
  subcaption: "Photo by Gerardo Sanchez on Unsplash",
  thumbnail: "https://source.unsplash.com/c77MgFOt7e0/100x67",
}, {
  photo: "https://source.unsplash.com/QdBHnkBdu4g/1144x763",
  caption: "Woman smoking a tobacco",
  subcaption: "Photo by Hannah Cauhepe on Unsplash",
  thumbnail: "https://source.unsplash.com/QdBHnkBdu4g/100x67",
}];
 
class Portfolio extends Component {
    state = { galleryOpened: false };
    toggleGallery = this.toggleGallery.bind(this);
  
    toggleGallery() {
      this.setState(prevState => ({
        galleryOpened: !prevState.galleryOpened
      }));
    }
 
  render () {
    return <div>
      <button onClick={this.toggleGallery}>Welcome To My Portfolio</button>
      <ReactBnbGallery
        show={this.state.galleryOpened}
        photos={photos}
        onClose={this.toggleGallery} />
    </div>
  }
}

export default Portfolio