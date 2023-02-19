import React from 'react'

const Avatar = ({children, backgroundColor, px ,py, borderRedius, color, fontSize, cursor, margin }) => {
  const style ={
    backgroundColor,
    padding: `${px} ${py}`,
    borderRedius,
    color:color || 'Black',   
    fontSize,
    margin,
    textAlign: "center",
    cursor:cursor || null,
  }
  return (
    <div style={style}>
      {children}
    </div>
  )
}

export default Avatar
