import { useEffect, useState } from 'react';
import { getStoredItem, saveToLocalStorage } from '../../Utilities/localStorage';
import Bottle from '../Bottle/Bottle';

const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  const [cart,setCart]=useState([]);

  useEffect(() => {
    fetch("../../../public/bottles.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);
    //   get stored data from local storage

    useEffect(()=>{
        console.log("Called the use effect",bottles.length);
        if(bottles.length){
            const storedData = getStoredItem();
            console.log(storedData,bottles);
            const savedCart=[];
            for (const id of storedData) {
                console.log(id);
                const bottle = bottles.find((bottle)=>bottle.id === id);
                if(bottle){
                    savedCart.push(bottle);
                }
            }
            setCart(savedCart)
        }
    },[bottles])




  const handlePurchase =(bottle)=>{
    const newCart=[...cart,bottle];
    setCart(newCart);
    saveToLocalStorage(bottle.id)
  }
  return (<>
        <div>
            {
                cart.map((bottle)=><li key={bottle.id}>{bottle.name}</li>)
            }
        </div>


        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {
          bottles.map((bottle)=><Bottle
           key={bottle.id}
           bottle={bottle}
           handlePurchase={handlePurchase}
           ></Bottle>)
        }
      </div>


  </>);
};

export default Bottles;
