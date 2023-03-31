import './pickUpScrollList.less';
import PickUpScrollListBody from './listBody/listBody'
// 引入静态文件
import listTitleBg from '../../assets/images/pick_up/listComponentImage/Rectangle_1.png'
import listTitleIcon from '../../assets/images/pick_up/listComponentImage/Polygon_1.png'

interface MyComponentProps{
  title: string,
  listTitle:listTitleProps,
  data:any[]
}

interface listTitleProps {
  firstTitle: string,
  secondTitle: string,
  thirdTitle:string
}

function pickUpScrollList({ title,listTitle, data }: MyComponentProps) {
  
  return (
    <div className="pickUpScrollList">
      <div className="pickUpScrollList-TopTitle">
        <img className="pickUpScrollList-title_bg" src={listTitleBg} alt="加载失败" />
        <img className="pickUpScrollList-title_icon" src={listTitleIcon} alt="加载失败" />
        <span>{ title }</span>
      </div>
      <div className="pickUpScrollList-BottomTitle">
        <div className="pickUpScrollList-BottomTitle_one">{ listTitle.firstTitle}</div>
        <div className="pickUpScrollList-BottomTitle_two">{ listTitle.secondTitle}</div>
        <div className="pickUpScrollList-BottomTitle_three">{ listTitle.thirdTitle }</div>
      </div>
      <div className="pickUpScrollList-body">
        <PickUpScrollListBody items={data} />
      </div>
    </div>
  )
}


export default pickUpScrollList
