const Drop = ({ bar }) => {
    
  bar.map((item, index) => {
    if (activeItem === true) {
      return (
        <li key={item.id} className="" style={{ top: "10px" }}>
          <a className="font-medium text-start m-1 text-base" href="">
            {item.icon}
            <p>{item.name}</p>
          </a>
        </li>
      );
    } else {
      return null;
    }
  });
};

export default Drop;
