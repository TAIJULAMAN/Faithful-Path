import React from 'react'

function Bipod() {
  const bipod = [
    {
      id: 1,
      name: "",
      arabic: "",
      bangla: "",
      meaning: "",
    },
     {
      id: 2,
      name: "",
      arabic: "",
      bangla: "",
      meaning: "",
    },
     {
      id: 3,
      name: "",
      arabic: "",
      bangla: "",
      meaning: "",
    },
     {
      id: 4,
      name: "",
      arabic: "",
      bangla: "",
      meaning: "",
    },
     {
      id: 5,
      name: "",
      arabic: "",
      bangla: "",
      meaning: "",
    },
     {
      id: 6,
      name: "",
      arabic: "",
      bangla: "",
      meaning: "",
    },
     {
      id: 7,
      name: "",
      arabic: "",
      bangla: "",
      meaning: "",
    },
     {
      id: 8,
      name: "",
      arabic: "",
      bangla: "",
      meaning: "",
    },
     {
      id: 9,
      name: "",
      arabic: "",
      bangla: "",
      meaning: "",
    },
     {
      id: 10,
      name: "",
      arabic: "",
      bangla: "",
      meaning: "",
    }
  ]
  return (
    <div className="relative text-xl">
      <ul className="space-y-2">
        {bipod.map((data, id) => (
          <li
            key={id}
            className="space-y-3 p-4 border border-[#a6a6a8] rounded-lg"
          >
            <h1 className="text-xl font-bold mb-2 mt-2">{data.name}</h1>
            <div className="border-[1px] border-[#98dad9]"></div>
            <p className="text-center font-bold py-5">{data.arabic}</p>
            <p>
              <span className="font-bold">উচ্চারণঃ </span>
              {data.bangla}
            </p>
            <p>
              <span className="font-bold">অর্থঃ </span>
              {data.meaning}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Bipod