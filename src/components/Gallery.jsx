export function Profile() {
    return <img src="https://placekitten.com/200/300" alt="profile" />;
}

function Gallery() {
    return (
        <section>
            <h1>Cat</h1>
            <Profile />
            <Profile />
            <Profile />
        </section>
    );
}

export default Gallery;
