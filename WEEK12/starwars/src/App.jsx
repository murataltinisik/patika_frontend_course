// Components
import Input from "./components/Input";
import Button from "./components/Button";
import Card from "./components/Card";
import { useEffect, useState } from "react";
import Modal from "./components/Modal";

const App = () => {
  //
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [item, setItem] = useState({});
  const [filteredData, setFilteredData] = useState(data);
  const [isShowDetail, setIsShowDetail] = useState(false);

  useEffect(() => {
    setTimeout(async () => {
      await fetchDataAsync();
    }, 0);
  }, []);

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  // Fetch data from API
  const fetchDataAsync = async () => {
    // Set Loading
    setLoading(true);

    // Fetch data
    await fetch("https://swapi.info/api/vehicles")
      .then(async (res) => setData(await res.json()))
      .then((json) => console.log(json))
      .catch((error) => console.error(error));

    // Set Loading
    setLoading(false);
  };

  // Filter data
  const onFilterAsync = async () => {
    // Set Loading
    setLoading(true);

    setFilteredData(
      data.filter((item) => {
        if (item.name.toLowerCase().indexOf(search.toLowerCase()) !== -1) {
          return item;
        }
      })
    );

    // Set Loading
    setLoading(false);
  };

  return (
    <div className="w-full h-[100vh] flex flex-col gap-10 justify-center items-center">
      {/* TITLE */}
      <h1 className="star-wars-font text-6xl text-yellow-500 font-bold">
        Star Wars
      </h1>

      {/* FILTER */}
      <div className="flex gap-5 justify-center items-center w-[25%] border-b border-gray-200 pb-5 mb-5">
        {/* LABEL */}
        <span className="text-xs text-gray-400">Name/Model</span>

        {/* INPUT */}
        <Input onChange={(e) => setSearch(e.target.value)} />

        {/* BUTTON */}
        <Button title={"Filter"} onClick={onFilterAsync} />
      </div>

      {/* LOADING */}
      {loading && "Yükleniyor..."}

      {/* DETAIL */}
      <Modal isOpen={isShowDetail} setIsOpen={setIsShowDetail} item={item} />

      {/* CARDS */}
      <div className="h-[700px] overflow-auto">
        <div className="grid grid-cols-6 gap-5 w-full px-10">
          {filteredData?.map((item, index) => (
            <div
              onClick={() => {
                // Set Item
                setItem(item);

                // Set Is Show Detail
                setIsShowDetail(true);
              }}
            >
              <Card key={index} name={item.name} model={item.model} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
