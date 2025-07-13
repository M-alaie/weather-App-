import React, { useRef } from 'react'

const HorizoTallyScroolable = ({children,className}) => {
  
  const ScrollRef=useRef()

  // console.log(ScrollRef.current);

  const hanndleMouseDown=(event)=>{
    let oldX=event.pageX;
    let ScrollLeft=ScrollRef.current.scrollLeft
    // console.log(ScrollRef.current.scrollLeft);
    const newMovment=(event)=>{
        let newX=event.pageX;
        let offset=newX-oldX
        ScrollRef.current.scrollLeft=ScrollLeft - offset

        
    }
    const handleMouseUP=()=>{
      window.removeEventListener("mousemove",newMovment)
    window.removeEventListener('mouseup',handleMouseUP)

    }

    window.addEventListener("mousemove",newMovment)

    window.addEventListener('mouseup',handleMouseUP)
    
    
  }
  
  
  return (
   
      <div className={className} ref={ScrollRef} onMouseDown={hanndleMouseDown} key={Math.random()}>
        {children}
      </div>
      
  
  )
}

export default HorizoTallyScroolable
