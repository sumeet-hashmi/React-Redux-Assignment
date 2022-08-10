import React from 'react'
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className='page'>
      <h1>React-Redux Assignment</h1>
                    <h2 className='heading'>
                        <Link to="/Post"> Click here for the Post</Link>

                    </h2>

                    <h2 className='heading' >
                      <Link to="/FetchApi"> Click here for fetch API</Link>

                    </h2>
                  
    </div>
  )
}