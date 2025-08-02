export default async function AlbumPhotos({ params }) {
    const {album_id} = params; // Albüm ID'sini alıyoruz
    let photos = []; // Fotoğrafları depolamak için boş bir dizi oluşturuyoruz
    
    try {
        const response = await fetch (`https://jsonplaceholder.typicode.com/photos?albumId=${album_id}`); // Albüm ID'sine göre fotoğrafları çekiyoruz
        photos = await response.json(); // Fotoğrafları JSON formatında alıyoruz
    }catch (error) {
        console.error("Fotoğraflar yüklenirken hata oluştu:", error);
    }

    return (
        <div className="container mx-auto p-10">
            <h1 className="text-2xl font-bold text-center text-blue-500">Albüm Fotoğrafları</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
               {photos.map((photo) => ( // Fotoğrafları haritalıyoruz
                <div key={photo.id} className="border rounded p-2 shadow hover:shadow-lg"> 
                    <img // Fotoğrafı gösteriyoruz
                         src={photo.thumbnailUrl}
                         alt={photo.title}
                         className="w-full h-auto rounded mb-2"
                    />
                </div>
        ))}
            </div>
        </div>
    );
}