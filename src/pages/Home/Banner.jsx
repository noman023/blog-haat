export default function Banner() {
  return (
    <div className="text-center py-10 md:pb-28">
      <h1 className="text-slate-100 text-4xl md:text-6xl font-bold">
        Welcome to Blog Haat!
      </h1>

      <div className="text-xl md:text-3xl italic space-y-1 mt-5 md:mt-7">
        <h3>
          Learn from the{" "}
          <span className="text-orange-500 underline">experience</span> people
          or
        </h3>

        <h3>
          Write for the{" "}
          <span className="text-orange-500 underline">beginners!</span>
        </h3>
      </div>
    </div>
  );
}
