import { Link } from 'react-router-dom';

const Missing = () => {
    return (
        <main className='Missing'>
            <h2>Page Not Found</h2>
            <p>That's disappointing...</p>
            <p> <Link to='/'>Link to our Homepage</Link> </p>
        </main>
    )
}

export default Missing;