import './index.css';
import CarSlider from './CarSlider';
import Footer from './Footer';

function MainPage() {
  return (
    <>
      <div className="px-5 py-5 text-center bg-image" style={{ backgroundImage: "url('https://img.freepik.com/free-vector/car-showroom-new-auto-dealership-big-room-hall-with-shop-window-glass-showcase_33099-911.jpg?w=1800&t=st=1678998264~exp=1678998864~hmac=93ac19c0fd110d38286f458b8e02b3390d8543420028cc7a5936f2ee262db8d0')" }}>
        <h1 className="display-1 mt-5 pt-3 fw-bold text-white" style={{ textShadow: "2px 2px 2px rgba(0, 0, 0, 0.3)", fontFamily: "Sonsie One" }}>CarCar</h1>
        <div className="col-lg-6 mx-auto align-bottom">
          <p className="d-inline-flex lead px-3 py-1 rounded-pill shadow-sm" style={{ backgroundImage: "linear-gradient(#E8E0D1, #CEA461)" }}>
            The premiere solution for automobile dealership
            management!
          </p>
        </div>
      </div>

      {/* Browse models */}
      <div className="px-5 py-5 text-center">
        <h2 className="display-7 fw-bold mb-4" style={{ color: "#867C79" }}>Browse our models</h2>
        <CarSlider />
      </div>

      {/* Here for you */}
      <div className="px-5 py-5 text-center" style={{ backgroundColor: "#E8E0D1" }}>
        <div className="container">
          <div className="py-5 bg-white rounded-4 shadow">
            <h2 className="display-7 fw-bold mb-4" style={{ color: "#B69C91" }}>
              At home or in-store,
              <br />
              we're here for you
            </h2>
            <div className="row g-0 mx-3 mx-md-5 px-md-5">
              <div className="col-6 col-lg-3">
                <div className="card" style={{ border: "none" }}>
                  <div className="card-body my-3">
                    <img className="rounded-circle mb-3 w-100 min-vw-25" src="https://images.dealer.com/ddc/nada/2020/hs-videowalkaround2.jpg?impolicy=downsize_bkpt&w=704" />
                    <div className="card-text">
                      <h5 className="card-title" style={{ color: "#867C79" }}>Video Walkaround</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-lg-3">
                <div className="card" style={{ border: "none" }}>
                  <div className="card-body my-3">
                    <img className="rounded-circle mb-3 w-100 min" src="https://images.dealer.com/ddc/nada/2020/hs-testdrive.png?impolicy=downsize_bkpt&w=704" />
                    <div className="card-text">
                      <h5 className="card-title" style={{ color: "#867C79" }}>Test Drive at Home</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-lg-3">
                <div className="card" style={{ border: "none" }}>
                  <div className="card-body my-3">
                    <img className="rounded-circle mb-3 w-100 min" src="https://images.dealer.com/ddc/nada/2020/hs-delivery.png?impolicy=downsize_bkpt&w=1188" />
                    <div className="card-text">
                      <h5 className="card-title" style={{ color: "#867C79" }}>Home Delivery</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-lg-3">
                <div className="card" style={{ border: "none" }}>
                  <div className="card-body my-3">
                    <img className="rounded-circle mb-3 w-100 min" src="https://images.dealer.com/ddc/nada/2020/hs-purshase-online.png?impolicy=downsize_bkpt&w=1188" />
                    <div className="card-text">
                      <h5 className="card-title" style={{ color: "#867C79" }}>Purchase Online</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why choose us */}
      <div className="px-5 py-5 text-center">
        <div className="container">
          <h2 className="display-7 fw-bold mb-4">
            Why choose us
          </h2>
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="card rounded-4 shadow" style={{ backgroundColor: "#E8E0D1", border: "none" }}>
                <div className="card-body mx-2 my-3">
                  <p className="lead fst-italic">
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nobis quo incidunt
                    accusamus aperiam. Ratione, optio? Incidunt iste cumque nihil optio sapiente, ex facilis, excepturi a
                    accusamus dolore perferendis minus."
                  </p>
                  <div className="card-text text-end">
                    <h5 className="card-title">- Daphne</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 text-white">
              <div className="card rounded-4 shadow" style={{ backgroundColor: "#B97A63", border: "none" }}>
                <div className="card-body mx-2 my-3">
                  <p className="lead fst-italic">
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nobis quo incidunt
                    accusamus aperiam. Ratione, optio? Incidunt iste cumque nihil optio sapiente, ex facilis, excepturi a
                    accusamus dolore perferendis minus."
                  </p>
                  <div className="card-text text-end">
                    <h5 className="card-title">- Velma</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card rounded-4 shadow" style={{ backgroundColor: "#E8E0D1", border: "none" }}>
                <div className="card-body mx-2 my-3">
                  <p className="lead fst-italic">
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nobis quo incidunt
                    accusamus aperiam. Ratione, optio? Incidunt iste cumque nihil optio sapiente, ex facilis, excepturi a
                    accusamus dolore perferendis minus."
                  </p>
                  <div className="card-text text-end">
                    <h5 className="card-title">- Scooby Doo</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 text-white">
              <div className="card rounded-4 shadow" style={{ backgroundColor: "#B97A63", border: "none" }}>
                <div className="card-body mx-2 my-3">
                  <p className="lead fst-italic">
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nobis quo incidunt
                    accusamus aperiam. Ratione, optio? Incidunt iste cumque nihil optio sapiente, ex facilis, excepturi a
                    accusamus dolore perferendis minus."
                  </p>
                  <div className="card-text text-end">
                    <h5 className="card-title">- Shaggy</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Schedule your next appointment */}
      <div className="px-5 py-5" style={{ backgroundImage: "linear-gradient(180deg, #CEA461, #B97A63 70%, white)" }}>
        <div className="container">
          <div className="py-5 bg-white rounded-4 shadow">
            <div className="mx-5 row justify-content-between align-items-center">
              <div className="col-md">
                <img className="img-fluid" src="https://img.freepik.com/free-vector/roadside-service-abstract-concept-illustration_335657-4927.jpg?w=2000&t=st=1678750195~exp=1678750795~hmac=1d790aaf9791c0e0d3ddb438dd366b905a44e8329dce1adfbeccad89b8b46879" />
              </div>
              <div className="col-md">
                <h2 className="display-9 fw-bold" style={{ color: "#CEA461" }}>
                  Schedule your next service appointment
                </h2>
                <p className="lead">
                  Kick back in our newly renovated service lounge and enjoy complimentary Wifi, gourmet coffee, tea, bottled water, HD TV and snacks. We also offer complimentary Lyft service for drop off and delivery within a 10 mile radius.
                </p>
              </div>
            </div>
            <div className="mx-5 row justify-content-between align-items-center">
              <div className="col-md">
                <h2 className="display-9 fw-bold" style={{ color: "#B97A63" }}>
                  Car shopping made easy
                </h2>
                <p className="lead">
                  It is our mission to be the automotive home of drivers in the Crystal Cove area. We provide the best selection of new and pre-owned vehicles, exceptional car care and customer service with a smile!
                </p>
                <p>
                  Shopping for a car in Crystal Cove can sometimes be time-consuming. From finding the right vehicle to finding one within your price range. At CarCar, we don't believe in wasting our customer's time, and that's why from the moment you start browsing our inventory to the moment you drive home in your new vehicle, we work hard to streamline the car buying experience.
                </p>
                <p>
                  One way we help our customers save time is through our knowledgeable staff. Our dedicated team in Crystal Cove can walk you through the ins and outs of each vehicle, so there isn't a question too big or too small they can't answer. Another way customers can save time shopping is by utilizing the various tools found on our website. Long before you're ever ready to set foot in a dealership, you can browse our inventory and search for the vehicle you want by make, model, and features.
                </p>
              </div>
              <div className="col-md">
                <img className="img-fluid align-self-top" src="https://img.freepik.com/free-vector/dealership-abstract-illustration_335657-5152.jpg?w=2000&t=st=1678749975~exp=1678750575~hmac=a75969b63918884549bb61f882208bdd8af5660d20fbc00cae7d1f70312517e1" />
              </div>
            </div>
          </div>
        </div>

        {/* Frequently Asked Questions */}
        <div className="container my-5 pt-2">
          <div>
            <h2 className="display-7 fw-bold mb-4 text-center text-white">
              Frequently Asked Questions
            </h2>
            <div className="container">
              <div className="accordion" id="questions">
                {/* Question 1 */}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#question-one">
                      What are your store hours?
                    </button>
                  </h2>
                  <div id="question-one" className="accordion-collapse collapse" data-bs-parent="#questions">
                    <div className="accordion-body">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, excepturi nobis harum itaque doloremque,
                      vitae rem fuga deserunt laudantium in mollitia. Odit vitae voluptatem, harum excepturi aut ipsum natus
                      esse quibusdam ab reprehenderit, dolore voluptates veritatis error tenetur consequatur quis voluptas
                      minima sit officia quisquam voluptatum. Totam?
                    </div>
                  </div>
                </div>
                {/* Question 2 */}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#question-two">
                      What should I look for when I test drive a car?
                    </button>
                  </h2>
                  <div id="question-two" className="accordion-collapse collapse" data-bs-parent="#questions">
                    <div className="accordion-body">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, excepturi nobis harum itaque doloremque,
                      vitae rem fuga deserunt laudantium in mollitia. Odit vitae voluptatem, harum excepturi aut ipsum natus
                      esse quibusdam ab reprehenderit, dolore voluptates veritatis error tenetur consequatur quis voluptas
                      minima sit officia quisquam voluptatum. Totam?
                    </div>
                  </div>
                </div>
                {/* Question 3 */}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#question-three">
                      What kind of services do you offer at your CarCar service center?
                    </button>
                  </h2>
                  <div id="question-three" className="accordion-collapse collapse" data-bs-parent="#questions">
                    <div className="accordion-body">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, excepturi nobis harum itaque doloremque,
                      vitae rem fuga deserunt laudantium in mollitia. Odit vitae voluptatem, harum excepturi aut ipsum natus
                      esse quibusdam ab reprehenderit, dolore voluptates veritatis error tenetur consequatur quis voluptas
                      minima sit officia quisquam voluptatum. Totam?
                    </div>
                  </div>
                </div>
                {/* Question 4 */}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#question-four">
                      Do you offer express service?
                    </button>
                  </h2>
                  <div id="question-four" className="accordion-collapse collapse" data-bs-parent="#questions">
                    <div className="accordion-body">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, excepturi nobis harum itaque doloremque,
                      vitae rem fuga deserunt laudantium in mollitia. Odit vitae voluptatem, harum excepturi aut ipsum natus
                      esse quibusdam ab reprehenderit, dolore voluptates veritatis error tenetur consequatur quis voluptas
                      minima sit officia quisquam voluptatum. Totam?
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map with Contact Info */}
      <div className="px-5 pb-5" >
        <div className="container">
          <div className="py-5">
            <div className="row gy-5 justify-content-between align-items-center">
              <div className="col-md-5">
                <div className="py-5 rounded-4" style={{ boxShadow: "3px 3px 15px #E8E0D1" }}>
                  <div className="mx-5">
                    <h2 className="display-9 fw-bold" style={{ color: "#867C79" }}>
                      Contact Info
                    </h2>
                    <div className="lead">
                      <span className="fw-bold">Address:</span> 55 CarCar St, Crystal Cove, CA
                      <br />
                      <span className="fw-bold">Sales Phone:</span> (555) 555-5555
                      <br />
                      <span className="fw-bold">Sales Email:</span> sales@carcar.test
                      <br />
                      <span className="fw-bold">Service Phone:</span> (333) 333-3333
                      <br />
                      <span className="fw-bold">Service Email:</span> carcar@frontendbc.test
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-7">
                <iframe width="520" height="400" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=55%20CarCar%20St,%20Crystal%20Cove,%20CA%20Crystal%20Cove+(CarCar)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" className="w-100 rounded-4"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default MainPage;
