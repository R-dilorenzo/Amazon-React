import LOTR from '../img/lord_of_the_rings_book.jpg';
import PC from '../img/portatile.jpg';
import Iphone from '../img/iphone.jpg';
import HarryPotter from '../img/harryPotter.jpg'
import RogueOne from '../img/rogueOne.jpg'


export const initialState={
    basket:[],
    user:null,
    prodotti:[ 
    {
        id:"1" ,
        title:"The Lord of he Ring",
        price:18.79,
        rating:5,
        image:LOTR, 
        categoria:["Libri"],
    },
    {
        id:"2" ,
        title:"PC portatile Acer",
        price:599.99,
        rating:3,
        image:PC, 
        categoria:["Informatica"],
    },
    {
        id:"3" ,
        title:"Iphone",
        price:1122.99,
        rating:4,
        image:Iphone, 
        categoria:["Informatica"],
    },
    {
        id:"4" ,
        title:"Harry Potter",
        price:12.50,
        rating:2,
        image:HarryPotter, 
        categoria:["Libri"],
    },
    {
        id:"5" ,
        title:"Star Wars:Rogue One",
        price:9.79,
        rating:4,
        image:RogueOne, 
        categoria:["DVD"],
    }
    ],

    categoria:[],
    ratingRichiesto:0,
    minPrezzo:0.00,
    maxPrezzo:10000000.00,

    type: {
        Libri: false,
        Informatica: false,
        DVD: false
    },
};

export const getBasketTotal=(basket)=>basket?.reduce((amount,item) =>item.price+amount,0);

/**
 * action==eventi 
 */
const reducer = (state,action) => {
    console.log(action);
    switch(action.type){
        case 'ADD_TO_BASKET':
            //Aggiungo item al carrello
                       
            //restituisco qualsiasi cosa elemento state è, ed inoltre il carrello
            return { 
                ...state,
                //tutto ciò che vi era nel basket e item inserito attraverso il dispatch in Product.js
                basket: [...state.basket, action.item],
            };
            break;
        case 'REMOVE_FROM_BASKET':
            //Rimuovo item dal carrello

            //clono il carrello esistente
            let newBasket=[...state.basket];

            const index=state.basket.findIndex((basketItem => basketItem.id ===action.id));
            if (index >=0){
                //item esiste nel carrello e lo rimuovo
                newBasket.splice(index, 1);
            }else{
                console.warn('Non è possibile rimuovere item poichè non è presente nel carrello');
            }
            //restituisco qualsiasi cosa elemento state è
            return { 
                ...state,
                basket:newBasket,
            };
            break;

            case 'CHANGE_CATEGORIA':
                if(action.checked){
                    return { 
                        ...state,
                        categoria:[...state.categoria,action.evento],

                        type: {
                            ...state.type,
                            [action.id]: !state.type[action.id]
                         },
                    };
                }else{
                   // Rimuovo item: utilizzo un nuovo array che è mappato con array
                   // "categoria" escludendo action.evento("action.evento"=>valore checkbox)
                   var filteredAry = state.categoria.filter(function(e) { return e !== action.evento })
                    return { 
                        ...state,
                        categoria:filteredAry,

                        type: {
                            ...state.type,
                            [action.id]: !state.type[action.id]
                         },
                    };
                }
                break;
            
            case 'CHANGE_RATING':
                const newRating=action.number;
                return { 
                    ...state,
                    ratingRichiesto:newRating,
                };
                break;

            case 'REMOVE_CATEGORIA':
                return { 
                    ...state,
                    categoria:[],
                    type: {
                        Libri: false,
                        Informatica: false
                    },
                };
                break;

            case 'CHANGE_MIN':
                const newMin=action.value;
                return { 
                    ...state,
                    minPrezzo:newMin,
                };
                break;

            case 'CHANGE_MAX':
                let newMax=action.value;
                if(newMax == 0){
                    newMax=10000000.00
                }
                return { 
                    ...state,
                    maxPrezzo:newMax,
                };
                break;
              
        //caso di default da inserire sempre 
        default:
            return state;
    }
};

export default reducer;
