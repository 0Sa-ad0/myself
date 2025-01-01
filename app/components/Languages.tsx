const languages = [
  { id: 1, name: 'English', level: 'Native' },
  { id: 2, name: 'Spanish', level: 'Intermediate' },
  { id: 3, name: 'French', level: 'Basic' },
]

export default function Languages() {
  return (
    <section id="languages" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Languages</h2>
        <div className="flex justify-center space-x-6">
          {languages.map((lang) => (
            <div key={lang.id} className="text-center">
              <h3 className="font-bold text-lg">{lang.name}</h3>
              <p className="text-gray-600">{lang.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

