export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* HERO */}
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">

        <span className="mb-4 rounded-full border border-cyan-500 px-4 py-1 text-cyan-400">
          👋 Olá, eu sou
        </span>

        <h1 className="text-6xl md:text-8xl font-bold">
          Maristela Costa
        </h1>

        <h2 className="mt-6 text-2xl md:text-4xl text-cyan-400">
          Analista de Sistemas • Dados • BI • Cibersegurança
        </h2>

        <p className="mt-8 max-w-3xl text-lg text-slate-300">
          Bacharel em Sistemas de Informação com foco em
          Desenvolvimento de Software, Business Intelligence,
          SQL, Python, Governança de TI e Segurança da Informação.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="https://github.com/Maristelacosta"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-400 transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/maristela-costa-49b348216/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-cyan-500 px-6 py-3 hover:bg-cyan-500 hover:text-slate-950 transition"
          >
            LinkedIn
          </a>
        </div>
      </section>

      {/* SOBRE MIM */}
      <section className="py-24 px-6 bg-slate-900">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <div>
            <span className="text-cyan-400 font-semibold">
              SOBRE MIM
            </span>

            <h2 className="mt-4 text-4xl font-bold">
              Transformando dados e tecnologia em soluções inteligentes.
            </h2>

            <p className="mt-6 text-slate-300 leading-relaxed">
              Sou Bacharel em Sistemas de Informação e apaixonada por tecnologia,
              análise de dados, desenvolvimento de software e segurança da informação.
            </p>

            <p className="mt-4 text-slate-300 leading-relaxed">
              Atualmente curso especializações em Cibersegurança,
              Proteção de Dados, Business Intelligence,
              Big Data e Analytics.
            </p>

            <p className="mt-4 text-slate-300 leading-relaxed">
              Desenvolvo projetos utilizando Python, SQL, Java,
              JavaScript, APIs REST, BI e análise de dados.
            </p>

          </div>

          <div className="grid grid-cols-2 gap-6">

            <div className="bg-slate-800 rounded-2xl p-6 text-center">
              <h3 className="text-4xl font-bold text-cyan-400">10+</h3>
              <p className="mt-2 text-slate-300">
                Certificações
              </p>
            </div>

            <div className="bg-slate-800 rounded-2xl p-6 text-center">
              <h3 className="text-4xl font-bold text-cyan-400">6+</h3>
              <p className="mt-2 text-slate-300">
                Projetos
              </p>
            </div>

            <div className="bg-slate-800 rounded-2xl p-6 text-center">
              <h3 className="text-4xl font-bold text-cyan-400">300+</h3>
              <p className="mt-2 text-slate-300">
                Contribuições
              </p>
            </div>

            <div className="bg-slate-800 rounded-2xl p-6 text-center">
              <h3 className="text-4xl font-bold text-cyan-400">4</h3>
              <p className="mt-2 text-slate-300">
                Áreas de Especialização
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* COMPETÊNCIAS */}
      <section className="py-24 px-6 bg-slate-950">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl font-bold text-center">
            Competências
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">

            {[
              "Python",
              "SQL",
              "Java",
              "JavaScript",
              "Business Intelligence",
              "Cibersegurança",
              "Cloud Computing",
              "APIs REST"
            ].map((item) => (
              <div
                key={item}
                className="bg-slate-800 p-6 rounded-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <h3 className="text-cyan-400 text-xl font-bold">
                  {item}
                </h3>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* PROJETOS */}
      <section className="py-24 px-6 bg-slate-900">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl font-bold text-center">
            Projetos
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">

            <div className="bg-slate-800 rounded-2xl p-6">
              <h3 className="text-cyan-400 text-2xl font-bold">
                📊 Painel BI Analytics
              </h3>

              <p className="mt-3 text-slate-300">
                Dashboard utilizando Python, SQL,
                Pandas e Streamlit.
              </p>
            </div>

            <div className="bg-slate-800 rounded-2xl p-6">
              <h3 className="text-cyan-400 text-2xl font-bold">
                🖥️ Sistema Help Desk
              </h3>

              <p className="mt-3 text-slate-300">
                Plataforma para gerenciamento de chamados técnicos.
              </p>
            </div>

            <div className="bg-slate-800 rounded-2xl p-6">
              <h3 className="text-cyan-400 text-2xl font-bold">
                ☕ Cadastro de Clientes
              </h3>

              <p className="mt-3 text-slate-300">
                Aplicação CRUD desenvolvida em Java.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* FORMAÇÃO */}
      <section className="py-24 px-6 bg-slate-950">

        <div className="max-w-4xl mx-auto">

          <h2 className="text-4xl font-bold text-center">
            Formação Acadêmica
          </h2>

          <div className="mt-12 space-y-6">

            <div className="bg-slate-800 rounded-2xl p-6">
              🎓 Bacharelado em Sistemas de Informação
            </div>

            <div className="bg-slate-800 rounded-2xl p-6">
              🔐 MBA em Cibersegurança e Proteção de Dados
            </div>

            <div className="bg-slate-800 rounded-2xl p-6">
              📊 MBA em BI, Big Data e Analytics
            </div>

          </div>

        </div>

      </section>

      {/* CONTATO */}
      <section className="py-24 px-6 bg-slate-900">

        <div className="max-w-3xl mx-auto text-center">

          <h2 className="text-4xl font-bold">
            Contato
          </h2>

          <p className="mt-6 text-slate-300">
            Estou disponível para oportunidades nas áreas de
            Tecnologia da Informação, Dados, BI e Cibersegurança.
          </p>

          <div className="mt-10 space-y-4">

            <p>
              📧 maristelagatinhapreta@gmail.com
            </p>

            <p>
              📍 Curitiba - Paraná
            </p>

            <div className="flex justify-center gap-4 mt-8">

              <a
                href="https://www.linkedin.com/in/maristela-costa-49b348216/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-400 transition"
              >
                LinkedIn
              </a>

              <a
                href="https://github.com/Maristelacosta"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-cyan-500 px-6 py-3 hover:bg-cyan-500 hover:text-slate-950 transition"
              >
                GitHub
              </a>

            </div>

          </div>

        </div>

      </section>

      {/* RODAPÉ */}
      <footer className="border-t border-slate-800 py-8 text-center text-slate-400">

        <p>© 2026 Maristela Costa</p>

        <p className="mt-2">
          Sistemas • Dados • BI • Cibersegurança
        </p>

      </footer>

    </main>
  );
}