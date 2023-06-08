import Link from "next/link";

import AboutLayout from "./layout";

const about = () => {

  const cars = ["pride","bmw" , "volvo"]




  return (
    <div>
      <h1> hi this is a about page</h1>

      <Link href={"/"}>
        <button className="btn btn-secondary">home</button>
        
      </Link>


      {cars.map((car, index) => (
  <p key={index}>{car}</p>
))}

    </div>
  );
};

about.getLayout = () => <AboutLayout/>

export default about;
