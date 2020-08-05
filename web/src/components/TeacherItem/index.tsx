import React from "react";
import whatsappdIcons from "../../assets/images/icons/whatsapp.svg";
import "./styles.css";

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars2.githubusercontent.com/u/8250203?s=460&u=b5827e9a847a64d1ea36e98664ee5811ae558710&v=4"
          alt="Raphael Martins"
        />
        <div>
          <strong>Raphael Martins</strong>
          <span>Matematica</span>
        </div>
      </header>
      <p>
        Entusiasta das melhores tecnologias de química avançada.
        <br />
        <br />
        Apaixonado por explodir coisas em laboratório e por mudar a vida das
        pessoas através de experiências. Mais de 200.000 pessoas já passaram por
        uma das minhas explosões.
      </p>
      <footer>
        <p>
          Preco/Hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappdIcons} alt="whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
