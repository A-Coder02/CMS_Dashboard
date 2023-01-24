import React from 'react'
import './home.style.css'
import PromoterPng from '../images/promoter.png'
import MerchendiserPng from '../images/merchendiser.png'
import StorePng from '../images/store.png'
import CustomerPng from '../images/customer.png'

const cardData = [
    {
        id : 1,
        name : 'Promoters',
        img : PromoterPng,
        bg : '#F2BF3D',
        border : '#B3C200',
        color : '#71790F',
        count : 214
    },
    {
        id : 2,
        name : 'Merchandiser',
        img : MerchendiserPng,
        bg : '#0E7697',
        border : '#1688AC',
        color : '#77C8E1',
        count : 214
    },
    {
        id : 3,
        name : 'Stores',
        img : StorePng,
        bg : '#2FBC57',
        border : '#4CE176',
        color : '#01581A',
        count : 137
    },
    {
        id : 1,
        name : 'Customers',
        img : CustomerPng,
        bg : '#732C67',
        border : '#CC45B6',
        color : '#CC45B6',
        count : 34
    },
]
const helperCardData = [
    {
        id  : 1,
        link1 : 'customer', count1 : 20,
        link2 : 'store', count2 : 20,
        year : 2023
    },
    {
        id  : 2,
        link1 : 'promoter', count1 : 20,
        link2 : 'merchandiser', count2 : 20,
        year : 2023
    },
]

const Home = () => {
  return (
   <section className="dashboard">
    <div className='dashboard-header' >
        <h1>Dashboard</h1>
        <p>Welcome to Connect Market Dashboard</p>
    </div>
    <div className="card-wrapper">
        {cardData.map((card) => <Card key = {card.id} {...card} />)}
    </div>
    <div className="graph-wrapper">
        <h1>Graph Will Be Here</h1>
    </div>
    <div className="helper-card-wrapper">
        {helperCardData.map(hc => <HelperCard key = {hc.id} {...hc} />)}
    </div>
    <div className="trending-wrapper">
    <TrendingList name = 'Mechaniders' list = {[]} />
    <TrendingList name = 'Promoters' list = {[]} />
    </div>
   </section>
  )
}


const Card = ({bg,border,color,name,img,link,count}) => {
    return  <div className="card"  style = {{
        backgroundColor : bg,
        borderColor : border,
    }}>
    <div className="card-details" 
       
    >
        <img src={img} alt="" />
        <div className="card-info">
            <h3>{count}</h3>
            <p style = {{color}} >{name}</p>
        </div>
    </div>
    <div className="card-actions">
    {/* todo : navigate on buttons */}
        <div className="c-btn">See All</div>
        <div className="c-btn">Add New +</div>
    </div>
</div>
}

const HelperCard = ({link1 = "",link2 = "",count1,count2,year}) => {
    return <div className="helper-card">
        <p>{link1} arrised by 23 count in current year ({year})</p>
        <p>{link2} arrised by 2 count in current year ({year})</p>
        <br />
        <p>We have {count1} {link1}s and {count2} {link2}s.</p>
        <br />

        <div className="card-actions">
    {/* todo : navigate on buttons */}
        <div className="c-btn">See All</div>
        <div className="c-btn">Add New +</div>
    </div>
    </div>
}

const TrendingList = ({name,list = []})=> <div className="trending-list-wrapper">
    <h2>Trending {name}</h2>
    <div className="trending-list">
        {/* todo : map list here */}
        {new Array(10).fill(0).map((li,index) => 
        <div className="trending-list-item" key = {index}>
            <div className="t-avatar"></div>
            <div className="t-info">
                <p className='t-name'>Sufiyan Mo’min <span>Vitesse | Al Amir</span> </p> 
                <p className='t-al'>Target Completed 80%</p>
                <progress id="file" value="32" max="100"> 32% </progress>
            </div>
        </div>
            )
        }
    </div>
</div>


export default Home