import Image from "next/image"


export default function Interiors() {
    return (
        <div style={{display:"flex", flexDirection:"row", backgroundColor:"#F3F1FF", padding:"50px"}}>
            <div>
                <h1 style={{paddingBottom:"20px"}}>50+ Beautiful interiors <br />
                inspiration</h1>

                <p style={{paddingBottom:"20px"}}>Our designer already made a lot of beautiful <br/>collection of interiors that inspire you.</p>
                <button style={{backgroundColor:"#FF0300", color:"white", border:"none", width:"131px", height:"36px"}}>Explore More</button>
            </div >
            <div style={{ display: "flex", flexDirection: "row", gap: "20px", alignItems: "center" }}>
  <Image src="/interior1.png" alt="Explore interior" width={385} height={400} style={{ marginLeft: "70px" }}/>
  <Image src="/interior2.png" alt="Explore interior 2" width={324} height={200}/>
</div>

        
        </div>
    )
}