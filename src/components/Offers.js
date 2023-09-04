import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
  MDBBtn,
  MDBRipple,
} from "mdb-react-ui-kit";

function Offers() {
  return (
    <MDBContainer fluid className="my-5 text-center">
      <h3 className="mt-4 mb-5">
        <strong>Personlized Recommended Offers</strong>
      </h3>


      
      <h4 className="alert alert-primary" role="alert">
        <strong>Restaurant</strong>
      </h4>
      <hr></hr>



      <MDBRow>


        <MDBCol md="6" lg="4" className="mb-4">
          <MDBCard>
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image rounded hover-zoom"
            >
              <MDBCardImage
                src="https://b.zmtcdn.com/data/pictures/chains/0/3000040/a6f9d24581cae5f83a6ea282ca018f62.jpg?fit=around|750:500&crop=750:500;*,*"
                fluid
                className="w-100"
              />
              <a href="#!">
                <div className="mask">
                  <div className="d-flex justify-content-start align-items-end h-100">
                    <h5>
                      {/* <span className="badge bg-success ms-2">Eco</span> */}
                    </h5>
                  </div>
                </div>
                <div className="hover-overlay">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  ></div>
                </div>
              </a>
            </MDBRipple>
            <MDBCardBody>
              <a href="#!" className="text-reset">
                <h5 className="card-title mb-3">KFC</h5>
              </a>
              <a href="#!" className="text-reset">
                <p>Restaurant</p>
              </a>
              <h6 className="alert alert-success" role="alert">Discount 50% OFF</h6>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>




        <MDBCol md="6" lg="4" className="mb-4">
          <MDBCard>
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image rounded hover-zoom"
            >
              <MDBCardImage
                src="https://cdn.inc42.com/wp-content/uploads/2023/05/Dominos-ONDC-feature.png"
                fluid
                className="w-100"
              />
              <a href="#!">
                <div className="mask">
                  <div className="d-flex justify-content-start align-items-end h-100">
                    <h5>
                      {/* <span className="badge bg-success ms-2">Eco</span> */}
                    </h5>
                  </div>
                </div>
                <div className="hover-overlay">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  ></div>
                </div>
              </a>
            </MDBRipple>
            <MDBCardBody>
              <a href="#!" className="text-reset">
                <h5 className="card-title mb-3">Dominos</h5>
              </a>
              <a href="#!" className="text-reset">
                <p>Restaurant</p>
              </a>
              <h6 className="alert alert-success" role="alert">Discount 15% OFF</h6>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>



        <MDBCol md="6" lg="4" className="mb-4">
          <MDBCard>
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image rounded hover-zoom"
            >
              <MDBCardImage
                src="https://d4t7t8y8xqo0t.cloudfront.net/resized/720X480/restaurant%2F685093%2Frestaurant120221013093159.jpg"
                fluid
                className="w-100"
              />
              <a href="#!">
                <div className="mask">
                  <div className="d-flex justify-content-start align-items-end h-100">
                    <h5>
                      {/* <span className="badge bg-success ms-2">Eco</span> */}
                    </h5>
                  </div>
                </div>
                <div className="hover-overlay">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  ></div>
                </div>
              </a>
            </MDBRipple>
            <MDBCardBody>
              <a href="#!" className="text-reset">
                <h5 className="card-title mb-3">Coal Barbeque</h5>
              </a>
              <a href="#!" className="text-reset">
                <p>Restaurant</p>
              </a>
              <h6 className="alert alert-success" role="alert">Discount 10% OFF</h6>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>


        <MDBCol md="6" lg="4" className="mb-4">
          <MDBCard>
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image rounded hover-zoom"
            >
              <MDBCardImage
                src="https://content3.jdmagicbox.com/comp/chennai/h7/044pxx44.xx44.130405113636.n2h7/catalogue/a2b-veg-restaurant-pondy-bazaar-thyagaraya-nagar-chennai-pure-veg-restaurants-m87ak.jpg"
                fluid
                className="w-100"
              />
              <a href="#!">
                <div className="mask">
                  <div className="d-flex justify-content-start align-items-end h-100">
                    <h5>
                      {/* <span className="badge bg-success ms-2">Eco</span> */}
                    </h5>
                  </div>
                </div>
                <div className="hover-overlay">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  ></div>
                </div>
              </a>
            </MDBRipple>
            <MDBCardBody>
              <a href="#!" className="text-reset">
                <h5 className="card-title mb-3">A2B</h5>
              </a>
              <a href="#!" className="text-reset">
                <p>Restaurant</p>
              </a>
              <h6 className="alert alert-success" role="alert">Discount 5% OFF</h6>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        

      </MDBRow>




      <h4 className="alert alert-primary" role="alert">
        <strong>Hotel</strong>
      </h4>
      <hr></hr>



      <MDBRow>


        <MDBCol md="6" lg="4" className="mb-4">
          <MDBCard>
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image rounded hover-zoom"
            >
              <MDBCardImage
                src="https://www.itchotels.com/content/dam/itchotels/in/umbrella/images/brands-desktop/itc-maurya.png"
                fluid
                className="w-100"
              />
              <a href="#!">
                <div className="mask">
                  <div className="d-flex justify-content-start align-items-end h-100">
                    <h5>
                      {/* <span className="badge bg-success ms-2">Eco</span> */}
                    </h5>
                  </div>
                </div>
                <div className="hover-overlay">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  ></div>
                </div>
              </a>
            </MDBRipple>
            <MDBCardBody>
              <a href="#!" className="text-reset">
                <h5 className="card-title mb-3">ITC</h5>
              </a>
              <a href="#!" className="text-reset">
                <p>Hotel</p>
              </a>
              <h6 className="alert alert-success" role="alert">Discount 12% OFF</h6>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>



        <MDBCol md="6" lg="4" className="mb-4">
          <MDBCard>
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image rounded hover-zoom"
            >
              <MDBCardImage
                src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/465570772.jpg?k=9bde39547ad7a28c39df9d0cf45ffcbb71b912c7167a533a911d21359b9f5a02&o=&hp=1"
                fluid
                className="w-100"
              />
              <a href="#!">
                <div className="mask">
                  <div className="d-flex justify-content-start align-items-end h-100">
                    <h5>
                      {/* <span className="badge bg-success ms-2">Eco</span> */}
                    </h5>
                  </div>
                </div>
                <div className="hover-overlay">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  ></div>
                </div>
              </a>
            </MDBRipple>
            <MDBCardBody>
              <a href="#!" className="text-reset">
                <h5 className="card-title mb-3">Marriot</h5>
              </a>
              <a href="#!" className="text-reset">
                <p>Hotel</p>
              </a>
              <h6 className="alert alert-success" role="alert">Discount 10% OFF</h6>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>




        <MDBCol md="6" lg="4" className="mb-4">
          <MDBCard>
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image rounded hover-zoom"
            >
              <MDBCardImage
                src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/46318183.jpg?k=a9e4c052f094bea057486f2f2e53785951e5e32fc02b6c976ddd79d40abce5f7&o=&hp=1"
                fluid
                className="w-100"
              />
              <a href="#!">
                <div className="mask">
                  <div className="d-flex justify-content-start align-items-end h-100">
                    <h5>
                      {/* <span className="badge bg-success ms-2">Eco</span> */}
                    </h5>
                  </div>
                </div>
                <div className="hover-overlay">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  ></div>
                </div>
              </a>
            </MDBRipple>
            <MDBCardBody>
              <a href="#!" className="text-reset">
                <h5 className="card-title mb-3">The Leela Palace</h5>
              </a>
              <a href="#!" className="text-reset">
                <p>Hotel</p>
              </a>
              <h6 className="alert alert-success" role="alert">Discount 5% OFF</h6>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>




        <MDBCol md="6" lg="4" className="mb-4">
          <MDBCard>
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image rounded hover-zoom"
            >
              <MDBCardImage
                src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/73/ee/c6/exterior.jpg?w=700&h=-1&s=1"
                fluid
                className="w-100"
              />
              <a href="#!">
                <div className="mask">
                  <div className="d-flex justify-content-start align-items-end h-100">
                    <h5>
                      {/* <span className="badge bg-success ms-2">Eco</span> */}
                    </h5>
                  </div>
                </div>
                <div className="hover-overlay">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  ></div>
                </div>
              </a>
            </MDBRipple>
            <MDBCardBody>
              <a href="#!" className="text-reset">
                <h5 className="card-title mb-3">Hilton</h5>
              </a>
              <a href="#!" className="text-reset">
                <p>Hotel</p>
              </a>
              <h6 className="alert alert-success" role="alert">Discount 5% OFF</h6>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        

      </MDBRow>





      <h4 className="alert alert-primary" role="alert">
        <strong>Travel</strong>
      </h4>
      <hr></hr>



      <MDBRow>


        <MDBCol md="6" lg="4" className="mb-4">
          <MDBCard>
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image rounded hover-zoom"
            >
              <MDBCardImage
                src="https://s28477.pcdn.co/wp-content/uploads/2020/07/Spicejet_2.jpg"
                fluid
                className="w-100"
              />
              <a href="#!">
                <div className="mask">
                  <div className="d-flex justify-content-start align-items-end h-100">
                    <h5>
                      {/* <span className="badge bg-success ms-2">Eco</span> */}
                    </h5>
                  </div>
                </div>
                <div className="hover-overlay">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  ></div>
                </div>
              </a>
            </MDBRipple>
            <MDBCardBody>
              <a href="#!" className="text-reset">
                <h5 className="card-title mb-3">Spice Jet</h5>
              </a>
              <a href="#!" className="text-reset">
                <p>Travel</p>
              </a>
              <h6 className="alert alert-success" role="alert">Discount 5% OFF</h6>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>




        <MDBCol md="6" lg="4" className="mb-4">
          <MDBCard>
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image rounded hover-zoom"
            >
              <MDBCardImage
                src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202306/2023-05-30t115416z_1826466067_rc2e81ascqi9_rtrmadp_3_indigo-india_0-sixteen_nine.jpg?VersionId=QKAyGevA6j3K_FQhUPUotSikamAnHIod"
                fluid
                className="w-100"
              />
              <a href="#!">
                <div className="mask">
                  <div className="d-flex justify-content-start align-items-end h-100">
                    <h5>
                      {/* <span className="badge bg-success ms-2">Eco</span> */}
                    </h5>
                  </div>
                </div>
                <div className="hover-overlay">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  ></div>
                </div>
              </a>
            </MDBRipple>
            <MDBCardBody>
              <a href="#!" className="text-reset">
                <h5 className="card-title mb-3">Indigo</h5>
              </a>
              <a href="#!" className="text-reset">
                <p>Travel</p>
              </a>
              <h6 className="alert alert-success" role="alert">Discount 8% OFF</h6>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        

      </MDBRow>





      <h4 className="alert alert-primary" role="alert">
        <strong>Fashion</strong>
      </h4>
      <hr></hr>



      <MDBRow>
        <MDBCol md="6" lg="4" className="mb-4">
          <MDBCard>
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image rounded hover-zoom"
            >
              <MDBCardImage
                src="https://yt3.googleusercontent.com/Sj9uZ21vZg_XWpI6kwi8Spd80WZtvxhokuxAWjLy-s5egU05aKmob1MUgNHbGPt6kKUVOGb9DQ=s900-c-k-c0x00ffffff-no-rj"
                fluid
                className="w-100"
              />
              <a href="#!">
                <div className="mask">
                  <div className="d-flex justify-content-start align-items-end h-100">
                    <h5>
                      {/* <span className="badge bg-success ms-2">Eco</span> */}
                    </h5>
                  </div>
                </div>
                <div className="hover-overlay">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  ></div>
                </div>
              </a>
            </MDBRipple>
            <MDBCardBody>
              <a href="#!" className="text-reset">
                <h5 className="card-title mb-3">Tommy Hilfiger</h5>
              </a>
              <a href="#!" className="text-reset">
                <p>Fashion</p>
              </a>
              <h6 className="alert alert-success" role="alert">Discount 10% OFF</h6>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>



        <MDBCol md="6" lg="4" className="mb-4">
          <MDBCard>
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image rounded hover-zoom"
            >
              <MDBCardImage
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Adidas_isologo.svg/1200px-Adidas_isologo.svg.png"
                fluid
                className="w-100"
              />
              <a href="#!">
                <div className="mask">
                  <div className="d-flex justify-content-start align-items-end h-100">
                    <h5>
                      {/* <span className="badge bg-success ms-2">Eco</span> */}
                    </h5>
                  </div>
                </div>
                <div className="hover-overlay">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  ></div>
                </div>
              </a>
            </MDBRipple>
            <MDBCardBody>
              <a href="#!" className="text-reset">
                <h5 className="card-title mb-3">Adidas</h5>
              </a>
              <a href="#!" className="text-reset">
                <p>Fashion</p>
              </a>
              <h6 className="alert alert-success" role="alert">Discount 10% OFF</h6>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>



        <MDBCol md="6" lg="4" className="mb-4">
          <MDBCard>
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image rounded hover-zoom"
            >
              <MDBCardImage
                src="https://static.vecteezy.com/system/resources/previews/024/455/364/original/us-polo-assn-brand-symbol-with-name-white-logo-clothes-design-icon-abstract-illustration-with-blue-background-free-vector.jpg"
                fluid
                className="w-100"
              />
              <a href="#!">
                <div className="mask">
                  <div className="d-flex justify-content-start align-items-end h-100">
                    <h5>
                      {/* <span className="badge bg-success ms-2">Eco</span> */}
                    </h5>
                  </div>
                </div>
                <div className="hover-overlay">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  ></div>
                </div>
              </a>
            </MDBRipple>
            <MDBCardBody>
              <a href="#!" className="text-reset">
                <h5 className="card-title mb-3">U S Polo</h5>
              </a>
              <a href="#!" className="text-reset">
                <p>Fashion</p>
              </a>
              <h6 className="alert alert-success" role="alert">Discount 5% OFF</h6>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>



        <MDBCol md="6" lg="4" className="mb-4">
          <MDBCard>
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image rounded hover-zoom"
            >
              <MDBCardImage
                src="https://wallpapercave.com/wp/8ZfIwgY.jpg"
                fluid
                className="w-100"
              />
              <a href="#!">
                <div className="mask">
                  <div className="d-flex justify-content-start align-items-end h-100">
                    <h5>
                      {/* <span className="badge bg-success ms-2">Eco</span> */}
                    </h5>
                  </div>
                </div>
                <div className="hover-overlay">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  ></div>
                </div>
              </a>
            </MDBRipple>
            <MDBCardBody>
              <a href="#!" className="text-reset">
                <h5 className="card-title mb-3">Puma</h5>
              </a>
              <a href="#!" className="text-reset">
                <p>Fashion</p>
              </a>
              <h6 className="alert alert-success" role="alert">Discount 15% OFF</h6>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>



      </MDBRow>




     
      <h4 className="alert alert-primary" role="alert">
        <strong>BookStore</strong>
      </h4>
      <hr></hr>


      <MDBRow>
        <MDBCol md="12" lg="4" className="mb-4">
          <MDBCard>
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image rounded hover-zoom"
            >
              <MDBCardImage
                src="https://biomedicalodyssey.blogs.hopkinsmedicine.org/files/2021/09/bookstore-backdrop.jpg"
                fluid
                className="w-100"
              />
              <a href="#!">
                <div className="mask">
                  <div className="d-flex justify-content-start align-items-end h-100">
                    <h5>
                      {/* <span className="badge bg-primary ms-2">New</span> */}
                    </h5>
                  </div>
                </div>
                <div className="hover-overlay">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  ></div>
                </div>
              </a>
            </MDBRipple>
            <MDBCardBody>
              <a href="#!" className="text-reset">
                <h5 className="card-title mb-3">Higginbothams Bookstore</h5>
              </a>
              <a href="#!" className="text-reset">
                <p>BookStore</p>
              </a>
              <h6 className="alert alert-success" role="alert">Discount 50% OFF</h6>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="6" lg="4" className="mb-4">
          <MDBCard>
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image rounded hover-zoom"
            >
              <MDBCardImage
                src="https://cdn1.bookmanager.com/i/9903208/IMG_6154___Edited__1_.png"
                fluid
                className="w-100"
              />
              <a href="#!">
                <div className="mask">
                  <div className="d-flex justify-content-start align-items-end h-100">
                    <h5>
                      {/* <span className="badge bg-success ms-2">Eco</span> */}
                    </h5>
                  </div>
                </div>
                <div className="hover-overlay">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  ></div>
                </div>
              </a>
            </MDBRipple>
            <MDBCardBody>
              <a href="#!" className="text-reset">
                <h5 className="card-title mb-3">Bahrisons</h5>
              </a>
              <a href="#!" className="text-reset">
                <p>BookStore</p>
              </a>
              <h6 className="alert alert-success" role="alert">Discount 8% OFF</h6>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        </MDBRow>


     
        <h4 className="alert alert-primary" role="alert">
        <strong>Delivery</strong>
      </h4>
      <hr></hr>




      <MDBRow>
      <MDBCol md="6" lg="4" className="mb-4">
          <MDBCard>
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image rounded hover-zoom"
            >
              <MDBCardImage
                src="https://149695847.v2.pressablecdn.com/wp-content/uploads/2021/08/Zomato-Machine-Learning-1.jpg"
                fluid
                className="w-100"
              />
              <a href="#!">
                <div className="mask">
                  <div className="d-flex justify-content-start align-items-end h-100">
                    <h5>
                      {/* <span className="badge bg-success ms-2">Eco</span> */}
                    </h5>
                  </div>
                </div>
                <div className="hover-overlay">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  ></div>
                </div>
              </a>
            </MDBRipple>
            <MDBCardBody>
              <a href="#!" className="text-reset">
                <h5 className="card-title mb-3">Zomato</h5>
              </a>
              <a href="#!" className="text-reset">
                <p>Delivery</p>
              </a>
              <h6 className="alert alert-success" role="alert">Discount 25% OFF</h6>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>




      
        <h4 className="alert alert-primary" role="alert">
        <strong>Entertainment</strong>
      </h4>
      <hr></hr>

      <MDBRow>
      <MDBCol md="6" lg="4" className="mb-4">
          <MDBCard>
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image rounded hover-zoom"
            >
              <MDBCardImage
                src="https://cdn.telanganatoday.com/wp-content/uploads/2021/02/BookMyShow.jpg"
                fluid
                className="w-100"
              />
              <a href="#!">
                <div className="mask">
                  <div className="d-flex justify-content-start align-items-end h-100">
                    <h5>
                      {/* <span className="badge bg-success ms-2">Eco</span> */}
                    </h5>
                  </div>
                </div>
                <div className="hover-overlay">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  ></div>
                </div>
              </a>
            </MDBRipple>
            <MDBCardBody>
              <a href="#!" className="text-reset">
                <h5 className="card-title mb-3">BookMyShow</h5>
              </a>
              <a href="#!" className="text-reset">
                <p>Entertainment</p>
              </a>
              <h6 className="alert alert-success" role="alert">10% Cashback</h6>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        </MDBRow>



      
    </MDBContainer>
  );
}

export default Offers; 






