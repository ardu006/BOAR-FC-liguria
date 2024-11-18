const News = () => {

  return (

    <div className="max-w-7xl mx-auto px-4 py-8">

      <h1 className="text-3xl font-bold mb-8 text-pink-500">News</h1>

      <div className="space-y-8">

        {/* Example news article - duplicate and modify for each news item */}

        <article className="bg-white rounded-lg shadow-md overflow-hidden">

          <img 

            src="https://images.unsplash.com/photo-1517466787929-bc90951d0974?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"

            alt="News"

            className="w-full h-48 object-cover"

          />

          <div className="p-6">

            <h2 className="text-2xl font-semibold mb-2">Titolo News</h2>

            <p className="text-gray-600 mb-4">Data pubblicazione</p>

            <p className="text-gray-800">

              Contenuto dell'articolo...

            </p>

          </div>

        </article>

      </div>

    </div>

  );

};

export default News;
