"use client";
import React from "react";
import SampleImg from "../assets/album/sandwich.jpg";
import { styled } from "styled-components";
import { Gallery } from "react-grid-gallery";
import { Typography } from "@mui/material";
import Photo from "../assets/album/food.jpg";

const images = [
  {
    src: "https://cdn.pixabay.com/photo/2016/11/29/09/00/doughnuts-1868573_640.jpg",
    width: 320,
    height: 200,
    isSelected: false,
    caption: "After Rain (Jeshu John - designerspics.com)",
  },
  {
    src: "https://images.pexels.com/photos/3940535/pexels-photo-3940535.jpeg?auto=compress&cs=tinysrgb&w=600",
    width: 320,
    height: 212,
    tags: [
      { value: "Food", title: "Food table" },
      // { value: "People", title: "People" },
    ],
    alt: "Boats (Jeshu John - designerspics.com)",
  },

  {
    src: "https://images.pexels.com/photos/5738399/pexels-photo-5738399.jpeg?auto=compress&cs=tinysrgb&w=600",
    width: 300,
    height: 212,
  },
  {
    src: "https://cdn.pixabay.com/photo/2015/11/19/10/38/food-1050813_640.jpg",
    width: 420,
    height: 174,
    // isSelected: true,
    caption: "Table eating",
  },
  {
    src: "https://cdn.pixabay.com/photo/2014/08/14/14/21/shish-kebab-417994_640.jpg",
    width: 220,
    height: 212,
    tags: [
      { value: "food", title: "Meat Skewer" },
      // { value: "People", title: "People" },
    ],
    alt: "Boats (Jeshu John - designerspics.com)",
  },

  {
    src: "https://images.pexels.com/photos/5638732/pexels-photo-5638732.jpeg?auto=compress&cs=tinysrgb&w",
    width: 320,
    height: 212,
  },
  {
    src: "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=600",
    width: 320,
    height: 212,
  },
  {
    src: "https://images.pexels.com/photos/3940535/pexels-photo-3940535.jpeg?auto=compress&cs=tinysrgb&w=600",
    width: 320,
    height: 212,
    tags: [
      { value: "Food", title: "Food table" },
      // { value: "People", title: "People" },
    ],
    alt: "Boats (Jeshu John - designerspics.com)",
  },

  {
    src: "https://images.pexels.com/photos/5738399/pexels-photo-5738399.jpeg?auto=compress&cs=tinysrgb&w=600",
    width: 300,
    height: 212,
  },
  {
    src: "https://cdn.pixabay.com/photo/2015/11/19/10/38/food-1050813_640.jpg",
    width: 420,
    height: 174,
    // isSelected: true,
    caption: "Table eating",
  },
  {
    src: "https://cdn.pixabay.com/photo/2014/08/14/14/21/shish-kebab-417994_640.jpg",
    width: 220,
    height: 212,
    tags: [
      { value: "food", title: "Meat Skewer" },
      // { value: "People", title: "People" },
    ],
    alt: "Boats (Jeshu John - designerspics.com)",
  },

  {
    src: "https://images.pexels.com/photos/5638732/pexels-photo-5638732.jpeg?auto=compress&cs=tinysrgb&w",
    width: 320,
    height: 212,
  },
  {
    src: "https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=600",
    width: 320,
    height: 212,
  },
];

const PhotoGrid = () => {
  return (
    <PhotoGridStyles>
      <Typography className="title">Featured Photos</Typography>
      <Gallery images={images} />
    </PhotoGridStyles>
  );
};

const PhotoGridStyles = styled.div`
  margin-top: 5em;
  .title {
    margin-bottom: 1.5em;
  }
`;

export default PhotoGrid;
