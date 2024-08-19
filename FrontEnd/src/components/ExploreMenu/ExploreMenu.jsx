import './ExploreMenu.css'
import { menu_list } from '../../assets/frontend_assets/assets';

const ExploreMenu = ({category,setCategory}) => {

  return (
    <div className="explore-menu" id="explore-menu">
        <h1>Explore Our menu</h1>
        <p className="explore-menu-text">
            Choose from a diverse menu featuring and delectable array of dashes. 
            Our mission is to satisfy your cravings and provide you with a memorable dining experience.
        </p>
        <div className="explore-menu-list">
            {menu_list.map((item, index) => {
                return(
                    <div onClick={()=> setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} className="explore-menu-list-item" key={index}>
                        <img className={category===item.menu_name?"active":""} src={item.menu_image} alt={item.name} />
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr />
    </div>
  )
}

export default ExploreMenu