import Comments from "./comments/Comments";

const App = () => {
  return (
    <div className="">
      <div className="max-w-sm md:max-w-2xl mx-auto">
        <nav className="py-5 text-center text-2xl font-bold bg-blue-400 text-white">
          Khant Comment System
        </nav>
        <div className="bg-slate-200 p-6">
          <div className="flex items-start gap-2">
            <img
              src="/profile.webp"
              alt=""
              className="w-11 h-11 rounded-full border border-4 border-blue-500"
            />
            <div>
              <p className="text-lg font-semibold text-blue-500">
                Kaung Min Khant
              </p>
              <span>9h</span>
            </div>
          </div>
          <h1 className="text-xl font-semibold leading-normal ">
            Roses are red. Violet are blue. Sugar is sweet. And so are you
          </h1>
        </div>
        <Comments currentUserId="1" />
      </div>
    </div>
  );
};

export default App;
