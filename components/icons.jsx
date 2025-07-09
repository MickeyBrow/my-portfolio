import './icons.css'

function Icons({image, title, handleClicks}) {
    return (
        <>
            <div className="options" onClick={() => handleClicks(title)}>
                <img src={image} />
                <p>{title}</p>
            </div>
        </>
    )
}

export default Icons