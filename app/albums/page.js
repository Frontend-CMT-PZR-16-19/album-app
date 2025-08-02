import Link from "next/link";

export default async function AlbumPage(){
   let albums = []; // Albüm verilerini JSONPlaceholder API'sinden çekiyoruz
    
   try {
    const response = await fetch("https://jsonplaceholder.typicode.com/albums"); // Albüm verilerini çekiyoruz
    albums = await response.json(); // Albüm verilerini JSON formatında alıyoruz
   }catch (error) {
    console.error("Albüm yüklenirken hata oluştu:", error);
}
    return (
        <div className="container mx-auto p-10">  
            <h1 className="text-3xl text-center font-bold mb-5 bg-blue-400">Albüm Listesi</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {albums.map((album) => ( // Albümleri haritalıyoruz.
                <Link key={album.id} // Albüm ID'sini kullanarak her albüm için bir bağlantı oluşturuyoruz
                    href={`/albums/${album.id}/photos`} 
                    className="bg-white p-5 rounded shadow"
                >
                    <h2 className="text-xl text-black text-shadow-2xs font-semibold">{album.title}</h2>
                    <p className="text-black">Albüm ID: {album.id}</p>
                </Link>
            ))}
            </div>
        </div>
    )
}