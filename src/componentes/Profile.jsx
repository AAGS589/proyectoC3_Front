import '../css/login.css';
import img1 from '../img/img1.jpg'
import img2 from '../img/img2.jpg'
import img3 from '../img/img3.jpg'
import {useState} from "react";
import axios from "axios";
import React, { Component } from "react";
import Gallery from 'react-photo-gallery';
import data from "bootstrap/js/src/dom/data";

export default function Profile() {
    let username = window.localStorage.getItem("user")
    let id_user = window.localStorage.getItem("id_user")
    let images_download = [{'src': 'C:/Users/user0001/Downloads/imagenes/imagen(1).jpg'}]

    let images = ['C:/Users/user0001/Downloads/imagenes/imagen(1).jpg',
        'C:/Users/user0001/Downloads/imagenes/imagen(2).jpg',
        'C:/Users/user0001/Downloads/imagenes/imagen(3).jpg',
        'C:/Users/user0001/Downloads/imagenes/imagen(4).jpg',
        'C:/Users/user0001/Downloads/imagenes/imagen(5).jpg',
        'C:/Users/user0001/Downloads/imagenes/imagen(6).jpg',
        'C:/Users/user0001/Downloads/imagenes/imagen(7).jpg',
        'C:/Users/user0001/Downloads/imagenes/imagen(8).jpg',
        'C:/Users/user0001/Downloads/imagenes/imagen(9).jpg',
        'C:/Users/user0001/Downloads/imagenes/imagen(10).jpg',
        'C:/Users/user0001/Downloads/imagenes/imagen(11).jpg',
        'C:/Users/user0001/Downloads/imagenes/imagen(12).jpg',
        'C:/Users/user0001/Downloads/imagenes/imagen(13).jpg',
        'C:/Users/user0001/Downloads/imagenes/imagen(14).jpg',
        'C:/Users/user0001/Downloads/imagenes/imagen(15).jpg',
        'C:/Users/user0001/Downloads/imagenes/imagen(16).jpg',
        'C:/Users/user0001/Downloads/imagenes/imagen(17).jpg',
        'C:/Users/user0001/Downloads/imagenes/imagen(18).jpg',
        'C:/Users/user0001/Downloads/imagenes/imagen(19).jpg',
        'C:/Users/user0001/Downloads/imagenes/imagen(20).jpg',
        'C:/Users/user0001/Downloads/imagenes/imagen(21).jpg',
        'C:/Users/user0001/Downloads/imagenes/imagen(22).jpg',
        'C:/Users/user0001/Downloads/imagenes/imagen(23).jpg',
        'C:/Users/user0001/Downloads/imagenes/imagen(24).jpg',
        'C:/Users/user0001/Downloads/imagenes/imagen(25).jpg',
        'C:/Users/user0001/Downloads/imagenes/imagen(26).jpg',
        'C:/Users/user0001/Downloads/imagenes/imagen(27).jpg',
        'C:/Users/user0001/Downloads/imagenes/imagen(28).jpg',
        'C:/Users/user0001/Downloads/imagenes/imagen(29).jpg',
        'C:/Users/user0001/Downloads/imagenes/imagen(30).jpg',
        'C:/Users/user0001/Downloads/imagenes/imagen(31).jpg',
        'C:/Users/user0001/Downloads/imagenes/imagen(32).jpg',
        'C:/Users/user0001/Downloads/imagenes/imagen(33).jpg',
        'C:/Users/user0001/Downloads/imagenes/imagen(34).jpg',
        'C:/Users/user0001/Downloads/imagenes/imagen(35).jpg',
        'C:/Users/user0001/Downloads/imagenes/imagen(36).jpg',
        'C:/Users/user0001/Downloads/imagenes/imagen(37).jpg',
        'C:/Users/user0001/Downloads/imagenes/imagen(38).jpg',
        'C:/Users/user0001/Downloads/imagenes/imagen(39).jpg',
        'C:/Users/user0001/Downloads/imagenes/imagen(40).jpg',
        'C:/Users/user0001/Downloads/imagenes/imagen(41).jpg',
        'C:/Users/user0001/Downloads/imagenes/imagen(42).jpg',
        'C:/Users/user0001/Downloads/imagenes/imagen(43).jpg',
        'C:/Users/user0001/Downloads/imagenes/imagen(44).jpg',
        'C:/Users/user0001/Downloads/imagenes/imagen(45).jpg',
        'C:/Users/user0001/Downloads/imagenes/imagen(46).jpg',
        'C:/Users/user0001/Downloads/imagenes/imagen(47).jpg',
        'C:/Users/user0001/Downloads/imagenes/imagen(48).jpg',
        'C:/Users/user0001/Downloads/imagenes/imagen(49).jpg',
        'C:/Users/user0001/Downloads/imagenes/imagen(50).jpg',]
    const pack_images=[]

    const obtener_imagen = async (e) => {
        const res = await axios.post(
            "http://localhost:5000/allimg",JSON.stringify({'id_user':id_user}),
            {headers: {
                    'Content-Type': 'application/json',
                },}
        );
        console.log(res);
        if (res.status === 200){
            alert(res.data)
            pack_images.push(res.data)
            console.log(pack_images)
        }else{
            alert('')
        }
    };

    const subir_imagen = async () => {
        const res = await axios.post(
            "http://localhost:5000/images",JSON.stringify({'images':images, 'id_user':id_user}),
            {headers: {
                    'Content-Type': 'application/json',
                },}
        );
        console.log(res);
        if (res.status === 200){
            alert(res.data)
            obtener_imagen()

        }else{
            alert('')
        }
    };
    return (

        <div className="body">
            {/**Sección del nadvar*/}

            <div class="collapse" id="navbarToggleExternalContent">
                <div class="bg-dark p-4">
                    <h5 id="profile_name" class="text-white h4">{username}</h5>
                    <a href="#" className="nav" onClick={subir_imagen}>Subir imagenes</a>
                </div>
            </div>
            <nav class="navbar navbar-dark bg-dark">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>

            {/*Seccion del slider*/}
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={img1} id="imgSlid" alt="" />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Imagen 1</h5>

                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={img2} id="imgSlid" alt="" />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Imagen 2</h5>

                        </div>
                    </div>
                    <div class="carousel-item">
                        <img  src={img3} id="imgSlid" alt="" />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Imagen 3</h5>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button  class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span  class="visually-hidden">Next</span>
                </button>
            </div>
            <div>
                <div >
                    <Gallery photos={images_download} />
                </div>
            </div>
        </div>

    )
}

