import React from "react";

const Header=(props)=>{
    return(
        <>
        <div className="jumbotron">
            <h1 className="display-2"><i className="material-icons brand-icon">bakery_dining</i>Foodrecepie</h1>
            
            
<div className="input-group w-50 mx-auto">
  <input type="text" class="form-control" placeholder="search ur recepie" aria-label="Recipient's username" aria-describedby="basic-addon2" value={props.search} onChange={props.onInputchange}/>
  {/* <span class="input-group-text" id="basic-addon2">@example.com</span> */}
  <button className="btn btn-dark">search recepie</button>
</div>



           

        </div>
        </>

    )
}
export default Header;