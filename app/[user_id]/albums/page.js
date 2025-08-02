export default async function AlbumPage({ params }) {
  const userId = Number(params.user_id);// userId sayıya çevirmemiz lazım 

  let data = []; //çekeceğimiz api bir json doyasının formatında ve bu verileri içine atacağimiz değişkenimizde boş bir array olmalı çünkü json dosyasında api bir aray olark tutuluyor

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
          return data.map((album) => (//burada datayı mapliyoruz albume atıyoruz ze albumden ise api deki verileri çağırıyoruz
            <div className="text-gray-500 font-medium font-serif items-center justify-center flex" key={album.id}>{/*key keywordunu kullanarak id yi işaretliyoruz çünki id guid bir yapı*/}
              <p className="mb-2 bg-sky-200 rounded-lg px-6 py-3 w-120 text-center">{album.title}</p>
            </div>
          ));
      })()}
    </div>
  );
}
