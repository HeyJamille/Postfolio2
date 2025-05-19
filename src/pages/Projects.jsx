import React, { useEffect, useState } from 'react';

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [visibleCount, setVisibleCount] = useState(4);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.github.com/users/HeyJamille/repos?sort=updated')
      .then(res => res.json())
      .then(data => {
        setRepos(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const handleShowMore = () => {
    setVisibleCount(prev => prev + 4);
  };

  if (loading) return <p className="text-center text-white py-10">Carregando projetos...</p>;

  return (
    <article className="max-w-7xl mx-auto px-6 py-16">
      <h1 id="projects" className="text-[#cd51ff] text-4xl font-bold text-center mb-12 drop-shadow-lg">
        Projetos
      </h1>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {repos.slice(0, visibleCount).map(repo => (
          <a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1a1a1a] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300 cursor-pointer"
            title={repo.description || repo.name}
          >
            <div className="w-full h-48 bg-gradient-to-br from-purple-700 to-purple-900 flex items-center justify-center text-white text-2xl font-bold">
              {repo.name}
            </div>
            <div className="p-5">
              <h3 className="text-white text-xl font-semibold mb-2">{repo.name}</h3>
              <p className="text-gray-400 text-sm">
                {repo.description ? repo.description : 'Sem descrição disponível.'}
              </p>
              <p className="mt-3 text-xs text-gray-500">
                Linguagem: {repo.language || 'N/A'}
              </p>
            </div>
          </a>
        ))}
      </section>

      {/* Mostrar botão somente se houver mais projetos para mostrar */}
      {visibleCount < repos.length && (
        <div className="flex justify-center mt-10">
          <button
            onClick={handleShowMore}
            className="px-6 py-3 bg-[#cd51ff] hover:bg-[#b043e6] text-white rounded-lg shadow-lg transition"
          >
            Mostrar mais
          </button>
        </div>
      )}
    </article>
  );
};

export default Projects;
