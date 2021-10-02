export const Button = ({ text, onClick }) => {
    return (
        <div className='btn-container'>
            <button onClick={onClick} className='btn'>{text}</button>
        </div>
    )
}
