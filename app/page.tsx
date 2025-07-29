"use client"
import { useState, useEffect, useRef } from "react"
import type React from "react"
import { Menu, X, Home, User, Briefcase, FolderOpen, Phone, Settings, HelpCircle } from "lucide-react"

export default function TerminalCV() {
  const [currentPage, setCurrentPage] = useState("welcome")
  const [isTyping, setIsTyping] = useState(false)
  const [showCursor, setShowCursor] = useState(true)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [command, setCommand] = useState("")
  const terminalRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const pages = {
    welcome: [
      "╔══════════════════════════════════════════════════════════╗",
      "║                                                          ║",
      "║                     Quiroga Camilo Dev                   ║",
      "╚══════════════════════════════════════════════════════════╝",
      "",
      "Bienvenidos ",
      "Usa los botones de abajo o escribe comandos para navegar.",
      "",
      "Escribe 'help' para ver los comandos disponibles.",
    ],
    about: [
      "Camilo Quiroga - Desarrollador Full Stack",
      "",
      "┌─────────────────────────────────────────┐",
      "│  Desarrollador apasionado por crear     │",
      "│  soluciones digitales innovadoras.      │",
      "│  Especializado en tecnologías web       │",
      "│  modernas y experiencias de usuario     │",
      "│  excepcionales.                         │",
      "└─────────────────────────────────────────┘",
      "",
      "📍 Ubicación: Buenos Aires",
      "🎓 Experiencia: 3+ años",
      "💼 Estado: Disponible para proyectos",
      "",
      "Soy un desarrollador con más de 3 años de experiencia",
      "creando aplicaciones web y móviles. Me especializo en",
      "tecnologías modernas como React, Node.js y TypeScript.",
      "",
      "Mi enfoque se centra en crear experiencias de usuario",
      "excepcionales y código limpio y mantenible.",
    ],
    services: [
      "Servicios Disponibles:",
      "",
      "🌐 DESARROLLO WEB",
      "   • Sitios web responsivos y modernos",
      "   • Aplicaciones web con React/Next.js",
      "   • E-commerce personalizado",
      "   • Landing pages optimizadas",
      "",
    ],
    portfolio: [
      "Proyectos Destacados:",
      "",
      "📊 E-COMMERCE PLATFORM",
      "   Tecnologías: React, Node.js, MongoDB, Stripe",
      "   Descripción: Plataforma completa de comercio electrónico",
      "   con carrito de compras, pagos y panel de administración",
      "   Estado: ✅ Completado | 2024",
      "",
      "🏥 HEALTHCARE MANAGEMENT APP",
      "   Tecnologías: React Native, Firebase, Redux",
      "   Descripción: App móvil para gestión de citas médicas",
      "   con notificaciones push y sincronización offline",
      "   Estado: ✅ Completado | 2023",
      "",
      "📈 ANALYTICS DASHBOARD",
      "   Tecnologías: Next.js, TypeScript, D3.js, PostgreSQL",
      "   Descripción: Dashboard interactivo para análisis de datos",
      "   con gráficos en tiempo real y reportes personalizados",
      "   Estado: 🚧 En desarrollo | 2024",
      "",
      "🎮 MULTIPLAYER GAMING PLATFORM",
      "   Tecnologías: Vue.js, Express, Socket.io, Redis",
      "   Descripción: Plataforma de juegos multijugador en tiempo real",
      "   con chat, rankings y sistema de torneos",
      "   Estado: ✅ Completado | 2023",
      "",
      "🏢 CORPORATE WEBSITE",
      "   Tecnologías: Next.js, Tailwind CSS, Framer Motion",
      "   Descripción: Sitio web corporativo con animaciones",
      "   y optimización SEO para empresa tecnológica",
      "   Estado: ✅ Completado | 2024",
    ],
    contact: [
      "Información de Contacto:",
      "",
      "📧 Email: quirogacamilodev@email.com",
      "🌐 Website: www.quirogacamilo.dev",
      "💼 LinkedIn: linkedin.com/in/camilo-quiroga-dev/",
      "🐙 GitHub: github.com/camiloquirogadev",
      "",
      "📍 Ubicación: Buenos Aires, Argentina",
      "🕒 Zona horaria: (UTC-3)",
      "",
      "📋 Disponible para:",
      "   • Proyectos remotos a tiempo completo",
      "   • Colaboraciones presenciales en Buenos Aires",
      "   • Consultoría técnica y auditorías",
      "   • Desarrollo de MVPs y prototipos",
      "",
      "💰 Tarifas:",
      "   • Desarrollo web: 50-80$/hora",
      "   • Consultoría: 100$/hora",
      "   • Proyectos fijos: Presupuesto personalizado",
      "",
      "⚡ Respuesta garantizada en menos de 24 horas",
    ],
    skills: [
      "Habilidades Técnicas:",
      "",
      "🚀 FRONTEND DEVELOPMENT",
      "   React/Next.js    ",
      "   TypeScript       ",
      "   Vue.js/Nuxt.js   ",
      "   CSS/Tailwind     ",
      "   JavaScript (ES6+)",
      "",
      "⚙️  BACKEND DEVELOPMENT",
      "   Node.js/Express   ███████████  90%",
      "   Python/Django     ████████     80%",
      "   PostgreSQL        ████████     85%",
      "   MongoDB           ████████     85%",
      "   REST/GraphQL APIs ███████████  90%",
      "",
      "☁️  DEVOPS & TOOLS",
      "   Docker/Kubernetes ███████      75%",
      "   AWS/Vercel        ████████     80%",
      "   Git/GitHub        ████████████ 95%",
      "   CI/CD Pipelines   ███████      75%",
      "   Linux/Terminal    ████████     85%",
      "",
      "📱 MOBILE DEVELOPMENT",
      "   React Native      ████████     80%",
      "   Flutter/Dart      ██████       60%",
      "   PWA Development   ████████     85%",
      "",
      "🎨 DESIGN & UX",
      "   Figma/Adobe XD    ███████      70%",
      "   UI/UX Principles  ████████     80%",
      "   Responsive Design ████████████ 95%",
    ],
    help: [
      "Comandos de Navegación:",
      "",
      "🏠 home/welcome   - Página de inicio",
      "👤 about          - Información personal",
      "💼 services       - Servicios que ofrezco",
      "📁 portfolio      - Proyectos realizados",
      "📞 contact        - Información de contacto",
      "🛠️ skills         - Habilidades técnicas",
      "❓  help           - Mostrar esta ayuda",
      "🧹 clear          - Limpiar la terminal",
      "",
      "💡 Consejos:",
      "   • Usa los botones de abajo para navegar",
      "   • O escribe comandos en la línea de abajo",
      "   • Cada sección contiene información detallada",
      "   • En móvil usa el menú hamburguesa (☰)",
      "",
      "🎯 Navegación rápida:",
      "   Haz clic en cualquier botón o",
      "   escribe el comando para cambiar de sección.",
    ],
  }

  const menuItems = [
    { key: "about", label: "About", icon: User },
    { key: "services", label: "Services", icon: Briefcase },
    { key: "portfolio", label: "Portfolio", icon: FolderOpen },
    { key: "contact", label: "Contact", icon: Phone },
    { key: "skills", label: "Skills", icon: Settings },
    { key: "help", label: "Help", icon: HelpCircle },
  ]

  const changePage = async (newPage: string) => {
    setIsTyping(true)
    setShowCursor(false)
    setIsMenuOpen(false)

    // Simular delay de carga
    await new Promise((resolve) => setTimeout(resolve, 300))

    setCurrentPage(newPage)
    setIsTyping(false)

    // Activar cursor titilando
    setTimeout(() => setShowCursor(true), 100)
  }

  const handleMenuItemClick = (pageKey: string) => {
    console.log("Menu item clicked:", pageKey)
    changePage(pageKey)
  }

  const handleHomeClick = () => {
    changePage("welcome")
  }

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const cmd = command.toLowerCase().trim()

    if (cmd === "") return

    if (cmd === "clear") {
      setCommand("")
      return
    }

    if (cmd === "home" || cmd === "welcome") {
      changePage("welcome")
    } else if (cmd in pages) {
      changePage(cmd)
    } else {
      // Comando no válido - mostrar mensaje de error brevemente
      setCurrentPage("error")
      setTimeout(() => {
        setCurrentPage("help")
      }, 2000)
    }

    setCommand("")
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCommand(e.target.value)
  }

  const toggleMenu = () => {
    console.log("Toggle menu clicked, current state:", isMenuOpen)
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = 0
    }
  }, [currentPage])

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)

    return () => clearInterval(interval)
  }, [])

  // Focus en el input cuando se carga la página
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  return (
    <div className="min-h-screen relative overflow-hidden bg-black">
      {/* Animated Background Gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 sm:-top-40 sm:-right-40 w-40 h-40 sm:w-80 sm:h-80 bg-gradient-to-br from-green-500/20 via-emerald-500/10 to-teal-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 -left-20 sm:-bottom-40 sm:-left-40 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-tr from-blue-500/15 via-cyan-500/10 to-green-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-64 sm:h-64 bg-gradient-to-r from-green-400/10 via-emerald-400/5 to-teal-400/10 rounded-full blur-2xl animate-bounce delay-500"
          style={{ animationDuration: "6s" }}
        ></div>
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
          linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)
        `,
            backgroundSize: "25px 25px sm:50px sm:50px",
            animation: "grid-move 20s linear infinite",
          }}
        ></div>
      </div>

      <div className="relative z-10 text-green-400 font-mono p-2 sm:p-4">
        <div
          ref={terminalRef}
          className="max-w-full sm:max-w-2xl md:max-w-4xl lg:max-w-6xl mx-auto min-h-screen overflow-y-auto scrollbar-thin scrollbar-thumb-green-600/50 scrollbar-track-gray-800/30"
        >
          {/* Terminal Header with Glassmorphism */}
          <div className="flex items-center gap-1 sm:gap-2 mb-2 sm:mb-4 p-2 sm:p-3 bg-gray-900/40 backdrop-blur-xl rounded-t-lg border border-gray-700/50 shadow-2xl relative">
            <div className="flex gap-1 sm:gap-2">
              <div
                className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full shadow-lg animate-pulse cursor-pointer"
                onClick={handleHomeClick}
              ></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full shadow-lg animate-pulse delay-100"></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full shadow-lg animate-pulse delay-200"></div>
            </div>
            <span
              className="ml-2 sm:ml-4 text-gray-400 text-xs sm:text-sm font-medium cursor-pointer truncate"
              onClick={handleHomeClick}
            >
              <span className="hidden sm:inline">quirogacamilo@dev:~$ </span>
              <span className="sm:hidden">~$ </span>
              {currentPage}
            </span>

            {/* Hamburger Menu Button - Solo en móvil */}
            <div className="ml-auto flex items-center gap-2 sm:gap-4">
              <div className="hidden sm:flex items-center gap-2">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-ping"></div>
                <span className="text-xs text-green-400/70">online</span>
              </div>

              <button
                onClick={toggleMenu}
                className="md:hidden p-2 text-green-400 hover:text-green-300 transition-colors"
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mb-4 bg-gray-900/90 backdrop-blur-xl rounded-lg border border-gray-700/50 shadow-2xl overflow-hidden">
              <div className="p-4">
                <div className="text-xs text-gray-400 mb-3 flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  Navegación
                </div>

                <div className="space-y-2">
                  {/* Home Button */}
                  <button
                    onClick={() => {
                      console.log("Home clicked")
                      handleMenuItemClick("welcome")
                    }}
                    className={`w-full text-left px-4 py-3 rounded-md text-sm font-mono transition-all duration-200 flex items-center gap-3 ${
                      currentPage === "welcome"
                        ? "bg-green-500/20 text-green-300 border-l-2 border-green-400"
                        : "text-gray-300 hover:bg-gray-700/50 hover:text-green-400"
                    }`}
                  >
                    <Home className="w-4 h-4" />
                    <span>Home</span>
                    {currentPage === "welcome" && <span className="ml-auto text-xs text-green-400">●</span>}
                  </button>

                  {menuItems.map((item) => {
                    const IconComponent = item.icon
                    return (
                      <button
                        key={item.key}
                        onClick={() => {
                          console.log(`${item.label} clicked`)
                          handleMenuItemClick(item.key)
                        }}
                        className={`w-full text-left px-4 py-3 rounded-md text-sm font-mono transition-all duration-200 flex items-center gap-3 ${
                          currentPage === item.key
                            ? "bg-green-500/20 text-green-300 border-l-2 border-green-400"
                            : "text-gray-300 hover:bg-gray-700/50 hover:text-green-400"
                        }`}
                      >
                        <IconComponent className="w-4 h-4" />
                        <span>{item.label}</span>
                        {currentPage === item.key && <span className="ml-auto text-xs text-green-400">●</span>}
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>
          )}

          {/* Terminal Content */}
          <div className="bg-gray-900/30 backdrop-blur-2xl p-3 sm:p-4 md:p-6 rounded-b-lg border-x border-b border-gray-700/50 min-h-[calc(100vh-8rem)] sm:min-h-[calc(100vh-12rem)] shadow-2xl relative overflow-hidden">
            {/* Subtle Inner Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-blue-500/5 pointer-events-none"></div>

            <div className="relative z-10">
              {/* Current Page Content */}
              <div className="mt-2 sm:mt-4 min-h-[200px] sm:min-h-[300px] mb-4 sm:mb-8">
                {isTyping ? (
                  <div className="flex items-center gap-2 sm:gap-3 text-gray-400 p-3 sm:p-4 bg-gray-800/30 rounded-lg backdrop-blur-sm">
                    <span className="text-green-400 text-sm sm:text-base">Cargando {currentPage}...</span>
                    <div className="flex gap-1">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-bounce"></div>
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-bounce delay-100"></div>
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-bounce delay-200"></div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-1">
                    {currentPage === "error" ? (
                      <div className="text-red-400 text-sm sm:text-base">
                        <p>bash: comando no encontrado</p>
                        <p className="text-gray-400">Redirigiendo a help...</p>
                      </div>
                    ) : (
                      pages[currentPage as keyof typeof pages]?.map((line, index) => (
                        <div
                          key={index}
                          className="text-gray-300 whitespace-pre-wrap leading-relaxed hover:text-gray-200 transition-colors duration-200 text-xs sm:text-sm md:text-base overflow-x-auto"
                          style={{
                            animation: `fadeInUp 0.3s ease-out ${index * 0.03}s both`,
                          }}
                        >
                          {line}
                        </div>
                      ))
                    )}
                  </div>
                )}
              </div>

              {/* Command Line Input */}
              <div className="border-t border-gray-700/50 pt-3 sm:pt-4 mt-3 sm:mt-4">
                <form onSubmit={handleCommandSubmit} className="flex items-center gap-1 sm:gap-2">
                  <span className="text-blue-400 font-semibold text-xs sm:text-sm md:text-base whitespace-nowrap">
                    <span className="hidden sm:inline">quirogacamilo@dev:~$</span>
                    <span className="sm:hidden">~$</span>
                  </span>
                  <input
                    ref={inputRef}
                    type="text"
                    value={command}
                    onChange={handleInputChange}
                    className="flex-1 bg-transparent text-green-400 outline-none font-mono placeholder-gray-500 text-xs sm:text-sm md:text-base min-w-0"
                    placeholder="Escribe un comando (help, about, services...)"
                    disabled={isTyping}
                  />
                  <div
                    className={`w-1.5 sm:w-2 h-4 sm:h-5 bg-green-400 transition-opacity duration-100 ${showCursor ? "opacity-100" : "opacity-0"}`}
                  ></div>
                </form>

                {/* Navigation Buttons - Solo en desktop */}
                <div className="hidden md:flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-700/30">
                  <button
                    onClick={() => handleMenuItemClick("welcome")}
                    className={`px-2 py-1.5 lg:px-3 lg:py-2 rounded-md text-xs lg:text-sm font-mono transition-all duration-200 flex items-center gap-1.5 lg:gap-2 ${
                      currentPage === "welcome"
                        ? "bg-green-500/20 text-green-300 border border-green-400/50"
                        : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-green-400 border border-gray-600/50"
                    }`}
                    disabled={isTyping}
                  >
                    <Home className="w-3 h-3 lg:w-4 lg:h-4" />
                    <span>Home</span>
                  </button>

                  {menuItems.map((item) => {
                    const IconComponent = item.icon
                    return (
                      <button
                        key={item.key}
                        onClick={() => handleMenuItemClick(item.key)}
                        className={`px-2 py-1.5 lg:px-3 lg:py-2 rounded-md text-xs lg:text-sm font-mono transition-all duration-200 flex items-center gap-1.5 lg:gap-2 ${
                          currentPage === item.key
                            ? "bg-green-500/20 text-green-300 border border-green-400/50"
                            : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-green-400 border border-gray-600/50"
                        }`}
                        disabled={isTyping}
                      >
                        <IconComponent className="w-3 h-3 lg:w-4 lg:h-4" />
                        <span>{item.label}</span>
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
      @keyframes grid-move {
        0% { transform: translate(0, 0); }
        100% { transform: translate(25px, 25px); }
      }
      
      @media (min-width: 640px) {
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
      }
      
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(10px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes slideInRight {
        from {
          opacity: 0;
          transform: translateX(10px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }
    `}</style>
    </div>
  )
}
