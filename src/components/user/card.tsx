

export default function Card() {
    
    

    
    return (
        <>
                <div className="bg-emerald-50 rounded-2xl p-6 border-2 border-emerald-200">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-emerald-700 text-sm font-medium">{producto}</span>
                    <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-bold">+2 Tokens</span>
                  </div>
                  <div className="text-emerald-800 text-lg font-semibold mb-2">{total_canitdad} acumulados</div>
                  <div className="w-full bg-emerald-200 rounded-full h-3">
                    <div className="bg-emerald-500 h-3 rounded-full" style={{ width: '50%' }}></div>
                  </div>
                </div>
                </>
        )}