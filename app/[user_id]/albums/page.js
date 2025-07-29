export default async function AlbumPage({ params }) {
  const userId = Number(params.user_id);// userId sayıya çevirmemiz lazım

  let data = [];

  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`);//fetch edip app/[user_id]/albums/page.js kısmı çalıştırı ve bunu url de yansıtır bu sayde o user ıd ye ait albumler gelir
    data = await response.json();
  } catch (e) {
    console.error("Albüm verisi alınırken hata oluştu:", e);//konsola hata mesajı yazdırdım
  }

  return (
    <div>
      <h1 className="text-amber-500 items-center justify-center flex font-bold font-serif text-3xl mt-2.5 mb-3.5">Kullanıcı {userId}'Albümleri</h1>
      {(() => {
        if (data.length > 0) {
          return data.map((album) => (
            <div key={album.id}>
              <p>{album.title}</p>
            </div>
          ));
        } else {
          return <p>Bu kullanıcıya ait albüm bulunamadı.</p>;
        }
      })()}
    </div>
  );
}
