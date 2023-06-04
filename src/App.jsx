import Comments from "./comments/Comments";

const App = () => {
  return (
    <div className="bg-indigo-500  text-white">
      <div className="container mx-auto py-20">
        <h1 className="text-4xl font-semibold leading-normal">
          Roses are red. Violet are blue. Sugar is sweet. And so are you
        </h1>
        <Comments currentUserId="1" />
      </div>
    </div>
  );
};

export default App;
