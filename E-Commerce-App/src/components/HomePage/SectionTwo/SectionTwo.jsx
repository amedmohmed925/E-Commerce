import React from 'react'
import {Link} from 'react-router-dom'
function SectionTwo() {
return(
    <div style={{
        width:"100%",
        backgroundColor:"white",
        marginTop:"30px"
    }}>
        <div style={{
            display:"flex",
            justifyContent: 'center',
            flexWrap: 'wrap'

        }}> 
            <div className='card1 ' style={{
                width:"410px",
                height:"272px",
                backgroundColor:"#424242",
                borderRadius:"8px",
                margin:"10px",
            }}>
                <img style={{
                    marginLeft: "20px",
                    position: "absolute",
                    width: "238px",
                    marginTop: "15px",
                }} src="/images/img1.png" alt="" />
                <p style={{
                    color:"white",
                    opacity:"0.5",
                    marginTop:"20%",
                    marginLeft:"15px"
                    }}>Empy <br/> <span style={{
                        fontWeight:"500",
                        fontSize:"30px",
                        opacity:"1",
                        color:"white"
                    }}>with</span>
                    <h2 style={{color:"black",marginBottom:"3px"}}>EARPHONE</h2>
                    <Link to={"/shop"}>
                   <button style={{
                        border:"5px",
                        borderRadius:"8px",
                        backgroundColor:"white",
                        color:"red",
                    }}>
                        Buy Now
                    </button>
                   </Link>
                    <img src="../images/ear phone .jpg" alt="" />
                </p>
            </div>
            <div className='card2' style={{
                width:"410px",
                height:"272px",
                backgroundColor:"#ffeb3b",
                borderRadius:"8px",
                margin:"10px",
            }}>
                <img style={{
                    marginLeft: "20px",
                    position: "absolute",
                    width: "290px",
                    marginTop: "15px",
                }} src="/images/img2.png" alt="" />
                <p style={{
                    color:"white",
                    opacity:"0.5",
                    marginTop:"20%",
                    marginLeft:"15px"
                    }}>Empy <br/> <span style={{
                        fontWeight:"500",
                        fontSize:"30px",
                        opacity:"1",
                        color:"white"
                    }}>Wear</span>
                    <h2 style={{color:"black",marginBottom:"3px"}}>GAL</h2>
                   <Link to={"/shop"}>
                   <button style={{
                        border:"5px",
                        borderRadius:"8px",
                        backgroundColor:"white",
                        color:"red",
                    }}>
                        Buy Now
                    </button>
                   </Link>
                   
                    <img src="../images/ear phone .jpg" alt="" />
                </p>
            </div>
            <div className='card3' style={{
                width:"600px",
                height:"272px",
                backgroundColor:"#f44336",
                borderRadius:"8px",
                margin:"10px",
                
            }
            
            }>
                <img className='imgCardSectio2' style={{
                    marginLeft: "152px",
                    position: "absolute",
                    width: "400px",
                    marginTop: "15px",
                }} src="/images/img3.png" alt="" />
                <p style={{
                    color:"white",
                    opacity:"0.5",
                    marginTop:"5%",
                    marginLeft:"50px"
                    }}>Empy <br/> <span style={{
                        fontWeight:"500",
                        fontSize:"30px",
                        opacity:"1",
                        color:"white"
                    }}>Devieces</span>
                    <h2 style={{color:"black",marginBottom:"3px"}}>LAPTOP</h2>
                    <Link to={"/shop"}>
                   <button style={{
                        border:"5px",
                        borderRadius:"8px",
                        backgroundColor:"white",
                        color:"red",
                    }}>
                        Buy Now
                    </button>
                   </Link>
                    <img src="../images/ear phone .jpg" alt="" />
                </p>
            </div>
        </div>
        <div  style={{
            display:"flex",
            justifyContent: 'center',
            flexWrap: 'wrap'
        }}>
            <div className='card4' style={{
                width:"600px",
                height:"272px",
                backgroundColor:"#e0e0e0",
                borderRadius:"8px",
                margin:"10px",
            }}>
                <img className='imgCardSectio2' style={{
                    marginLeft: "250px",
                    position: "absolute",
                    width: "267px",
                    marginTop: "15px",
                }} src="/images/img4.png" alt="" />
                <p style={{
                    color:"white",
                    opacity:"0.5",
                    marginTop:"5%",
                    marginLeft:"50px"
                    }}>Empy <br/> <span style={{
                        fontWeight:"500",
                        fontSize:"30px",
                        opacity:"1",
                        color:"white"
                    }}>Gaming</span>
                    <h2 style={{color:"black",marginBottom:"3px"}}>CONSOLE</h2>
                    <Link to={"/shop"}>
                        <button style={{
                                border:"5px",
                                borderRadius:"8px",
                                backgroundColor:"white",
                                color:"red",
                            }}>
                                Buy Now
                        </button>
                   </Link>
                    <img src="../images/ear phone .jpg" alt="" />
                </p>
            </div>
            <div className='card5' style={{
                width:"410px",
                height:"272px",
                backgroundColor:"#00c853",
                borderRadius:"8px",
                margin:"10px",
                overflow: "hidden",
                position: "relative"
            }}>
                <img style={{
                    marginLeft: "-5px",
                    position: "absolute",
                    width: "290px",
                    marginTop: "79px",
                }} src="/images/img5.png" alt="" />
                <p style={{
                    color:"white",
                    opacity:"0.5",
                    marginTop:"20%",
                    marginLeft:"15px"
                    }}>Empy <br/> <span style={{
                        fontWeight:"500",
                        fontSize:"30px",
                        opacity:"1",
                        color:"white"
                    }}>Game</span>
                    <h2 style={{color:"black",marginBottom:"3px"}}>OCULUS</h2>
                    <Link to={"/shop"}>
                        <button style={{
                                border:"5px",
                                borderRadius:"8px",
                                backgroundColor:"white",
                                color:"red",
                            }}>
                                Buy Now
                        </button>
                   </Link>
                    <img src="../images/ear phone .jpg" alt="" />
                </p>
            </div>
            <div className='card6' style={{
                width:"410px",
                height:"272px",
                backgroundColor:"#0091ea",
                borderRadius:"8px",
                margin:"10px"
            }}>
                <img style={{
                    // marginLeft: "100px",
                    position: "absolute",
                    width: "241px",
                    marginTop: "79px",
                    right:'20px'
                }} src="/images/img6.png" alt="" />
                <p style={{
                    color:"white",
                    opacity:"0.5",
                    marginTop:"20%",
                    marginLeft:"15px"
                    }}>Empy <br/> <span style={{
                        fontWeight:"500",
                        fontSize:"30px",
                        opacity:"1",
                        color:"white"
                    }}>Amazon</span>
                    <h2 style={{color:"black",marginBottom:"3px"}}>SPEAKER</h2>
                    <Link to={"/shop"}>
                        <button style={{
                                border:"5px",
                                borderRadius:"8px",
                                backgroundColor:"white",
                                color:"red",
                            }}>
                                Buy Now
                        </button>
                   </Link>
                    <img src="../images/ear phone .jpg" alt="" />
                </p>
            </div>
        </div>
        <div style={{
                display:"flex",
                flexWrap: 'wrap',
                justifyContent: 'space-around',
                alignItems: 'center'
            }}> 
            <div style={{
                display:"flex",
                marginLeft:"10px",
                justifyContent: 'center',
                flexWrap: 'wrap',
                alignItems: 'center'
            }}>
                <img src="/images/icon1.svg" alt="" />
                <p style={{
                    fontWeight:"700",
                    margin:"10px",

            }}>
                    Free Shopping <br/> 
                    <p style={{
                        opacity:"0.5",
                        margin:"0",

                    }}>free shopping for sale</p>
                </p>
            </div>
            <div style={{
                display:"flex",
                marginLeft:"10px",
                justifyContent: 'center',
                flexWrap: 'wrap',
                alignItems: 'center'
            }}>
                <img src="/images/icon2.svg" alt="" />
                <p style={{
                    fontWeight:"700",
                    margin:"10px",

            }}>
                    Money Guarantee <br/> 
                    <p style={{
                        opacity:"0.5",
                        margin:"0",

                    }}>free shopping for sale</p>
                </p>
            </div>
            <div style={{
                display:"flex",
                marginLeft:"10px",
                justifyContent: 'center',
                flexWrap: 'wrap',
                alignItems: 'center'
            }}>
                <img src="/images/icon3.svg" alt="" />
                <p style={{
                    fontWeight:"700",
                    margin:"10px",

            }}>
                    Online Support 24/7 <br/> 
                    <p style={{
                        opacity:"0.5",
                        margin:"0",

                    }}>free shopping for sale</p>
                </p>
            </div>
            <div style={{
                display:"flex",
                marginLeft:"10px",
                justifyContent: 'center',
                flexWrap: 'wrap',
                alignItems: 'center'
            }}>
                <img src="/images/icon4.svg" alt="" />
                <p style={{
                    fontWeight:"700",
                    margin:"10px",

            }}>
                    Secure Payment <br/> 
                    <p style={{
                        opacity:"0.5",
                        margin:"0",

                    }}>free shopping for sale</p>
                </p>
            </div>
        </div>
    </div>
)
}
export default SectionTwo