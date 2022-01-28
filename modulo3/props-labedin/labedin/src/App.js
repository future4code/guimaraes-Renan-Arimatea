import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C4D03AQEG4WMoGB_Juw/profile-displayphoto-shrink_800_800/0/1637696224318?e=1648684800&v=beta&t=HbMhibtYoo0DAcRgcw3MzCA4khXQFHbVeCPHova3_8I" 
          nome="Renan Arimatea" 
          descricao="Oi, eu sou o Renan. Faço parte de uma geração hiperconectada, amante da tecnologia e da praticidade. Vejo com brilho nos olhos este mundo de infinitas possibilidades que temos a disposição e quero fazer parte da comunidade que esta disposta a transformar a forma como as pessoas veem a tecnologia! Inclusive, sou um entusiasta de programação e em meu dia a dia dedico meus esforços para desenvolver minhas habilidades em Desenvolvimento Front-End."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className='page-section-container'>
        <CardPequeno
          imagem="https://cdn-icons.flaticon.com/png/512/3178/premium/3178158.png?token=exp=1643328070~hmac=5442d287d5c314ab6e7bd3c6d7b9fe42"
          label="Email:"
          txt="renanmoraiz@gmail.com"
        />
      </div>

      <div className='page-section-container'>
        <CardPequeno
          imagem="https://cdn-icons.flaticon.com/png/512/1009/premium/1009850.png?token=exp=1643328334~hmac=a34818642b22e47f5a5b2edbf7cb40f3"
          label="Endereço:"
          txt="Ponta Grossa / PR"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C4E0BAQH70IbV_f7_IQ/company-logo_200_200/0/1639261561471?e=1651104000&v=beta&t=XI6IqP1V4gIOcaRi9F4TYPSPOiKDyagn7ojgM3lDmj8" 
          nome="Bradesco" 
          descricao="Execução de Ações Voltadas a Qualidade no Atendimento e Satisfação das Necessidades dos Clientes, Experiência Hands-on na Conversão de Clientes para o Uso dos Canais Digitais (App, Internet Banking, Net Empresa e afins), Habilidade de Ouvir e Responder às Necessidades e Preocupações dos Clientes, Oferta de Produtos e Serviços Bancários." 
        />
        
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C4D0BAQFksvuJwlPqMg/company-logo_200_200/0/1547049263714?e=1651104000&v=beta&t=heo9vABaFSqvpBxjbPd3tFgs8AyNJs3IAxqWq4VWRnc" 
          nome="Zero Resíduos" 
          descricao="Elaboração e Gerenciamento de Planilhas de Controle, Bancos de Dados Operacionais e Controle de Equipamentos, Controle de Faturamentos de Clientes e Fornecedores, Medição de Serviços Prestados, Auxílio na Elaboração de Indicadores de Qualidade e Contato com Clientes e Fornecedores." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
