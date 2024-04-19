import React, { useEffect, useState } from "react";

const Quots = () => {
  const [joke, setjoke] = useState("Loading...");
  useEffect(() => {
    (async () => {
      const res = await fetch(
        "https://official-joke-api.appspot.com/jokes/random"
      );
      const data = await res.json();

      setjoke(data.setup + " " + data.punchline);
    })();
  }, []);

  return (
    <>
      <div className="w-full h-auto bg-sky-200 text-center font-extrabold text-2xl py-3 text-sky-950">
        {joke}....😀
      </div>
    </>
  );
};

export default Quots;
