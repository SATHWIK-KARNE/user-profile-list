import './index.css'

// has user profile component

const UserProfile = props => {
  const {userDetails} = props
  const {imageUrl, name, role} = userDetails

  return (
    <li className="user-card-container">
      <img src={imageUrl} alt="avatar" className="avatar" />
      <div className="user-details-container">
        <h1 className="user-name">{name}</h1>
        <p className="designation">{role}</p>
      </div>
    </li>
  )
}

export default UserProfile
