
function Partners() {
  return (
    <section className="py-2 md:py-10 p-1 md:px-8 max-w-7xl mx-auto">
        <h3 className="text-center text-brand-dark font-bold text-xl mb-6 md:mb-10">
            Proud to Partner With
        </h3>
        
        <div className="flex justify-center items-center gap-8 md:gap-16 flex-wrap">
            <img src="/microsoft.png" alt="Microsoft" className="h-8 md:h-12 object-contain" />
            <img src="/googlecloud.png" alt="Google Cloud" className="h-8 md:h-15 object-contain" />
            <img src="/powerbi.png" alt="Power BI" className="h-8 md:h-15 object-contain" />
            <img src="/tableau.png" alt="Tableau" className="h-8 md:h-15 object-contain" />
        </div>
    </section>
  )
}

export default Partners
