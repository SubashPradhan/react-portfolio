import React, { Component } from 'react';
import View from '../Portfolio/view';
import gitgudImage from '../images/gitgud-1.png'
import gitgudThumbnail from '../images/gitgud.png'

const IMAGES =
  [{
    src: gitgudImage,
    thumbnail: gitgudThumbnail,
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    isSelected: true,
    caption: "Real world project"
  },
  {
    src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
    thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    tags: [{ value: "Ocean", title: "Ocean" }, { value: "People", title: "People" }],
    caption: "Boats (Jeshu John - designerspics.com)"
  },

  {
    src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
    thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212
  }]
export  default class Portfolio extends Component {
  render() {
    return <View images={IMAGES} />
}
}