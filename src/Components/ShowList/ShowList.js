import InfoModal from '../Modal/InfoModal';

function Card(props) {
    let imgurl = '';

    if(props.item.image!=null){
        imgurl = props.item.image.medium;
    }
    else{
        imgurl = require('./noimg.png');
    }

    let rating = '';
    if(props.item.rating.average!=null){
        rating = props.item.rating.average;
    }
    else{
        rating = 'No Rating'
    }

    return (
        <div className="card mx-2 my-2">
        <img class="card-img-top" src={imgurl} alt="Card cap" ></img>
        <div className="card-body px-0 pb-0 pt-1">
        <p class="d-flex flex-row align-items-baseline m-0 justify-content-center">
            <img src={require('./star.png')} alt="star" width="15px"></img>
            <p class="card-title m-0 px-1">{rating}</p>
    </p>
    <p className='d-flex flex-column justify-content-center'>
        <h5 className="card-title text-center m-0">{props.item.name}</h5>
        <InfoModal 
            summary={props.item.summary}
            name={props.item.name}
        />
    </p>
        </div>
    </div>
    )
}

export default Card;