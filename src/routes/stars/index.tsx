import { createFileRoute } from '@tanstack/react-router'
import { Send, User, Coins, Stars, Star } from 'lucide-react'

export const Route = createFileRoute('/stars/')({
  component: RouteComponent,
})

function RouteComponent() {




  const handleSendStars = () => {
    alert("#TODO")
  }



  return (
    <div className="min-h-[80vh] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Заголовок */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-light tracking-tight mb-2">
            Send Stars
          </h1>
          <p className="text-gray-400 font-light">
            Transfer tokens quickly and securely
          </p>
        </div>

        {/* Форма */}
        <div className="space-y-6">
          {/* Поле username */}
          <div className="relative">
            <div className="absolute left-4 top-4">
              <User className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="username"
              className="w-full pl-12 pr-4 py-4 bg-gray-900/50 
                       border border-gray-700 rounded-xl
                       focus:border-blue-500 focus:ring-1 focus:ring-blue-500
                       focus:outline-none transition-all
                       placeholder:text-gray-500
                       text-lg
                     [&::-webkit-inner-spin-button]:appearance-none
                     [&::-webkit-outer-spin-button]:appearance-none
                     [-moz-appearance:textfield]"
            />
            <label className="block mt-2 text-sm text-gray-400 ml-1">
              Enter recipient's username
            </label>
          </div>

          {/* Поле amount */}
          <div className="relative">
            <div className="absolute left-3 top-5">
              <Star className="w-6 h-6 text-yellow-400 fill-yellow-500" />
            </div>
            <input
              type="number"
              placeholder="0.00"
              step="0.01"
              className="w-full pl-12 pr-4 py-4 bg-gray-900/50 
                       border border-gray-700 rounded-xl
                       focus:border-blue-500 focus:ring-1 focus:ring-blue-500
                       focus:outline-none transition-all
                       placeholder:text-gray-500
                       text-lg
                     [&::-webkit-inner-spin-button]:appearance-none
                     [&::-webkit-outer-spin-button]:appearance-none
                     [-moz-appearance:textfield]"
            />
            <label className="block mt-2 text-sm text-gray-400 ml-1">
              Amount to send
            </label>
          </div>

          {/* Кнопка отправки */}
          <button className="w-full py-4 bg-linear-to-r from-blue-600 to-indigo-600 
                          text-white font-medium rounded-xl
                          hover:from-blue-700 hover:to-indigo-700
                          active:scale-[0.98] transition-all
                          flex items-center justify-center gap-2
                          shadow-lg shadow-blue-500/20"
              onClick={()=>handleSendStars()}
            >
            <Send className="w-5 h-5" />
            Send Transfer
          </button>

          {/* Информация о комиссии */}
          <div className="text-center pt-4 border-t border-gray-800/50">
            <p className="text-sm text-gray-400">
              Network fee: <span className="text-gray-300">0.7 STARS</span>
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Transaction usually completes in 2-5 seconds
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}