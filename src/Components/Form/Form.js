import {useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";


function Form() {
    const location = useLocation();
    const navigate = useNavigate();
    const navigateTo = () => navigate('/');



    return (
        <form class="container-fluid my-3"> 
        <div class="form-group mx-3">
          <label>Movie Name</label>

          <input type="text" class="form-control" placeholder={location.state.name} readOnly>
            </input>
        </div>
        <div class="form-group mx-3">
          <label>Email address</label>
          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
            </input>
        </div>
        <div class="form-group mx-3">
          <label for="exampleFormControlSelect1">Timing</label>
          <select class="form-control" id="exampleFormControlSelect1">
            <option class="mx-3">9:00 a.m.</option>
            <option>12:00 p.m.</option>
            <option>3:00 p.m.</option>
            <option>6:00 p.m.</option>
            <option>9:00 p.m.</option>
          </select>
        </div>
        <div class="form-group mx-3">
          <label for="exampleFormControlSelect1">Day</label>
          <select class="form-control" id="exampleFormControlSelect1">
            <option class="mx-3">Today.</option>
            <option>Tomorrow</option>
            <option>Day After Tomorrow</option>
          </select>
        </div>
        <button type="submit" class="btn btn-primary mx-3">Submit</button>
        <button type="submit" class="btn btn-secondary mx-3" onClick={navigateTo}>Cancel</button>
      </form>
    )
}

export default Form;