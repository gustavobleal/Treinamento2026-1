import logo from "./assets/logo.png";
import Card from "./components/Card";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#EEEEEE]">

      
      <header className="h-[97px] bg-[#FF6600] flex items-center px-8 gap-8 ml-[30px]">
        <img
          src={logo}
          alt="Logo Serra Jr"
          className="w-12 h-12"
        />

        <h1 className="text-white text-[36px] font-bold ml-[30px]">
          Equipe Serra Jr
        </h1>
      </header>

      
      <main className="flex-1 flex items-center justify-center">
        <div className="flex gap-[42px]">
          <Card membro="Membro 1" nome="Nome" idade="Idade" curso="Curso" />
          <Card membro="Membro 2" nome="Nome" idade="Idade" curso="Curso" />
          <Card membro="Membro 3" nome="Nome" idade="Idade" curso="Curso" />
        </div>
      </main>

      
      <footer className="h-[83px] bg-[#FF6600] flex items-center justify-center">
        <p className="text-white text-[16px]">
          COPYRIGHT © 2026 - SERRA JUNIOR ENGENHARIA
        </p>
      </footer>

    </div>
  );
}

export default App;