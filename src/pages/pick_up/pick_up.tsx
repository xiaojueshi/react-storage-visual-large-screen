import "./pick_up.less"
import PickUpScrollList from '../../components/pick_up/pickUpScrollList'

function DistributionPage() {
  // 标题对象
  const listTitle = {
    firstTitle: '客户信息',
    secondTitle: '预拣数量',
    thirdTitle:'拣货员'
  }
  // 标题名称
  const leftBoxTitle = '待拣货订单'
  const centerLeftBoxTitle = '正在拣货中订单'
  const centerRightBoxTitle = '待复核订单'
  const rightTopBoxTitle = '复核中订单'
  const rightBottomBoxTitle = '待配送订单'
  // list数据
  const boxes = [
    {
      info: '深圳市金沃林科技有限公司',
      num: 100,
      people: "吴宦颉"
    },
    {
      info: '深圳市金沃林科技有限公司',
      num: 100,
      people: "吴宦颉"
    },
    {
      info: '深圳市金沃林科技有限公司',
      num: 100,
      people: "吴宦颉"
    }
  ];
  return (
    <div className="pick-up_IndexPage">
      {/* 左边 */}
      <div className="pick-up_IndexPage_left">
        <PickUpScrollList data={boxes} listTitle={listTitle} title={leftBoxTitle} />
      </div>
      {/* 中间 */}
      <div className="pick-up_IndexPage_center">
        <div className="pick-up_IndexPage_center_top">
          <div className="pick-up_IndexPage_center_top_top">
            <div className="pick-up_IndexPage_center_top_top_left">
              <div className=""></div>
              <div className=""></div>
              <div className=""></div>
            </div>
            <div className="pick-up_IndexPage_center_top_top_center"></div>
            <div className="pick-up_IndexPage_center_top_top_right"></div>
          </div>
          <div className="pick-up_IndexPage_center_top_bottom">
            
          </div>
        </div>
        <div className="pick-up_IndexPage_center_bottom">
          <div>
            <PickUpScrollList data={boxes} listTitle={listTitle} title={centerLeftBoxTitle} />
          </div>
          <div>
            <PickUpScrollList data={boxes} listTitle={listTitle} title={centerRightBoxTitle} />
          </div>
        </div>
      </div>
      {/* 右边 */}
      <div className="pick-up_IndexPage_right">
        <div className="pick-up_IndexPage_right_top">
        <PickUpScrollList data={boxes} listTitle={listTitle} title={rightTopBoxTitle} />
        </div>
        <div className="pick-up_IndexPage_right_bottom">
        <PickUpScrollList data={boxes} listTitle={listTitle} title={rightBottomBoxTitle} />
        </div>
      </div>
    </div>
  )
}


export default DistributionPage
