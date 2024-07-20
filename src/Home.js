function Home() {


    return (
        <>
        
        <div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg?auto=compress&cs=tinysrgb&w=600" class="d-block w-100" alt=".." height={900}/>
      <div class="carousel-caption d-none d-md-block">
        <h5>CARS FOR AGES</h5>
        <p><h3>A designed car is better than a customised one.</h3></p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://images.pexels.com/photos/712618/pexels-photo-712618.jpeg?auto=compress&cs=tinysrgb&w=600" class="d-block w-100" alt="..." height={900}/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Second Car</h5>
        <p><h3> Cars are best</h3>.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://images.pexels.com/photos/3422964/pexels-photo-3422964.jpeg?auto=compress&cs=tinysrgb&w=600" class="d-block w-100" alt="..."height={900}/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Third CAR</h5>
        <p>SPEED IS THE FORMULA.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>




        
        </>
    )
}
export default Home;