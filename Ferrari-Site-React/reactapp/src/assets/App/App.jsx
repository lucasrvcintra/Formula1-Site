import { useState } from "react";
import React from "react";

import Piloto from "../components/piloto";
import Races from "../components/races";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>Fórmula 1</h1>

      <div>
        <h2>Equipe</h2>
        <div>
          <h3>Ferrari</h3>
        </div>
      </div>
      <div>
        <h2>Pilotos:</h2>
      </div>
      <Piloto></Piloto>
      <h2>Corridas:</h2>
      <Races></Races>
      <h2>Algumas capturas da temporada:</h2>
      <img
        src="src/images/af9b00b5-e4dc-4154-913e-3b507202f24b.jpg"
        className="img-size float-right"
        alt=""
      />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi fugiat
        distinctio labore earum? Inventore quam tempora, eaque, rerum qui
        eveniet blanditiis aliquam aperiam pariatur, sit architecto. Ad
        repudiandae officiis illo ducimus vitae culpa minima animi sit, non odio
        iusto atque nam ipsum mollitia repellat, rerum veritatis ullam iste
        omnis unde sequi molestias commodi nisi quia! Laborum quia numquam
        maiores veritatis qui dignissimos labore, fuga earum veniam et neque
        fugiat vitae.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, culpa
        vero. Placeat, earum nihil ipsam, facere ab blanditiis molestiae culpa
        sequi sint accusamus hic vel vero similique nesciunt asperiores
        laboriosam itaque modi saepe impedit explicabo corporis at commodi
        veniam sunt.
      </p>
      <img
        src="src/images/0b396bd0-cf14-4147-ae72-6773bbb254fd.jpg"
        alt=""
        className="img-size float-left"
      />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem
        odit expedita ut voluptates aliquam voluptatibus iste architecto magnam
        optio rerum repellendus deserunt delectus voluptatem reiciendis libero,
        blanditiis at. Earum id, molestias sint nemo voluptas assumenda vero
        tempore dolor iusto? Labore, veritatis mollitia animi esse suscipit eum
        necessitatibus! Suscipit nobis inventore veritatis expedita numquam unde
        illo culpa!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui odit neque
        iure voluptate eveniet accusantium maxime magni sit et, excepturi
        reiciendis hic vero atque vitae inventore sunt tempora quam quasi.
      </p>
      <img
        src="src/images/b18031d4-1811-43ee-bdae-1724660e1209.jpg"
        className="img-size float-right"
        alt=""
      />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo itaque
        impedit consectetur ducimus laborum eius iste voluptatibus nam ad dicta
        error eos asperiores in cumque dolor consequatur accusantium expedita
        enim eveniet, tenetur voluptas voluptatum? Dignissimos magnam esse fuga
        corporis eligendi vitae delectus quia officiis? Voluptate, cupiditate
        quaerat? Sequi at ipsum eum animi neque delectus fugit, nobis ipsam quos
        libero nihil molestias rem quas dolor assumenda asperiores minus in
        mollitia quasi sed? Culpa dolorum at architecto explicabo, eius eum
        dignissimos ipsam iusto fugit tempora ex voluptate veritatis laborum
        beatae quas vero aut, rem perferendis odio eligendi odit illum, iste
        necessitatibus voluptatibus?
      </p>
    </div>
  );
}

export default App;
