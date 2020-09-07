import React from 'react';
import "../CSS/SubTotalCSS.css";
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';


function SubTotal() {
    const [{basket},dispatch] = useStateValue();

    return (
        <div className="subTotal">
            {/* Prezzo */}
            Riepilogo:       
            <span>n. articoli:<strong>{basket?.length}</strong></span>     
            <span>Prezzo:<small>$</small><strong>{parseFloat(getBasketTotal(basket)).toFixed(2)}</strong></span>
            <button>Procedi al pagamento</button>
        </div>
    );
}

export default SubTotal
