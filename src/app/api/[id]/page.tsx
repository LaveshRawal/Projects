import React from 'react'

const page = ({params}:any) => {
  return (
    <div>This is about page with ID {params.id}</div>
  )
}

export default page