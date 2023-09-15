import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext'; 

const Currency = () => {
    const {currency} = useContext(AppContext); // Initialize with a default option
  
    const changeCurrency = (val)=>{
      currency({
          type: 'CHG_CURRENCY',
          payload: val,
      })
}

  
return (
  <div className='alert alert-secondary'> currency {
<select name="currency" id="currency" onChange={event=>changeCurrency(event.target.value)}>
  <option value="£">pounds(£)</option>
  <option value="$">Dollors($)</option>
  <option value="₹">Rupees(₹)</option>
  <option value="€">Euros(€)</option>
  
</select>	
}	
</div>
);
};
  
  export default Currency;