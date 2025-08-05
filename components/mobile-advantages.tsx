import { Shield, Zap, Users, TrendingUp } from "lucide-react"

const advantages = [
  {
    icon: Zap,
    title: "Tecnologia Avançada",
    description: "Busca inteligente e tours virtuais",
    color: "text-vibrant-blue",
    bgColor: "bg-blue-50",
  },
  {
    icon: Shield,
    title: "100% Seguro",
    description: "Documentação verificada",
    color: "text-emerald-500",
    bgColor: "bg-emerald-50",
  },
  {
    icon: Users,
    title: "Atendimento Humanizado",
    description: "Consultores especializados",
    color: "text-vibrant-orange",
    bgColor: "bg-orange-50",
  },
  {
    icon: TrendingUp,
    title: "Melhores Oportunidades",
    description: "Acesso exclusivo aos lançamentos",
    color: "text-vibrant-turquoise",
    bgColor: "bg-teal-50",
  },
]

export default function MobileAdvantages() {
  return (
    <section className="py-12 bg-white">
      <div className="px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Por que escolher a <span className="text-emerald-500">Imoblar</span>?
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Tecnologia de ponta com atendimento humano excepcional
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="flex items-center p-4 bg-gray-50 rounded-2xl hover:shadow-md transition-all duration-300"
            >
              <div
                className={`flex-shrink-0 w-12 h-12 ${advantage.bgColor} rounded-2xl flex items-center justify-center mr-4`}
              >
                <advantage.icon className={`h-6 w-6 ${advantage.color}`} />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-1">{advantage.title}</h3>
                <p className="text-sm text-gray-600">{advantage.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Stats */}
        <div className="mt-8 bg-gradient-to-r from-emerald-500 to-royal-500 rounded-3xl p-6 text-white">
          <div className="grid grid-cols-2 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold mb-1">15+</div>
              <div className="text-xs text-emerald-100">Anos</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-1">10K+</div>
              <div className="text-xs text-emerald-100">Clientes</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-1">5K+</div>
              <div className="text-xs text-emerald-100">Vendidos</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-1">98%</div>
              <div className="text-xs text-emerald-100">Satisfação</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
