"use client";

import { useState } from "react";

export default function Home() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    alert("Спасибо! Сообщение отправлено!");
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-cyan-900">
      {/* Навигация */}
      <nav className="fixed top-0 w-full bg-black/30 backdrop-blur-md z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <ul className="flex justify-center gap-8 text-white font-medium">
            <li><a href="#home" className="hover:text-cyan-400 transition">Главная</a></li>
            <li><a href="#about" className="hover:text-cyan-400 transition">Обо мне</a></li>
            <li><a href="#projects" className="hover:text-cyan-400 transition">Проекты</a></li>
            <li><a href="#contact" className="hover:text-cyan-400 transition">Контакты</a></li>
          </ul>
        </div>
      </nav>

      {/* Главная секция */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center text-white">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-pulse">
            Привет, я Разработчик
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Создаю современные веб-приложения на Next.js
          </p>
          <a href="#projects" className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-full font-bold transition transform hover:scale-105 inline-block">
            Смотреть проекты
          </a>
        </div>
      </section>

      {/* Обо мне */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-white">
          <h2 className="text-4xl font-bold text-center mb-12">Обо мне</h2>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8">
            <p className="text-lg mb-6">
              Я веб-разработчик с опытом создания современных приложений. 
              Специализируюсь на React, Next.js и TypeScript.
            </p>
            <h3 className="text-2xl font-semibold mb-4">Навыки:</h3>
            <div className="flex flex-wrap gap-3">
              {["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Git", "GitHub"].map((skill) => (
                <span key={skill} className="bg-cyan-500/30 px-4 py-2 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Проекты */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-white">
          <h2 className="text-4xl font-bold text-center mb-12">Проекты</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Сайт погоды", desc: "Приложение с прогнозом погоды", tech: ["React", "API"] },
              { title: "Todo App", desc: "Менеджер задач с авторизацией", tech: ["Next.js", "TypeScript"] },
              { title: "Интернет-магазин", desc: "Каталог товаров с корзиной", tech: ["React", "Tailwind"] },
            ].map((project, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:transform hover:scale-105 transition">
                <div className="h-40 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl mb-4"></div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span key={t} className="bg-cyan-500/30 px-3 py-1 rounded-full text-xs">{t}</span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a href="#" className="flex-1 bg-cyan-500 hover:bg-cyan-600 text-center py-2 rounded-lg transition">Демо</a>
                  <a href="#" className="flex-1 bg-gray-700 hover:bg-gray-600 text-center py-2 rounded-lg transition">Код</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Контакты */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-xl mx-auto text-white">
          <h2 className="text-4xl font-bold text-center mb-12">Контакты</h2>
          <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-md rounded-2xl p-8 space-y-4">
            <input type="text" placeholder="Имя" required className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 focus:outline-none focus:border-cyan-400" />
            <input type="email" placeholder="Email" required className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 focus:outline-none focus:border-cyan-400" />
            <textarea placeholder="Сообщение" rows={4} required className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 focus:outline-none focus:border-cyan-400"></textarea>
            <button type="submit" className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 py-3 rounded-lg font-bold transition">
              Отправить сообщение
            </button>
          </form>
          
          <div className="flex justify-center gap-6 mt-8">
            <a href="https://t.me/твой_ник" className="hover:text-cyan-400 transition">Telegram</a>
            <a href="https://vk.com/твой_ид" className="hover:text-cyan-400 transition">VK</a>
            <a href="https://github.com/твой_ник" className="hover:text-cyan-400 transition">GitHub</a>
            <a href="mailto:email@example.com" className="hover:text-cyan-400 transition">Email</a>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="py-8 text-center text-gray-400 text-sm">
        © 2025 Персональное портфолио. Все права защищены.
      </footer>
    </main>
  );
}
