import  React  from  'react';

const  GenerateSimpson = ({ selectSimpson }) => {
    return (
        <div  className="GenerateSimpson">
        <button  onClick={selectSimpson}>Get simpson</button>
        </div>
    );
};

export  default  GenerateSimpson;