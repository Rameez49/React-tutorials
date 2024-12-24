import React from 'react'

export default function ProfileCard(props) {
    const {name, age, greetings, children} = props
  return (
   <>
   <h2>Name: {name}</h2>
   <h3>Age: {age}</h3>
   <p>Greetings: {greetings}</p>
   <div>{children}</div>
   </>
  )
}
