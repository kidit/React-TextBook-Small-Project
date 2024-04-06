import {Link} from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>home</h1>
            <p>as you can see it first</p>
            <ul>
                <li>
                    <Link to ="./about">introduce</Link>
                </li>
                <li>
                    <Link to="/profile/velopert">velopert profile</Link>
                </li>
                <li>
                    <Link to="/profile/gildong">gildong profile</Link>
                </li>
                <li>
                    <Link to="profile/void">do not exist profile</Link>
                </li>
                <li>
                    <Link to = "articles">title list</Link>
                </li>
            </ul>
        </div>
    );
};

export default Home;