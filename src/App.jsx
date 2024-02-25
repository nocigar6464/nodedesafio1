import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Importar estilos de Bootstrap
import "./components/CSS/App.css";
import Header from "./components/Header";
import Mycard from "./components/Mycard";
import Footer from "./components/Footer";
import Tags from "./components/Tags";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function App() {
  //logica javascript
  return (
    //html
    <Container>
      <Header />
      <div className="Tarjetas">
        <Mycard
          imageUrl="https://images.pexels.com/photos/4681107/pexels-photo-4681107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          dogname="Bartolo"
          dogdescription="Lleno de energía y listo para jugar. ¡Dale a Bartolo el hogar amoroso que se merece!"
          tagColor="success"
          tagText="Husky"
        />

        <Mycard
          imageUrl="https://images.pexels.com/photos/19698742/pexels-photo-19698742/free-photo-of-cumpleanos.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          dogname="Messi"
          dogdescription="Es jugueton, amigable y se lleva bien con niños y otros animales. Haz de Messi parte de tu familia hoy mismo!"
          tagColor="primary"
          tagText="Bobtail"
        />
        <Mycard
          imageUrl="https://images.pexels.com/photos/4588047/pexels-photo-4588047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          dogname="Gohan"
          dogdescription="Un perro de tamaño mediano con un corazón gigante."
          tagColor="danger"
          tagText="Shar Pei"
        />
        <Mycard
          imageUrl="https://images.pexels.com/photos/12050840/pexels-photo-12050840.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          dogname="Princesa"
          dogdescription="Es una compañera leal y cariñosa que adora los mimos y abrazos"
          tagColor="warning"
          tagText="Beagle"
        />
      </div>

      <Footer />
    </Container>
  );
}

export default App;
