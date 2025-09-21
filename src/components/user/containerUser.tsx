export default function ContainerUser() {
    
    return (
        <>
            <div className="bg-white rounded-3xl p-8 shadow-2xl border-2 border-emerald-200">
              <h3 className="text-2xl font-bold text-emerald-800 mb-6 text-center">
                🎁 Sistema de Bonos
              </h3>
              
              <div className="space-y-6">
                <div className="bg-emerald-50 rounded-2xl p-6 border-2 border-emerald-200">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-emerald-700 text-sm font-medium">Nivel Básico</span>
                    <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-bold">+2 Tokens</span>
                  </div>
                  <div className="text-emerald-800 text-lg font-semibold mb-2">5kg acumulados</div>
                  <div className="w-full bg-emerald-200 rounded-full h-3">
                    <div className="bg-emerald-500 h-3 rounded-full" style={{ width: '33%' }}></div>
                  </div>
                </div>

                <div className="bg-emerald-50 rounded-2xl p-6 border-2 border-emerald-200">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-emerald-700 text-sm font-medium">Nivel Intermedio</span>
                    <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-bold">+5 Tokens</span>
                  </div>
                  <div className="text-emerald-800 text-lg font-semibold mb-2">10kg acumulados</div>
                  <div className="w-full bg-emerald-200 rounded-full h-3">
                    <div className="bg-emerald-500 h-3 rounded-full" style={{ width: '66%' }}></div>
                  </div>
                </div>

                <div className="bg-emerald-50 rounded-2xl p-6 border-2 border-emerald-200">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-emerald-700 text-sm font-medium">Nivel Avanzado</span>
                    <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-bold">+10 Tokens</span>
                  </div>
                  <div className="text-emerald-800 text-lg font-semibold mb-2">25kg acumulados</div>
                  <div className="w-full bg-emerald-200 rounded-full h-3">
                    <div className="bg-emerald-500 h-3 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-emerald-100 rounded-xl border-2 border-emerald-300">
                <p className="text-emerald-800 text-sm text-center">
                  � <strong>Bonos acumulativos:</strong> Mientras más recicles, más bonos obtienes
                </p>
              </div>
            </div>
              </>
              )
            }