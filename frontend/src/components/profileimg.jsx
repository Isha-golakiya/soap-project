import { useSelector } from 'react-redux';

const Profile = () => {
  const user = useSelector((state) => state.user.user);
  if (!user || !user.image) {
    return (
      <i className="fa fa-user" style={{ fontSize: '30px', color: '#4e3c31' }}></i>
    );
  }
  return (
    <img src={user.image} alt="Profile" width="40" height="40" style={{ borderRadius: '50%', objectFit: 'cover' }} />
  );
};

export default Profile;
