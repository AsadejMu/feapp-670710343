function GenreBox({ genre, onGenreChange, genres }) {
  return (
    <select value={genre} onChange={(e) => onGenreChange(e.target.value)} className="rounded-lg border border-slate-300 px-3 py-2
                   focus:outline-none focus:ring-2 focus:ring-cyan-400">
    <option value="all">ทุกประเภท</option>
      {genres.map(g => (
        <option key={g} value={g}>{g}</option>
      ))}
    </select>
  );
}

export default GenreBox;