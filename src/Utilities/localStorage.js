const getStoredItem =()=>{
    const storedString = localStorage.getItem("cart");
    if(storedString){
        return JSON.parse(storedString);
    }
    return [];
}

const saveToLocalStorage=(id)=>{
    const savedItem = getStoredItem();
    savedItem.push(id);
    const cartStringified = JSON.stringify(savedItem);
    localStorage.setItem("cart",cartStringified);
}

export {saveToLocalStorage,getStoredItem}