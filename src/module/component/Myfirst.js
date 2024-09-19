import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { FaClock } from "react-icons/fa";
import { CiDeliveryTruck } from "react-icons/ci";
import { FaCheckCircle } from "react-icons/fa";
import { MdOutlineAddShoppingCart } from "react-icons/md";




function Myfirst() {

    
    return (
        <Fragment>

            <div className='col-12 imgfluid'>
                <img src='img/main.jpg' className='mainimg' alt='skk' ></img>
            </div>
            <div className="container-fluid mt-5">
                <div className="container px-5 py-5 bg-light">
                    <div className="row ">
                        <div className="col-md-2">
                            <h2 >Why choose us?</h2>
                        </div>

                        <div className="col-md-1 text-end ">
                            <FaClock className='logo1' />

                        </div>

                        <div className="col-md-2">
                            <h2 >On time delivery</h2>
                            <p>15% back if not able </p>
                        </div>
                        <div className="col-md-1 text-end">
                            <CiDeliveryTruck className='logo1' />
                        </div>

                        <div className="col-md-2">
                            <h2 >Free delivery</h2>
                            <p>Order over $ 200 </p>
                        </div>
                        <div className="col-md-1 text-end">
                            <FaCheckCircle className='logo1' />

                        </div>

                        <div className="col-md-2">
                            <h2 >Quality assurance</h2>
                            <p>You can trust us</p>
                        </div>
                    </div>

                </div>
            </div>

            <div className='container-fluid mt-5'>
                <div className='container text-center'>
                    <h3>Top Categories</h3>
                    <hr />
                    <div className='row py-3 '>
                        <div className='col-md-2 text-center'>
                            <Link to="menfashion" style={{ textDecoration: 'none', color: 'black' }}>Mens Fashion<img src='img/men.png' alt='sk'></img></Link>
                        </div>
                        <div className='col-md-2'>
                            <Link to="womenfashion" style={{ textDecoration: 'none', color: 'black' }}>Cap<img src='img/cap.png' alt='Cap'></img></Link>

                        </div>
                        <div className='col-md-2'>
                            <Link to="menfashion" style={{ textDecoration: 'none', color: 'black' }}>SunGlass<img src='img/sunglass.png' alt='sunglass'></img></Link>

                        </div>
                        <div className='col-md-2'>
                            <Link to="womenfashion" style={{ textDecoration: 'none', color: 'black' }}>Women Fashion<img src='img/women.png' alt='women'></img></Link>

                        </div>
                        <div className='col-md-2'>
                            <Link to="menfashion" style={{ textDecoration: 'none', color: 'black' }}>Plaza<img src='img/plaza.png' alt='plaza'></img></Link>

                        </div>
                        <div className='col-md-2'>
                            <Link to="menfashion" style={{ textDecoration: 'none', color: 'black' }}>Children Fashion<img src='img/child.png' alt='child'></img></Link>

                        </div>
                    </div>
                </div>
            </div>


            <div className='container-fluid mt-5'>
                <div className='container text-center'>
                    <h3>Women Fashion</h3>
                    <hr />
                    <div className='row'>
                        <div className='col-md-3'>
                            <Link to="/" > <img src='img/women1.jpg' style={{width:'100%'}} alt='skk'></img> </Link>
                        </div>
                        <div className='col-md-9'>
                            <div className='row'>

                                <div className='col-md-4'>
                                    <Link to="scarves" style={{ textDecoration: 'None', fontSize: '20px' }}>
                                        <div class="card" >
                                            <img src="img/scarves.jpg" class="card-img-top" alt="sk" />
                                            <div class="card-body">
                                                <p class="card-text">Scarves</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className='col-md-4'>
                                    <Link to="scarves" style={{ textDecoration: 'None', fontSize: '20px' }}>
                                        <div class="card" >
                                            <img src="img/glass.jpg" class="card-img-top" alt="sk" />
                                            <div class="card-body">
                                                <p class="card-text">Goggles</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className='col-md-4'>
                                    <Link to="scarves" style={{ textDecoration: 'None', fontSize: '20px' }}>
                                        <div class="card" >
                                            <img src="img/shoes.jpg" class="card-img-top" alt="sk" />
                                            <div class="card-body">
                                                <p class="card-text">Shoes</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className='col-md-4 mt-3'>
                                    <Link to="scarves" style={{ textDecoration: 'None', fontSize: '20px' }}>
                                        <div class="card" >
                                            <img src="img/bag.jpg" class="card-img-top" alt="sk" />
                                            <div class="card-body">
                                                <p class="card-text">Bags</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className='col-md-4 mt-3'>
                                    <Link to="scarves" style={{ textDecoration: 'None', fontSize: '20px' }}>
                                        <div class="card" >
                                            <img src="img/cap1.jpg" class="card-img-top" alt="sk" />
                                            <div class="card-body">
                                                <p class="card-text">Cap</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className='col-md-4 mt-3'>
                                    <Link to="scarves" style={{ textDecoration: 'None', fontSize: '20px' }}>
                                        <div class="card" >
                                            <img src="img/ring.jpg" class="card-img-top" alt="sk" />
                                            <div class="card-body">
                                                <p class="card-text">Ring</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>

                            </div>
                            <div className='col-sm-12 mt-5 text-center'>
                                <Link class="btn btn-secondary" to="womenfashion" role="button">Show-More</Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />

            <div className='container mt-5'>
                <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active" data-bs-interval="10000">
                            <img src="img/c1.jpg" class="d-block w-100" style={{ height: '600px' }} alt="sk" />
                            <div class="carousel-caption d-none d-md-block">
                                <Link to="#" className='carsolprice'>Get only in RS-499</Link>

                            </div>
                        </div>
                        <div class="carousel-item" data-bs-interval="2000">
                            <img src="img/c2.jpg" class="d-block w-100" style={{ height: '600px' }} alt="sk" />
                            <div class="carousel-caption d-none d-md-block">
                                <Link to="#" className='carsolprice'>Get only in RS-599</Link>

                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="img/c3.jpg" class="d-block w-100" style={{ height: '600px' }} alt="sk" />
                            <div class="carousel-caption d-none d-md-block">
                                <Link to="#" className='carsolprice'>Get only in RS-299</Link>

                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>

            </div>
            <hr />

            <div className='container mt-5'>
                <div className='col-12 text-center'>
                    <h3>Men Fashion</h3>
                </div>
                <hr />
                <div className='row'>
                    <div className='col-md-9'>
                        <div className='row'>
                            <div className='col-md-4'>
                                <Link to="#" style={{ textDecoration: 'None', fontSize: '20px' }}>
                                    <div class="card" >
                                        <img src="img/men2.jpg" class="card-img-top" alt="sk" />
                                        <div class="card-body text-center">
                                            <p class="card-text">Glasses</p>
                                        </div>
                                    </div>
                                </Link>

                            </div>
                            <div className='col-md-4'>
                                <Link to="#" style={{ textDecoration: 'None', fontSize: '20px' }}>
                                    <div class="card" >
                                        <img src="img/men3.jpg" class="card-img-top" alt="sk" />
                                        <div class="card-body">
                                            <p class="card-text text-center">Shoes</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className='col-md-4'>
                                <Link to="#" style={{ textDecoration: 'None', fontSize: '20px' }}>
                                    <div class="card" >
                                        <img src="img/men4.jpg" class="card-img-top" alt="sk" />
                                        <div class="card-body ">
                                            <p class="card-text text-center">Cap</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className='col-md-4 mt-3'>
                                <Link to="#" style={{ textDecoration: 'None', fontSize: '20px' }}>
                                    <div class="card" >
                                        <img src="img/men5.jpg" class="card-img-top" alt="sk" />
                                        <div class="card-body ">
                                            <p class="card-text text-center">Adapt</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className='col-md-4 mt-3'>
                                <Link to="#" style={{ textDecoration: 'None', fontSize: '20px' }}>
                                    <div class="card" >
                                        <img src="img/men6.jpg" class="card-img-top" alt="sk" />
                                        <div class="card-body ">
                                            <p class="card-text text-center">Bag</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className='col-md-4 mt-3'>
                                <Link to="#" style={{ textDecoration: 'None', fontSize: '20px' }}>
                                    <div class="card" >
                                        <img src="img/men7.jpg" class="card-img-top" alt="sk" />
                                        <div class="card-body ">
                                            <p class="card-text text-center">Belt</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <Link to="/"> <img src="img/men1.jpg" alt="skk" style={{width:'100%'}} /> </Link>
                    </div>
                </div>

                <div className='col-sm-12 mt-4 text-center'>
                    <Link class="btn btn-secondary" to="menfashion" role="button">Show-More</Link>

                </div>
            </div>

            <div className='container mt-5'>
                <div className='row text-center'>
                    <h3>Featured Products</h3>
                </div>
                <hr />
                <div className='row'>
                    <div className='col-md-1'></div>
                    <div className='col-md-2'>
                        <div class="card" >
                            <div class="card-body">
                                <img src='img/pro1.jpg' style={{ width: '100%' }} alt='buy'></img>
                                <div className='row'>
                                    <div className='col-6'>
                                        <p>Cap</p>
                                    </div>
                                    <div className='col-6'>
                                        <p>Price:199</p>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-12'>
                                        <select style={{ textAlign: 'center' }}>
                                            <option hidden>-Please select Size-</option>
                                            <option>Free Size</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='row mt-2'>
                                    <div className='col-6'>

                                        <input type='number' min="1" max="10"    ></input>
                                    </div>
                                    <div className='col-6'>
                                        <Link to="#" className='addtocart' ><MdOutlineAddShoppingCart />ADD</Link>
                                    </div>
                                </div>


                            </div>
                        </div>

                    </div>
                    <div className='col-md-2'>
                        <div class="card" >
                            <div class="card-body">
                                <img src='img/pro2.jpg' style={{ width: '100%' }} alt='buy'></img>
                                <div className='row'>
                                    <div className='col-6'>
                                        <p>Bag</p>
                                    </div>
                                    <div className='col-6'>
                                        <p>Price:399</p>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-12'>
                                        <select style={{ textAlign: 'center' }}>
                                            <option hidden>-select Size-</option>
                                            <option>10 L</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='row mt-2'>
                                    <div className='col-6'>

                                        <input type='number' min="1" max="10"    ></input>
                                    </div>
                                    <div className='col-6'>
                                        <Link to="#" className='addtocart' ><MdOutlineAddShoppingCart />ADD</Link>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                    <div className='col-md-2'>
                        <div class="card" >
                            <div class="card-body">
                                <img src='img/pro3.jpg' style={{ width: '100%' }} alt='buy'></img>
                                <div className='row'>
                                    <div className='col-6'>
                                        <p>Scandel</p>
                                    </div>
                                    <div className='col-6'>
                                        <p>Price:699</p>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-12'>
                                        <select style={{ textAlign: 'center' }}>
                                            <option hidden>-select Size-</option>
                                            <option>6</option>
                                            <option>7</option>
                                            <option>8</option>
                                            <option>9</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='row mt-2'>
                                    <div className='col-6'>

                                        <input type='number' min="1" max="10"    ></input>
                                    </div>
                                    <div className='col-6'>
                                        <Link to="#" className='addtocart' ><MdOutlineAddShoppingCart />ADD</Link>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                    <div className='col-md-2'>
                        <div class="card" >
                            <div class="card-body">
                                <img src='img/pro4.jpg' style={{ width: '100%' }} alt='buy'></img>
                                <div className='row'>
                                    <div className='col-6'>
                                        <p>Ring</p>
                                    </div>
                                    <div className='col-6'>
                                        <p>Price:299</p>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-12'>
                                        <select style={{ textAlign: 'center' }}>
                                            <option hidden>-select Size-</option>
                                            <option>Free-Size</option>

                                        </select>
                                    </div>
                                </div>
                                <div className='row mt-2'>
                                    <div className='col-6'>

                                        <input type='number' min="1" max="10"    ></input>
                                    </div>
                                    <div className='col-6'>
                                        <Link to="#" className='addtocart' ><MdOutlineAddShoppingCart />ADD</Link>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                    <div className='col-md-2'>
                        <div class="card" >
                            <div class="card-body">
                                <img src='img/pro5.png' style={{ width: '100%' }} alt='buy'></img>
                                <div className='row'>
                                    <div className='col-6'>
                                        <p>Shoes</p>
                                    </div>
                                    <div className='col-6'>
                                        <p>Price:899</p>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-12'>
                                        <select style={{ textAlign: 'center' }}>
                                            <option hidden>-select Size-</option>
                                            <option>7</option>
                                            <option>8</option>
                                            <option>9</option>
                                            <option>10</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='row mt-2'>
                                    <div className='col-6'>

                                        <input type='number' min="1" max="10"    ></input>
                                    </div>
                                    <div className='col-6'>
                                        <Link to="#" className='addtocart' ><MdOutlineAddShoppingCart />ADD</Link>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                    <div className='col-md-1'></div>
                </div>
                <div className='col-sm-12 mt-4 text-center'>
                    <Link class="btn btn-secondary" to="#" role="button">Show-More</Link>

                </div>
            </div>

            <div className='container mt-5'>
                <div className='row text-center'>
                    <h3>Children Fashion</h3>
                </div>
                <hr />

                <div className='row'>
                    <div className='col-md-6 mt-5'>
                        <Link to="/" >
                            <img src='img/child1.jpg' style={{width:'100%'}} alt='sk'></img>
                        </Link>
                    </div>
                    <div className='col-md-6'>
                        <div className='row'>
                            <div className='col-md-6'>
                                <Link to="/" style={{ textDecoration: 'None', fontSize: '20px' }}>
                                    <div class="card" >
                                        <img src="img/child2.jpg" class="card-img-top" alt="sk"/>
                                            <div class="card-body">
                                                <p class="card-text text-center ">Blanket</p>
                                            </div>
                                    </div>
                                </Link>
                            </div>
                            <div className='col-md-6'>
                                <Link to="/" style={{ textDecoration: 'None', fontSize: '20px' }}>
                                    <div class="card" >
                                        <img src="img/child3.jpg" class="card-img-top" alt="sk"/>
                                            <div class="card-body">
                                                <p class="card-text text-center ">Slipper</p>
                                            </div>
                                    </div>
                                </Link>
                            </div>
                            <div className='col-md-6 mt-3'>
                                <Link to="/" style={{ textDecoration: 'None', fontSize: '20px' }}>
                                    <div class="card" >
                                        <img src="img/child4.jpg" class="card-img-top" alt="sk"/>
                                            <div class="card-body">
                                                <p class="card-text text-center ">Goggles</p>
                                            </div>
                                    </div>
                                </Link>
                            </div>
                            <div className='col-md-6 mt-3'>
                                <Link to="/" style={{ textDecoration: 'None', fontSize: '20px' }}>
                                    <div class="card" >
                                        <img src="img/child5.jpg" class="card-img-top" alt="sk"/>
                                            <div class="card-body">
                                                <p class="card-text text-center ">Socks</p>
                                            </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-sm-12 mt-4 text-center'>
                    <Link class="btn btn-secondary" to="#" role="button">Show-More</Link>

                </div>

            </div>
            <hr/>

            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-md-2'>
                        <img src='img/p1.png' alt='sk'></img>
                    </div>
                    <div className='col-md-2'>
                    <img src='img/p2.png' alt='sk'></img>
                    </div>
                    <div className='col-md-2'>
                    <img src='img/p3.png' alt='sk'></img>
                    </div>
                    <div className='col-md-2'>
                    <img src='img/p4.png' alt='sk'></img>
                    </div>
                    <div className='col-md-2'>
                    <img src='img/p5.png' alt='sk'></img>
                    </div>
                    <div className='col-md-2'>
                    <img src='img/p6.png' alt='sk'></img>
                    </div>
                </div>
            </div>
            <div className='container mt-5 ' style={{backgroundColor:'#f2f2f2'}}>
                <div className='row'>
                    <div className='col-md-4'>
                        <h2>Subscribe for our offer news</h2>
                    </div>
                    <div className='col-md-6'>
                        <input type='mail' style={{width:'100%',height:'45px'}} placeholder='Enter Your Email ID'></input>
                    </div>
                    <div className='col-md-2'>
                    <button class="btn btn-primary" style={{height:'45px'}} type="submit">Subscribe</button>

                    </div>
                </div>
            </div>




        </Fragment>

    )
}

export default Myfirst