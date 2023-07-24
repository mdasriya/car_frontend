import React from 'react'
import GridLoader from "react-spinners/GridLoader";
import "../index.css"
const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };
const Spinner = () => {
    
    return (
        <div className='spinner'>
            <GridLoader
         color={"#36d7b7"}
        // loading={loading}
        cssOverride={override}
        size={15}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
        </div>
    )
}

export default Spinner
