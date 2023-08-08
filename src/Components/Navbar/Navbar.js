
function Navbar() {
    return(
        <div className="navbar navbar-expand-lg navbar-light bg-light border-bottom p-4 " >
            <img className="navbar-brand"src={require('./QBT Logo Black.png')} alt="airbnb logo" width="100vw"></img>
            <ul className="navbar-nav ml-auto">
            <li><a class="nav-link" href="#">Headlines</a></li>
					<li class="nav-item"><a class="nav-link" href="#">Articles</a></li>
					<li class="nav-item active"><a class="nav-link" href="#">Movies & Films</a></li>
					<li class="nav-item"><a class="nav-link" href="#">Television</a></li>
					<li class="nav-item"><a class="nav-link" href="#">Music</a></li>
					<li class="nav-item"><a class="nav-link" href="#">Celebrities</a></li>
				</ul>
        </div>
    )
}

export default Navbar;