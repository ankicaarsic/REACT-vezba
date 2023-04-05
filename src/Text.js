import React from 'react'
import { useState, useEffect } from 'react'

export function Text () {
    const [text, setText] = useState('')

    useEffect (() => {
        console.log('did mounted')

        return() => {
            console.log('did unmonted')
        }
    }, [])

    

 return( 
        <div>
         <input 
         onChange={(event) => {
              setText(event.target.value)
            }}
         />
         <h1>{text}</h1>
        </div>
    )
}
