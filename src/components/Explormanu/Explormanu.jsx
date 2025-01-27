import React from 'react'
import './Explormanu.css'
import { manulist } from '../../assets/manu'


const Explormanu = ({ category, setCategory }) => {

  return (
    <div>
      <div className="exploremanu" id='exploremanu'>
        <h1>Explore our manu</h1>
        <p className='exploremanu-text'>Say goodbye to the hassle of store visits and enjoy the convenience of fresh milk delivered right to your home! With our online delivery service, you can</p>
        <div className="exploremanu-list">
          {manulist.map((item,index)=>{
            return (
              <div onClick={() => setCategory(prev => prev === item.manuname ? "All" : item.manuname)} className="explore-manulist-item" >
                <img className={category===item.manuname?"active":""} src={item.img} alt="" />
                <p>{item.manuname}</p>
              </div>
            )
          })
          }
        </div>
      </div>
      <hr />
      </div>
  )
}
export default Explormanu

//className={category===namu?"item.a":""} //name='12'
// onChange={this.changeHandler}
// changeHandler =(event)=>{

/*
import React from 'react'
import './Explormanu.css'


const Explormanu = ({ category, setCategory }) => {

  return (
    <div>
      <div className="exploremanu" id='exploremanu'>
        <h1>Explore our manu</h1>
        <p className='exploremanu-text'>Say goodbye to the hassle of store visits and enjoy the convenience of fresh milk delivered right to your home! With our online delivery service, you can</p>
        <div className="exploremanu-list">
          <div onClick={() => setCategory(prev => prev === item.manu ? "all" : item.manu)} className='r' >
            <img manu="curd" src="https://res.cloudinary.com/doeaksurq/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1734939081/68554a_hzcqi9.jpg" alt="" />
            <img manu="ghee" src="https://res.cloudinary.com/doeaksurq/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1734939062/200-fresh-paneer-paneer-amul-original-imafu6fgfvbychwj_qxs0g0.webp" alt="" />
            <img manu="milk" src="https://res.cloudinary.com/doeaksurq/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1735019638/1000013159_eys4po.webp" alt="" />
            <img manu="curd" src="https://res.cloudinary.com/doeaksurq/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1734939081/68554a_hzcqi9.jpg" alt="" />
            <img manu="ghee" src="https://res.cloudinary.com/doeaksurq/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1734939062/200-fresh-paneer-paneer-amul-original-imafu6fgfvbychwj_qxs0g0.webp" alt="" />
            <img manu="milk" src="https://res.cloudinary.com/doeaksurq/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1735019638/1000013159_eys4po.webp" alt="" />
            <img manu="curd" src="https://res.cloudinary.com/doeaksurq/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1734939081/68554a_hzcqi9.jpg" alt="" />
            <img manu="ghee" src="https://res.cloudinary.com/doeaksurq/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1734939062/200-fresh-paneer-paneer-amul-original-imafu6fgfvbychwj_qxs0g0.webp" alt="" />
            <img manu="milk" src="https://res.cloudinary.com/doeaksurq/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1735019638/1000013159_eys4po.webp" alt="" />
            <img manu="curd" src="https://res.cloudinary.com/doeaksurq/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1734939081/68554a_hzcqi9.jpg" alt="" />
            <img manu="ghee" src="https://res.cloudinary.com/doeaksurq/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1734939062/200-fresh-paneer-paneer-amul-original-imafu6fgfvbychwj_qxs0g0.webp" alt="" />
            <img manu="milk" src="https://res.cloudinary.com/doeaksurq/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1735019638/1000013159_eys4po.webp" alt="" />
          </div>
          <div className="p">
            <p>Curd</p>
            <p>paneer</p>
            <p>ghee</p>
            <p>milk</p>
            <p>butter milk</p>
            <p>butter</p>
            <p>Curd</p>
            <p>paneer</p>
            <p>ghee</p>
            <p>milk</p>
            <p>butter milk</p>
            <p>butter</p>
          </div>
        </div>
      </div>
      <hr />
    </div>
  )
}
export default Explormanu
*/