import "./header.less"
import { useState, useEffect } from "react"
import { useLocation } from "react-router"
import rainIcon from "../../assets/icons/weather/rain.png"
import formattedDate from "../../utils/formatted_date"

function HeaderCompoent() {

  // 根据路径判断大屏标题
  const location = useLocation()
  const [headerTitle, setHeaderTitle] = useState("仓储配货大屏")

  useEffect(() => {
    setHeaderTitle(location.pathname == '/' ? '仓储配货大屏' : '仓储拣货大屏')
  }, [location])

  // 实时获取时间
  const [datetime, setDatetime] = useState(formattedDate())

  useEffect(() => {
    const timer = setInterval(() => {
      setDatetime(formattedDate());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [])

  return (
    <div className="HeaderCompoent">
      <div className="header-left">
        <span className="header-left_city">深圳市</span>
        <div className="header-left_weather">
          <img src={rainIcon} alt="" />
          <span>大雨</span>
        </div>
        <span className="header-left_temperature">17~28℃</span>
      </div>
      <h1>{headerTitle}</h1>
      <div className="header-right">
        <span className="header-right_date">{datetime.date}</span>
        <span className="header-right_week">{datetime.week}</span>
        <div className="header-right_time">
          <span>{datetime.time.substring(0, 1)}</span>
          <span>{datetime.time.substring(1, 2)}</span>
          <span>{datetime.time.substring(2, 3)}</span>
          <span>{datetime.time.substring(3, 4)}</span>
          <span>{datetime.time.substring(4, 5)}</span>
          <span>{datetime.time.substring(5, 6)}</span>
          <span>{datetime.time.substring(6, 7)}</span>
          <span>{datetime.time.substring(7, 8)}</span>
        </div>
      </div>
    </div>
  )
}


export default HeaderCompoent