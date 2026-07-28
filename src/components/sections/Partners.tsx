import React from 'react'

function Partners() {
  return (
    <section className="py-2 md:py-10 p-1 md:px-8 max-w-7xl mx-auto">
        <h3 className="text-center text-brand-dark font-bold text-xl mb-6 md:mb-10">
            Proud to Partner With
        </h3>
        
        <div className="flex justify-center items-center gap-5 flex-wrap">
            <img src="/microsoft.png" alt="Microsoft" className="h-8 grayscale opacity-70" />
            <img src="/google-cloud.png" alt="Google Cloud" className="h-8 grayscale opacity-70" />
            <img src="/power-bi.png" alt="Power BI" className="h-8 grayscale opacity-70" />
            <img src="/tableau.png" alt="Tableau" className="h-8 grayscale opacity-70" />
        </div>
    </section>
  )
}

export default Partners
