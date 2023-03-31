import listTitleIcon from '../../../assets/images/pick_up/listComponentImage/Polygon_1.png'
import listIconTransparency from '../../../assets/images/pick_up/listComponentImage/Polygon_3.png'

interface MyComponent {
  items: any[]
}

function PickUpScrollListBody({ items }:MyComponent){
  
  return (
    <div>
      {
        items.map((item,index) => (
        <div key={index} className="pickUpScrollList-body-list">
          <div className="pickUpScrollList-body-list_icon">
            <img src={listTitleIcon} alt="加载失败" />
            <img src={listIconTransparency} alt="加载失败" />
          </div>
            <div className="pickUpScrollList-body-list_Info">{item.info}</div>
            <div className="pickUpScrollList-body-list_num">{item.num}</div>
            <div className="pickUpScrollList-body-list_people">{item.people}</div>
        </div>
        ))
      }
    </div>
  )
}

export default PickUpScrollListBody;
