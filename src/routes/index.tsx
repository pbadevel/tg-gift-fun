import { createFileRoute } from '@tanstack/react-router'
import { ArrowRight, Gamepad2, Sparkles, Target, TrendingUp, Trophy, Users } from 'lucide-react'

export const Route = createFileRoute('/')({
  component: App,
})
const games = [
  {
    id: 1,
    title: "Rolls",
    subtitle: "Ежедневные задания",
    description: "Выполняйте ежедневные задания и получайте награды",
    icon: <Target className="w-8 h-8" />,
    color: "from-blue-500 to-cyan-500",
    stats: "+150 сегодня"
  },
  {
    id: 2,
    title: "Tournament",
    subtitle: "Соревнования",
    description: "Участвуйте в турнирах и займите первое место",
    icon: <Trophy className="w-8 h-8" />,
    color: "from-amber-500 to-orange-500",
    stats: "128 участников"
  },
  {
    id: 3,
    title: "Battle Royale",
    subtitle: "Королевская битва",
    description: "Сразитесь с другими игроками в режиме выживания",
    icon: <Gamepad2 className="w-8 h-8" />,
    color: "from-red-500 to-pink-500",
    stats: "Online: 2,458"
  },
  {
    id: 4,
    title: "Team Clash",
    subtitle: "Командный режим",
    description: "Объединяйтесь с друзьями для командных сражений",
    icon: <Users className="w-8 h-8" />,
    color: "from-green-500 to-emerald-500",
    stats: "5v5 матчи"
  },
  {
    id: 5,
    title: "Arcade",
    subtitle: "Быстрые игры",
    description: "Быстрые мини-игры для коротких сессий",
    icon: <Sparkles className="w-8 h-8" />,
    color: "from-purple-500 to-violet-500",
    stats: "12 мини-игр"
  },
  {
    id: 6,
    title: "Ranked",
    subtitle: "Рейтинговые игры",
    description: "Поднимайтесь в рейтинге и получайте уникальные награды",
    icon: <TrendingUp className="w-8 h-8" />,
    color: "from-indigo-500 to-blue-500",
    stats: "Топ 100 игроков"
  },
]

function App() {
  return (
    <div className="min-h-screen p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Хедер */}
        <header className="mb-10 md:mb-16 pt-6 md:pt-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
                Game<span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">Hub</span>
              </h1>
              <p className="text-gray-400 text-lg">
                Выберите игру и начните играть прямо сейчас
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-3 px-4 py-2.5 bg-gray-800/50 rounded-xl">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-gray-300">online: 5,892</span>
              </div>
            </div>
          </div>
        </header>

        {/* Основной контент */}
        <main>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Доступные игры
            </h2>
            <div className="text-sm text-gray-400">
              <span className="text-white font-medium">{games.length}</span> игр доступно
            </div>
          </div>

          {/* Сетка карточек */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {games.map((game) => (
              <div 
                key={game.id}
                className="group bg-gray-900/40 backdrop-blur-sm border border-gray-800 
                         rounded-2xl p-6 hover:border-gray-700 hover:bg-gray-900/60 
                         transition-all duration-300 hover:scale-[1.02] 
                         hover:shadow-xl cursor-pointer"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${game.color} 
                                bg-opacity-10 border border-gray-700/50`}>
                    <div className="text-white">
                      {game.icon}
                    </div>
                  </div>
                  
                  <div className="text-xs px-3 py-1.5 bg-gray-800/70 rounded-full 
                                text-gray-300 border border-gray-700">
                    {game.stats}
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-1.5">
                    {game.title}
                  </h3>
                  <div className="text-sm font-medium text-gray-300 mb-3">
                    {game.subtitle}
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {game.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-800/50">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-gray-800 to-gray-900 
                                  border border-gray-700 flex items-center justify-center">
                      <span className="text-xs text-gray-400">★</span>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Сложность</div>
                      <div className="text-sm text-gray-300">Средняя</div>
                    </div>
                  </div>
                  
                  <button className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-gray-800 to-gray-900 
                                  border border-gray-700 rounded-xl text-white font-medium
                                  hover:border-gray-600 hover:from-gray-700 hover:to-gray-800
                                  active:scale-95 transition-all duration-200
                                  group/btn">
                    <span>Перейти</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Быстрый доступ */}
          <div className="mt-16">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
              Быстрый доступ
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/10 
                            border border-blue-800/30 rounded-2xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl">
                    <Trophy className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg">Достижения</div>
                    <div className="text-gray-400 text-sm">15 из 48 выполнено</div>
                  </div>
                </div>
                <div className="w-full bg-gray-800/50 rounded-full h-2">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full w-1/3"></div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/10 
                            border border-purple-800/30 rounded-2xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg">Друзья онлайн</div>
                    <div className="text-gray-400 text-sm">8 из 24 в сети</div>
                  </div>
                </div>
                <div className="flex gap-2">
                  {[1,2,3,4,5,6,7,8].map((i) => (
                    <div key={i} className="w-8 h-8 bg-gradient-to-br from-gray-700 to-gray-800 
                                          rounded-full border border-gray-600"></div>
                  ))}
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-amber-900/20 to-orange-900/10 
                            border border-amber-800/30 rounded-2xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg">Ваш прогресс</div>
                    <div className="text-gray-400 text-sm">+12% за неделю</div>
                  </div>
                </div>
                <div className="text-3xl font-bold text-white">#42</div>
                <div className="text-sm text-amber-400 mt-2">в мировом рейтинге</div>
              </div>
            </div>
          </div>
        </main>

        {/* Футер */}
        <footer className="mt-16 pt-8 border-t border-gray-800/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-gray-400 text-sm">
              © 2024 GameHub. Все права защищены.
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Помощь
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Правила
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Контакты
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}