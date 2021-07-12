import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations'

function ProfileSidebar(proprieties){
  return(
    <Box>
      <img src={`https://github.com/${proprieties.githubUser}.png`} style={{ borderRadius: '8px' }} />
    </Box>
  )
}

export default function Home() {

  const usuarioGithub = 'davimateus1';
  const pessoasFav = ['DjalmaHenry',
  'marcosfandrade',
  'ronnylrsd',
  'lucass235']

  return (
    <>
    <AlurakutMenu />
  <MainGrid>
    <div className="profileArea" style={{ gridArea: 'profileArea' }}>
      <ProfileSidebar githubUser={usuarioGithub}/>
    </div>
    <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
    <Box>
      <h1 className="title">
        Bem vindo(a)
      </h1> 
      <OrkutNostalgicIconSet />
    </Box>
    </div>
    <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
    <ProfileRelationsBoxWrapper>
      <h2 className="smallTitle">
        Pessoas das Comunidades ({pessoasFav.length})
        </h2>
      <ul>
      {pessoasFav.map((itemAtual) => {
        return (
        <li>
           <a href={`/users/${itemAtual}`} key={itemAtual}>
           <img src={`https://github.com/${itemAtual}.png`} />
           <span> {itemAtual} </span>
         </a> 
        </li>
        )        
     })}
      </ul>
    </ProfileRelationsBoxWrapper>
    <Box>
      Comunidades
    </Box>
    </div>
     </MainGrid>
     </>
    )
}
