// #EFCDCC
// #D7EAF8
// #E4E4E4
// #EBE2D0
// bg-#FFFFFF

import React from "react";
import { Link } from "react-router-dom";

function Dua() {
  return (
    <div className="text-[#2e424d]">
      <div className="flex font-bold  md:flex-row flex-col justify-center items-center gap-5 p-5">
          <div className="flex justify-center text-center items-center rounded-md bg-[#EFCDCC] w-[250px] h-[150px]">
        {/* <Link to={}> */}
            <p className="text-3xl  hover:scale-125">Morning</p>
        {/* </Link> */}
          </div>
        <div className="flex justify-center text-center items-center rounded-md bg-[#D7EAF8] w-[250px] h-[150px]">
          <p className="text-3xl  hover:scale-125">Evening</p>
        </div>
        <div className="flex justify-center text-center items-center rounded-md bg-[#E4E4E4] w-[250px] h-[150px]">
          <p className="text-3xl hover:scale-125">Before Sleep</p>
        </div>
        <div className="flex justify-center text-center items-center rounded-md bg-[#EBE2D0] w-[250px] h-[150px]">
          <p className="text-3xl hover:scale-125">Salah</p>
        </div>
      </div>
    </div>
  );
}

export default Dua;

// import React from "react";

// import SingleCard from "../../shared/SingleCard/SingleCard";
// import { Doc } from "../../shared/Doc";

// const { img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22,img23,img24, img25, img26, img27, img28, img29, img30 } = Doc();
// const data = [
//     {
//       id: 1,
//       image: img1,
//       CardTitle: "Morning Dhikr",
//       CardDescription: "Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit."
//     },
//     {
//         id: 2,
//         image: img2,
//         CardTitle: "Evening Dhikr",
//         CardDescription: "Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit."
//       },
//       {
//         id: 3,
//         image: img3,
//         CardTitle: "Before Sleep Dhikr",
//         CardDescription: "Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit."
//       },
//       {
//         id: 4,
//         image: img4,
//         CardTitle: "Salah Dhikr",
//         CardDescription: "Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit."
//       },
//       {
//         id: 5,
//         image: img5,
//         CardTitle: "After Salah Dhikr",
//         CardDescription: "Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit."
//       },
//       {
//         id: 6,
//         image: img6,
//         CardTitle: "After Salah Dhikr",
//         CardDescription: "Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit."
//       },
//       {
//         id: 7,
//         image: img7,
//         CardTitle: "After Salah Dhikr",
//         CardDescription: "Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit."
//       },
//       {
//         id: 8,
//         image: img8,
//         CardTitle: "After Salah Dhikr",
//         CardDescription: "Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit."
//       },
//       {
//         id: 9,
//         image: img9,
//         CardTitle: "After Salah Dhikr",
//         CardDescription: "Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit."
//       },
//       {
//         id: 10,
//         image: img10,
//         CardTitle: "After Salah Dhikr",
//         CardDescription: "Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit."
//       },
//       {
//         id: 11,
//         image: img11,
//         CardTitle: "After Salah Dhikr",
//         CardDescription: "Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit."
//       },
//       {
//         id: 12,
//         image: img12,
//         CardTitle: "After Salah Dhikr",
//         CardDescription: "Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit."
//       },
//       {
//         id: 13,
//         image: img13,
//         CardTitle: "After Salah Dhikr",
//         CardDescription: "Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit."
//       },
//       {
//         id: 14,
//         image: img14,
//         CardTitle: "After Salah Dhikr",
//         CardDescription: "Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit."
//       },
//       {
//         id: 15,
//         image: img15,
//         CardTitle: "After Salah Dhikr",
//         CardDescription: "Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit."
//       },
//       {
//         id: 16,
//         image: img16,
//         CardTitle: "After Salah Dhikr",
//         CardDescription: "Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit."
//       },
//       {
//         id: 17,
//         image: img17,
//         CardTitle: "After Salah Dhikr",
//         CardDescription: "Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit."
//       },
//       {
//         id: 18,
//         image: img18,
//         CardTitle: "After Salah Dhikr",
//         CardDescription: "Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit."
//       },
//       {
//         id: 19,
//         image: img19,
//         CardTitle: "After Salah Dhikr",
//         CardDescription: "Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit."
//       },
//       {
//         id: 20,
//         image: img20,
//         CardTitle: "After Salah Dhikr",
//         CardDescription: "Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit."
//       },
//       {
//         id: 21,
//         image: img21,
//         CardTitle: "After Salah Dhikr",
//         CardDescription: "Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit."
//       },
//       {
//         id: 22,
//         image: img22,
//         CardTitle: "After Salah Dhikr",
//         CardDescription: "Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit."
//       },
//       {
//         id: 23,
//         image: img23,
//         CardTitle: "After Salah Dhikr",
//         CardDescription: "Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit."
//       },
//       {
//         id: 24,
//         image: img24,
//         CardTitle: "After Salah Dhikr",
//         CardDescription: "Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit."
//       },
//       {
//         id: 25,
//         image: img25,
//         CardTitle: "After Salah Dhikr",
//         CardDescription: "Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit."
//       },
//       {
//         id: 26,
//         image: img26,
//         CardTitle: "After Salah Dhikr",
//         CardDescription: "Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit."
//       },
//       {
//         id: 27,
//         image: img27,
//         CardTitle: "After Salah Dhikr",
//         CardDescription: "Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit."
//       },
//       {
//         id: 28,
//         image: img28,
//         CardTitle: "After Salah Dhikr",
//         CardDescription: "Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit."
//       },
//       {
//         id: 29,
//         image: img29,
//         CardTitle: "After Salah Dhikr",
//         CardDescription: "Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit."
//       },
//       {
//         id: 30,
//         image: img30,
//         CardTitle: "After Salah Dhikr",
//         CardDescription: "Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit."
//       }
//   ];

// const Dua = () => {

//   return (
//     <>
//       <section className="bg-[#e8e9f3] px-16 py-5 grid grid-cols-1 lg:grid-cols-4 gap-2" >
//         {data.map((item) => (
//           <div  key={item.id} className="">
//             <SingleCard
//               image={item.image}
//               CardTitle={item.CardTitle}
//               titleHref="/#"
//               btnHref="/#"
//               Button="View Duas"
//             />
//           </div>
//     ))}
//       </section>
//     </>
//   );
// };

// export default Dua;


// {
//   "id": 2,
//   "name": "",
//   "arabic": "",
//   "uccharon": "",
//   "meaning":""
// },

