import React from "react";
import MainGrid from "../src/components/MainGrid";
import Box from "../src/components/Box";
import { AlurakutMenu,AlurakutProfileSidebarMenuDefault,OrkutNostalgicIconSet } from "../src/lib/AlurakutCommons";
import { ProfileRelationsBoxWrapper } from "../src/components/ProfileRelations";

function ProfileSidebar(proprieties) {
  return (
    <Box as="aside">
      <img
        src={`https://github.com/${proprieties.githubUser}.png`}
        style={{ borderRadius: "8px" }}
      />
      <hr />
      <p>
        <a
          className="boxLink"
          href={`https://github.com/${proprieties.githubUser}`}
        >
          @{proprieties.githubUser}
        </a>
        <hr />
      </p>
      <AlurakutProfileSidebarMenuDefault />
    </Box>
  );
}

function ProfileRelationsBox(propriedades){
  return(
    <ProfileRelationsBoxWrapper>
    <h2 className="smallTitle">
      {propriedades.title} ({propriedades.items.length})
      </h2>
      <ul>
        {/* seguidores.map((itemAtual) => {
          return (
            <li key={itemAtual}>
              <a href={`https://github.com/${itemAtual}`}>
                <img src={itemAtual.image} />
                <span> {itemAtual.title} </span>
              </a>
            </li>
          );
        }) */}
      </ul>
    </ProfileRelationsBoxWrapper>
  )
}

export default function Home() {

  const [comunidades, setComunidades] = React.useState([{
    id: '123123123123',
    title: 'Eu odeio acordar cedo',
    image: 'https://alurakut.vercel.app/capa-comunidade-01.jpg', 
  }]);

  const usuarioGithub = "davimateus1";

  const pessoasFav = [
    "DjalmaHenry",
    "marcosfandrade",
    "ronnylrsd",
    "lucass235",
    "rafaelpdemelo",
    "joovitor12",
    "diego3g"
  ];

  const [seguidores, setSeguidores] = React.useState([]);

  fetch('https://api.github.com/users/davimateus1/followers')
  .then(function (respostaDoServidor){
    return respostaDoServidor.json();
  })
  .then(function(respostaCompleta){
    setSeguidores(respostaCompleta);
  })
  
  React.useEffect(function(){

  }, [])

  return (
    <>
      <AlurakutMenu githubUser={usuarioGithub}/>
      <MainGrid>
        <div className="profileArea" style={{ gridArea: "profileArea" }}>
          <ProfileSidebar githubUser={usuarioGithub} />
        </div>
        <div className="welcomeArea" style={{ gridArea: "welcomeArea" }}>
          <Box>
            <h1 className="title">Bem vindo(a), {usuarioGithub}</h1>
            <OrkutNostalgicIconSet />
          </Box>

          <Box>
            <h2 className="subTitle">
              Qual funcionalidade você deseja executar?
            </h2>
            <form
              onSubmit={function handleCreateCommunity(e) {
                e.preventDefault();
                const dadosDoForm = new FormData(e.target);

                console.log ('Campo: ', dadosDoForm.get('title'));
                console.log ('Campo: ', dadosDoForm.get('image'));

                const comunidade = {
                  id: new Date().toISOString(),
                  title: dadosDoForm.get('title'),
                  image: dadosDoForm.get('image'),
                }

                const comunidadesAtualizadas = [...comunidades, comunidade];
                setComunidades(comunidadesAtualizadas);
              }}
            >
              <div>
                <input
                  placeholder="Qual será o nome da sua comunidade?"
                  name="title"
                  aria-label="Qual será o nome da sua comunidade?"
                  type="text"
                />
              </div>

              <div>
                <input
                  placeholder="Informe a capa através de uma URL"
                  name="image"
                  aria-label="Informe a capa através de uma URL"
                />
              </div>

              <button>Criar comunidade</button>
            </form>
          </Box>
        </div>
        <div
          className="profileRelationsArea"
          style={{ gridArea: "profileRelationsArea" }}
        >
          
          <ProfileRelationsBox title ="Seguidores" items={seguidores} />

          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Pessoas das Comunidades ({pessoasFav.length})
            </h2>
            <ul>
              {pessoasFav.slice(0,6).map((itemAtual) => {
                return (
                  <li key={itemAtual}>
                    <a href={`/users/${itemAtual}`}>
                      <img src={`https://github.com/${itemAtual}.png`} />
                      <span> {itemAtual} </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </ProfileRelationsBoxWrapper>

          <ProfileRelationsBoxWrapper>
          <h2 className="smallTitle">
              Comunidades ({comunidades.length})
            </h2>
            <ul>
              {comunidades.map((itemAtual) => {
                return (
                  <li key={itemAtual.id}>
                    <a href={`/users/${itemAtual.title}`}>
                      <img src={itemAtual.image} />
                      <span> {itemAtual.title} </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </ProfileRelationsBoxWrapper>

        </div>
      </MainGrid>
    </>
  );
}
