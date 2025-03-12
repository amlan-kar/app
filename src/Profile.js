function Profile({ user }) {
    return user ? (
        <div>
            <h2>Welcome, {user.username}!</h2>
            <p>Email: {user.email}</p>
        </div>
    ) : <p>Please login first.</p>;
}

export default Profile;
