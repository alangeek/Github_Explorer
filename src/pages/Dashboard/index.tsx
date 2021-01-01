import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="#teste">
          <img
            src="https://avatars2.githubusercontent.com/u/48631681?s=460&u=365834727d860946ad2b2a135dec02a6cf97ff6c&v=4"
            alt="Alan Christian"
          />
          <div>
            <strong>alangeek/alanfoda</strong>
            <p>Projeto Open source de buscas de informaçãoes de projetosp</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="#teste">
          <img
            src="https://avatars2.githubusercontent.com/u/48631681?s=460&u=365834727d860946ad2b2a135dec02a6cf97ff6c&v=4"
            alt="Alan Christian"
          />
          <div>
            <strong>alangeek/alanfoda</strong>
            <p>Projeto Open source de buscas de informaçãoes de projetosp</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="#teste">
          <img
            src="https://avatars2.githubusercontent.com/u/48631681?s=460&u=365834727d860946ad2b2a135dec02a6cf97ff6c&v=4"
            alt="Alan Christian"
          />
          <div>
            <strong>alangeek/alanfoda</strong>
            <p>Projeto Open source de buscas de informaçãoes de projetosp</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
