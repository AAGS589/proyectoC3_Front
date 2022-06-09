import '../css/profile.css';
import img1 from '../img/img1.jpg'
import img2 from '../img/img2.jpg'
import img3 from '../img/img3.jpg'
import {useState} from "react";
import axios from "axios";
import React from 'react'
import Gallery from 'react-photo-gallery';
import data from "bootstrap/js/src/dom/data";
import ReactMediumImg from 'react-medium-zoom'
import { ImageViewer } from "react-image-viewer-dv"

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state =
            {
                images_upload:['https://cdn.discordapp.com/attachments/948305576302104668/959297502790713426/img2.jpg'],
                images_saved : [],
                id_user : window.localStorage.getItem("id_user"),
                username: window.localStorage.getItem("user"),
                selectedFile: null,
                image_profile: null
            }


       this.images_saved = []
        axios.post(
            "http://localhost:5000/allimg",JSON.stringify({'id_user':this.state.id_user}),
            {headers: {
                    'Content-Type': 'application/json',
                },}
        ).then(res => {
            if (res.status === 200){
                // alert(res.status)

                this.setState({images_saved:res.data})
                console.log(this.state.images_saved[0])
            }else{
                alert('error ')
            }
            }  )
    }

componentDidMount() {

}

    subir_imagen = () => {
        axios.post(
            "http://localhost:5000/images",JSON.stringify({'images':this.state.images_upload, 'id_user':this.state.id_user}),
            {headers: {
                    'Content-Type': 'application/json',
                },}
        ).then(res => {
            if (res.status === 200){
                alert('Las imagenes se subieron correctamente')
                this.setState({images_saved:res.data})
            }else{
                alert('error ')
            }
        }  )
    }


    onFileChange = event => {
        this.setState({ selectedFile: event.target.files[0], image_profile:event.target.files[0].name});
    };

    onFileUpload = () => {
        console.log(this.state.selectedFile);
        console.log(this.state.image_profile);
    };

    render() {

    return(
        <>

            <body className="body">
                {/**Sección del nadvar*/}

                <div className="collapse" id="navbarToggleExternalContent">
                    <div className="bg-dark p-4">
                        <h5 id="profile_name" className="text-white h4">{this.state.username}</h5>
                       <div>
                           <button type="button" className="btn btn-primary" onClick={this.subir_imagen}>Subir
                               imagenes
                           </button> </div>
                        <div> <button type="button" className="btn btn-danger">Cerrar Sesion</button></div>
                       <img  src={this.state.image_profile}/>
                       <label style={{color:"white"}}>{this.state.image_profile}</label>
                        <div>
                            <input type="file" onChange={this.onFileChange} />
                            <button onClick={this.onFileUpload}>
                                Upload!
                            </button>
                        </div>

                    </div>
                </div>
                <nav className="navbar navbar-dark bg-dark">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarToggleExternalContent"
                                aria-controls="navbarToggleExternalContent" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                </nav>

                {/*Seccion del slider*/}
                {/*<div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0"
                                className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                                aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                                aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={img1} id="imgSlid" alt=""/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Imagen 1</h5>

                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={img2} id="imgSlid" alt=""/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Imagen 2</h5>

                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={img3} id="imgSlid" alt=""/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Imagen 3</h5>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                            data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                            data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>*/}
                <div>
                    <div id="vista-imagenes">
                        {this.state.images_saved.map(image => <ReactMediumImg id="conf-imagen" src={image.src}/>)}
                    </div>
                </div>
            </body>
        </>
    )
}


}
export default Home;


