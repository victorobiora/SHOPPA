import ItemData from "./ItemData"
import classes from '../styles/SearchData.module.css';


const dummyData = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]

const SearchData = props => {
    return <>
      <form className={classes.form}>
            <select>
                <option>Lowest Prices First</option>
                <option>Highest Prices First</option>
                <option>Highly rated First</option>
            </select>
            <div>
            <input type="text" name="searchitem" placeholder="search for product    
            " id={props.key} />
            <button> search</button>
            </div>    
        </form>
        <section className={classes.itemsList}>
              {dummyData.map(el=> (
            <ItemData key={el}/>
        ))} 
            </section>
     
    </>
      
    
}


export default SearchData