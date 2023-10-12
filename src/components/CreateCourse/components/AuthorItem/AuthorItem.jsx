function AuthorItem({ children, authorName }) {
    return (
        <>
            <p>{authorName}</p>
            {children}
        </>
    );
}

export default AuthorItem;