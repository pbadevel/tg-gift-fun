import { createFileRoute } from '@tanstack/react-router'
import { Settings2, ArrowUpDown, Gift, ShoppingBag, Filter } from 'lucide-react'

export const Route = createFileRoute('/gifts/')({
  component: RouteComponent,
})

const gifts = [
  {
    id: 1,
    name: "Plush Pepe",
    price: 100,
    currency: "TON",
    emoji: "🐸",
    color: "from-green-400 to-emerald-600"
  },
  {
    id: 2,
    name: "Golden Trophy",
    price: 250,
    currency: "TON",
    emoji: "🏆",
    color: "from-yellow-400 to-amber-600"
  },
  {
    id: 3,
    name: "Magic Crystal",
    price: 75,
    currency: "TON",
    emoji: "🔮",
    color: "from-purple-400 to-violet-600"
  },
  {
    id: 4,
    name: "Pixel Art",
    price: 150,
    currency: "TON",
    emoji: "🎨",
    color: "from-pink-400 to-rose-600"
  },
  {
    id: 5,
    name: "Space Rocket",
    price: 500,
    currency: "TON",
    emoji: "🚀",
    color: "from-blue-400 to-cyan-600"
  },
]

function RouteComponent() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black p-4">
      <div className="max-w-6xl mx-auto">
        {/* Заголовок */}
        <div className="text-center mb-12 pt-8">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl">
              <Gift className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Gift Shop
            </h1>
          </div>
          <p className="text-gray-400 text-lg max-w-md mx-auto">
            Premium collectibles and digital gifts
          </p>
        </div>

        {/* Панель управления */}
        <div className="flex items-center justify-between mb-8 px-4">
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 px-4 py-2.5 bg-gray-800/50 
                           border border-gray-700 rounded-xl hover:bg-gray-800 
                           transition-colors group">
              <Filter className="w-4 h-4 text-gray-400 group-hover:text-white" />
              <span className="text-gray-300">Filter</span>
            </button>
            
            <button className="flex items-center gap-2 px-4 py-2.5 bg-gray-800/50 
                           border border-gray-700 rounded-xl hover:bg-gray-800 
                           transition-colors group">
              <ArrowUpDown className="w-4 h-4 text-gray-400 group-hover:text-white" />
              <span className="text-gray-300">Sort</span>
            </button>
          </div>
          
          <div className="flex items-center gap-2 text-gray-400">
            <Settings2 className="w-5 h-5" />
            <span className="text-sm">1-{gifts.length} of {gifts.length} items</span>
          </div>
        </div>

        {/* Сетка подарков */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {gifts.map((gift) => (
            <div 
              key={gift.id}
              className="group bg-gray-900/40 backdrop-blur-sm border border-gray-800 
                       rounded-2xl p-6 hover:border-gray-700 hover:bg-gray-900/60 
                       transition-all duration-300 hover:scale-[1.02] 
                       hover:shadow-2xl hover:shadow-purple-500/10"
            >
              {/* Изображение/иконка подарка */}
              <div className="relative mb-6">
                <div className={`w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br ${gift.color} 
                              flex items-center justify-center text-5xl shadow-lg`}>
                  {gift.emoji}
                </div>
                <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-500 to-orange-500 
                              text-white text-xs font-semibold px-3 py-1 rounded-full">
                  NEW
                </div>
              </div>

              {/* Информация о подарке */}
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-white mb-2">{gift.name}</h3>
                <div className="flex items-center justify-center gap-2">
                  <div className="text-2xl font-bold text-white">{gift.price}</div>
                  <div className="text-lg text-gray-300">{gift.currency}</div>
                </div>
                <p className="text-gray-400 text-sm mt-2">Digital collectible item</p>
              </div>

              {/* Кнопка покупки */}
              <button className="w-full py-3 bg-gradient-to-r from-gray-800 to-gray-900 
                              border border-gray-700 rounded-xl text-gray-300
                              hover:text-white hover:border-gray-600 hover:bg-gray-800
                              active:scale-[0.98] transition-all duration-200
                              flex items-center justify-center gap-2 group/btn">
                <ShoppingBag className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                <span className="font-medium">Add to Cart</span>
              </button>
            </div>
          ))}
        </div>

        {/* Футер */}
        <div className="mt-16 text-center border-t border-gray-800 pt-8">
          <div className="inline-flex items-center gap-6">
            <div className="text-left">
              <div className="text-sm text-gray-400">Total items</div>
              <div className="text-2xl font-bold text-white">{gifts.length}</div>
            </div>
            <div className="h-12 w-px bg-gray-800"></div>
            <div className="text-left">
              <div className="text-sm text-gray-400">Available</div>
              <div className="text-2xl font-bold text-white">{gifts.length}</div>
            </div>
            <div className="h-12 w-px bg-gray-800"></div>
            <div className="text-left">
              <div className="text-sm text-gray-400">From price</div>
              <div className="text-2xl font-bold text-white">
                {Math.min(...gifts.map(g => g.price))} TON
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}