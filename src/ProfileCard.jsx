function ProfileCard({title, description , image}) {
    return(
        <div className="card">
            <div className="card-image">
                <figure className="image is-256x256">
                    <img src={image} alt="logo" style={{ objectFit: 'cover', height: '100%', width: '100%' }} />
                    </figure>
            </div>
            <div className="card-content">
            <div className="media-content">
        <p className="title">{title}</p>
        <p className="description"> {description}</p>
        </div>
        </div>
        </div>
        
    )
}
export default ProfileCard;