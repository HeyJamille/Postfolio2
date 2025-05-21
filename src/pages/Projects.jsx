import React, { useEffect, useState } from 'react';
import projeto1 from '../assets/imagesProject/alimentacao.jpeg';
import projeto2 from '../assets/imagesProject/alimentacao.jpeg';

const imageMap = {
  'nome-do-repo-1': projeto1,
  'nome-do-repo-2': projeto2,
  // ...
};

const Projects = ({data}) => {
  const [repos, setRepos] = useState([]);
  const [visibleCount, setVisibleCount] = useState(3);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.github.com/users/HeyJamille/repos?sort=updated')
      .then((res) => res.json())
      .then((data) => {
        setRepos(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  if (loading)
    return (
      <p className="text-center text-white py-20 text-xl animate-pulse">
        Carregando projetos...
      </p>
    );

  return (
    <article className="w-full max-w-7xl mx-auto py-20">
      <h1
        id="projects"
        className="text-4xl md:text-5xl font-extrabold text-[#cd51ff] text-center mb-16 tracking-wide"
      >
        Projetos
      </h1>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {repos.slice(0, visibleCount).map((repo) => {
          const image = imageMap[repo.name]

          return (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-[1.03] transition-all duration-300 border border-[#cd51ff]/10"
              title={repo.description || repo.name}
            >
              <img
                src={image}
                alt={`Imagem do projeto ${repo.name}`}
                className="w-full h-52 object-cover"
              />
              <div className="p-6 flex flex-col gap-2 h-[180px]">
                <h3 className="text-white text-lg font-bold line-clamp-1">
                  {repo.name}
                </h3>
                <p className="text-gray-400 text-sm line-clamp-3">
                  {repo.description || 'Sem descrição disponível.'}
                </p>
                <p className="text-xs text-gray-500 mt-auto">
                  <span className="font-medium text-white">Linguagem:</span>{' '}
                  {repo.language || 'N/A'}
                </p>
              </div>
            </a>
          );
        })}
      </section>

      {visibleCount < repos.length && (
        <div className="flex justify-center mt-12">
          <button
            onClick={handleShowMore}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#cd51ff] to-[#7f5eff] text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Mostrar mais
          </button>
        </div>
      )}
    </article>
  );
};

export default Projects;
