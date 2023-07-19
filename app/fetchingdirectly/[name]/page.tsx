
const page = ({params}:any) => {
  return (
    <div>{`This is Page with name ${params.name}`}}</div>
  )
}

export default page