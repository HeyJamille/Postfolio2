import './index.css';

// pages
import Menu from './components/Menu';
import Informations from './pages/Informations';
import About from './pages/About';
import Contatos from './pages/Contacts';
import Projetos from './pages/Projects';
import Habilidades from './pages/Skills';
import Footer from './components/Footer';

function App() {
  return (
    <main className='bg-[#171717] overflow-auto w-full'>
      <Menu/>
      <div className="flex w-full flex-col gap-[150px] p-5 md:px-20 xl:px-30">
        <Informations /> 
        <About/>
        <Projetos />
        <Contatos />
        <Habilidades />
      </div>
       <Footer /> 
    </main>
  );
};

export default App;
