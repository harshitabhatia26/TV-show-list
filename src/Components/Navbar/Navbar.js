
function Navbar() {
    return(
        <div className="navbar container-fluid navbar-light bg-light border-bottom p-4 " >
            <img className="navbar-brand"src={require('./QBT Logo Black.png')} alt="airbnb logo" width="100vw"></img>
            <ul className="navbar-nav ml-auto d-none d-md-flex flex-row justify-content-right">
            <li><a class="nav-link" href="#">Headlines</a></li>
					<li class="nav-item px-2"><a class="nav-link" href="#">Articles</a></li>
					<li class="nav-item active px-2"><a class="nav-link" href="#">Movies & Films</a></li>
					<li class="nav-item px-2"><a class="nav-link" href="#">Television</a></li>
					<li class="nav-item px-2"><a class="nav-link" href="#">Music</a></li>
					<li class="nav-item px-2"><a class="nav-link" href="#">Celebrities</a></li>
				</ul>
        </div>
    )
}

export default Navbar;