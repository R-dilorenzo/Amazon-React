import React from 'react';
import StarIcon from '@material-ui/icons/Star';
import { useStateValue } from './StateProvider';


function FilterRating({number}) {
    const [{ratingRichiesto }, dispatch] = useStateValue();

    const changeRating = () => {
        dispatch({
            type: "CHANGE_RATING",
            number: number,
        });
    };

    return (
        <div>
            <div>
            <label className="filter__ratingSearch" onClick={changeRating}>
                {
                    [...Array(number)].map((e, i) => 
                        <StarIcon className="filter__iconSearch" key={i}></StarIcon>
                        )
                }
                </label><label style={{fontSize:"12px"}}>o più...</label>
            </div>
        </div>
    )
}

export default FilterRating
