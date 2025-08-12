import { useRef, useState } from "react";
import { Icon } from '@iconify/react';
import FormComprar from "./FormComprar";

const Comprar = ({ onClose, data }) => {
 
  return (
    <div className="fixed top-10 inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 pt-70">
      <FormComprar onClose={onClose} data={data}/>
    </div>
  );
};

export default Comprar;
