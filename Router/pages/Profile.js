import {useParams} from 'react-router-dom';

const data = {
    velopert: {
        name : 'kim',
        description: 'the developer to love React',
    },

    gildong: {
        name: 'hong',
        description: 'the main character who love the part of hong-gil-dong classic novel'
    },
};

const Profile = () => {
    const params = useParams();
    const profile = data[params.username];

    return(
        <div>
            <h1>user profile</h1>
            {profile ? (
                <div>
                    <h2>{profile.name}</h2>
                    <p>{profile.description}</p>
                </div>
            ) : (
                <p> do not exist of profile</p>
            )}
        </div>
    );
};

export default Profile;