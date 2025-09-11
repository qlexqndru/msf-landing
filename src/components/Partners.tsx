export default function Partners() {
  const partners = [
    {
      name: "NATO",
      logo: "nato-logo",
      category: "security"
    },
    {
      name: "IRI",
      logo: "iri-logo", 
      category: "democracy"
    },
    {
      name: "GMF",
      logo: "gmf-logo",
      category: "policy"
    },
    {
      name: "Moldova Government",
      logo: "moldova-gov",
      category: "government"
    },
    {
      name: "New Europe Center",
      logo: "nec-logo",
      category: "think-tank"
    },
    {
      name: "New Strategy Center",
      logo: "nsc-logo",
      category: "strategy"
    },
    {
      name: "ASPEN Romania",
      logo: "aspen-logo",
      category: "institute"
    },
    {
      name: "DCAF",
      logo: "dcaf-logo",
      category: "governance"
    },
    {
      name: "PISA",
      logo: "pisa-logo",
      category: "security"
    }
  ]

  return (
    <section id="partners" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-600 mb-4">
            PARTNERS
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            The Moldova Security Forum 2025 is made possible through the support and 
            collaboration of our esteemed partners:
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-6 flex items-center justify-center hover:shadow-lg transition-shadow duration-300 border border-gray-100"
            >
              {/* Partner Logo Placeholder */}
              <div className="w-full h-20 flex items-center justify-center">
                {partner.name === "NATO" && (
                  <div className="bg-blue-800 text-white px-4 py-2 rounded font-bold text-lg">
                    NATO
                  </div>
                )}
                {partner.name === "IRI" && (
                  <div className="bg-red-600 text-white px-4 py-2 rounded font-bold text-lg">
                    IRI
                  </div>
                )}
                {partner.name === "GMF" && (
                  <div className="bg-gray-800 text-white px-4 py-2 rounded font-bold text-lg">
                    GMF
                  </div>
                )}
                {partner.name === "Moldova Government" && (
                  <div className="bg-yellow-500 text-white px-3 py-2 rounded-full font-bold text-sm text-center">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-xs">MD</span>
                    </div>
                  </div>
                )}
                {partner.name === "New Europe Center" && (
                  <div className="bg-blue-600 text-white px-3 py-2 rounded font-bold text-sm text-center flex items-center">
                    <span>★</span>
                    <span className="ml-1 text-xs">NEC</span>
                  </div>
                )}
                {partner.name === "New Strategy Center" && (
                  <div className="bg-indigo-600 text-white px-3 py-2 rounded font-bold text-sm text-center">
                    NEW STRATEGY<br/>CENTER
                  </div>
                )}
                {partner.name === "ASPEN Romania" && (
                  <div className="bg-green-700 text-white px-4 py-2 rounded font-bold text-lg">
                    ASPEN
                  </div>
                )}
                {partner.name === "DCAF" && (
                  <div className="bg-purple-600 text-white px-4 py-2 rounded font-bold text-lg">
                    DCAF
                  </div>
                )}
                {partner.name === "PISA" && (
                  <div className="bg-orange-600 text-white px-4 py-2 rounded font-bold text-lg">
                    PISA
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}