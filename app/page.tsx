import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">
      {/* Section 1: Main Services */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center dark:text-white">Korsan Taksi Hizmetleri</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Box 1 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 dark:text-white">Esenyurt Korsan Taksici</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Esenyurt bölgesinde uygun fiyatlı korsan taksi hizmetleri için profesyonel çözümler.
            </p>
            <a href="https://esenyurtkorsantaksici.blog/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
              Esenyurt Korsan Taksici
            </a>
          </div>
          
          {/* Box 2 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 dark:text-white">Korsan Taksi İstanbul</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              İstanbul'un her semtine uygun fiyatlı korsan taksi çözümleri ve 7/24 hizmet.
            </p>
            <a href="https://korsantaksiistanbul.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
              Korsan Taksi İstanbul
            </a>
          </div>
          
          {/* Box 3 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 dark:text-white">Esenyurt Korsan Taksi</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Esenyurt bölgesinde güvenilir ve ekonomik korsan taksi alternatifleri.
            </p>
            <a href="https://koctaksi.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
              Korsan Taksi Esenyurt
            </a>
          </div>
        </div>
      </section>

      {/* Section 2: Sabiha Gökçen Services */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center dark:text-white">Sabiha Gökçen Havalimanı Transfer</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Box 1 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 dark:text-white">Mavi Korsan Taksi</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Sabiha Gökçen Havalimanı'na özel uygun fiyatlı korsan taksi çözümleri.
            </p>
            <a href="https://mavitaksi.com/sabiha-gokcen-korsan-taksi" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
              Sabiha Gökçen Korsan Taksi
            </a>
          </div>
          
          {/* Box 2 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 dark:text-white">İstanbul Korsan Taksi</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Sabiha Gökçen Havalimanı transferleri için ekonomik korsan taksi alternatifleri.
            </p>
            <a href="https://korsantaksiistanbul.com/sabiha-gokcen-korsan-taksi/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
              Sabiha Gökçen Korsan Taksi
            </a>
          </div>
          
          {/* Box 3 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 dark:text-white">Esenyurt Korsan Taksi</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Sabiha Gökçen'e Esenyurt'tan özel korsan taksi hizmeti.
            </p>
            <a href="https://esenyurtkorsantaksici.blog/sabiha-gokcen-korsan-taksi/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
              Sabiha Gökçen Korsan Taksi
            </a>
          </div>
        </div>
      </section>

      {/* Section 3: District Services */}
      <section>
        <h2 className="text-2xl font-bold mb-8 text-center dark:text-white">Semt Özel Korsan Taksi Hizmetleri</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Box 1 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 dark:text-white">Hadımköy Korsan Taksi</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Hadımköy bölgesinde güvenilir ve uygun fiyatlı korsan taksi çözümleri.
            </p>
            <a href="https://koctaksi.com/hadimkoy-korsan-taksi/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
              Hadımköy Korsan Taksi
            </a>
          </div>
          
          {/* Box 2 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 dark:text-white">Mahmutbey Korsan Taksi</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Mahmutbey ve çevresinde ekonomik korsan taksi hizmetleri.
            </p>
            <a href="https://koctaksi.com/mahmutbey-korsan-taksi/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
              Mahmutbey Korsan Taksi
            </a>
          </div>
          
          {/* Box 3 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 dark:text-white">Nişantaşı Korsan Taksi</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Nişantaşı bölgesinde lüks ve konforlu korsan taksi alternatifleri.
            </p>
            <a href="https://koctaksi.com/nisantasi-korsan-taksi/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
              Nişantaşı Korsan Taksi
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-16 text-center text-gray-500 dark:text-gray-400">
        <p>© 2023 Korsan Taksi Hizmetleri. Tüm hakları saklıdır.</p>
        <div className="mt-4 flex justify-center space-x-4">
          <a href="https://mavitaksi.com/" className="hover:underline">İstanbul Korsan Taksi</a>
          <a href="https://korsantaksiistanbul.com/" className="hover:underline">Korsan Taksi İstanbul</a>
          <a href="https://esenyurtkorsantaksici.blog/" className="hover:underline">Esenyurt Korsan Taksi</a>
        </div>
      </footer>
    </div>
  );
}
