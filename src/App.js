import React, {useState} from 'react'
import {data} from './data'

const App = () => {
  const [modal, setModal] = useState(false);
  const [image, setImage] = useState('')
  const opneModal = (img)=>{
    setModal(true)
    setImage(img)
  }
  return (
    <div className='app'>
        
            <div className={modal? 'modal open': 'modal'}>
                <span onClick={()=>setModal(false)}>X</span>
                <img src={image} alt='image modal'></img>
            </div>
        <h2>Simple Gallery</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Sed delectus amet labore at dignissimos aliquam consequuntur, 
            deleniti recusandae natus praesentium, cupiditate 
            voluptatum veritatis illum rerum ut voluptate enim optio fugat.
        </p>
        <div className='gallery'>
            {data.map((item)=>{
                const{id, img} = item;
                return <div key={id} className='pics' onClick={()=>opneModal(img)}>
                    <img src={img} alt='iamge galllery' loading='lazy-load'></img>
                </div>
            })}
        </div>
    </div>
  )
}

export default App
