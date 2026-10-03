import './UserProfile.css';

function UserProfile({user }) {
  return (
    <div className="user-profile">
      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>
      <p>Location: {user.location}</p>
      <p>Role: {user.role}</p>
    </div>
  );
}

export default UserProfile;