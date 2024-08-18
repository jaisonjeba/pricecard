import React from "react"
import Card from "./Card"

function App(){

  const data = [
    {
      plan:"free",
      price:0,
      user:"Single User",
      isUser:true,
      storage:"5GB storage",
      isStorage:true,
      publicProjects:"Unlimited Public Projects",
      isPublicProjects:true,
      access:"Community Access",
      isAccess:true,
      privateProjects:"Unlimited Private Projects",
      isPrivateProjects:false,
      support:"Dedicated Phone Support",
      isSupport:false,
      subdomain:"Free Subdomain",
      isSubdomain:false,
      reports:"Monthly Status Reports",
      isReports:false
    }, 
    {
      plan:"Plus",
      price:9,
      user:"5 Users",
      isUser:true,
      storage:"50GB storage",
      isStorage:true,
      publicProjects:"Unlimited Public Projects",
      isPublicProjects:true,
      access:"Community Access",
      isAccess:true,
      privateProjects:"Private Projects",
      isPrivateProjects:true,
      support:"Dedicated Phone Support",
      isSupport:true,
      subdomain:"Free Subdomain",
      isSubdomain:true,
      reports:"Monthly Status Reports",
      isReports:false
    }, 
    {
      plan:"Pro",
      price:49,
      user:"Users",
      isUser:true,
      storage:"150GB storage",
      isStorage:true,
      publicProjects:"Unlimited Public Projects",
      isPublicProjects:true,
      access:"Community Access",
      isAccess:true,
      privateProjects:"Unlimited Private Projects",
      isPrivateProjects:true,
      support:"Dedicated Phone Support",
      isSupport:true,
      subdomain:"Free Subdomains",
      isSubdomain:true,
      reports:"Monthly Status Reports",
      isReports:true
    }
  ]
  return <>
  <section className="pricing py-5">
  <div className="container">
    <div className="row">
      {
        data.map((e,i)=>{ 
        return <Card data={e} key={i}/>
        })
      }
    </div>
  </div>
</section>
  </>
  
}


export default App
