import MovieCard from "../componence/MovieCard";
import MovieGallery from "../componence/MovieGallery";
import { movies } from "../datas/data";

function Home() {
  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-bold text-slate-800">🏠 หน้าแรก</h1>
      <p className="mt-2 text-slate-500">มาเด้อสู MovieHub</p>

      <h2 className="text-3xl font-bold text-slate-800">🏠 หนังแนะนำ</h2>
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {movies.slice(0, 3).map(m => (
          <MovieCard key={m.id} title={m.title} year={m.year} />
        ))}
      </div>
      <h3 className="mt-8 text-2xl font-bold text-slate-800">ดูหนังที่ละเรื่อง</h3>
      <div className="mt-4">
        <MovieGallery />
      </div>
    </div>
  );
}

export default Home;