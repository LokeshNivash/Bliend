import './ScrollingHeader.css';



const ScrollingHeader = () => {
    const slogan = "we specialize in transforming brands ";
    return (
        <div className="scrolling-header">
            <div className="scrolling-wrapper">
                <p className="slogan-text">{slogan}</p>
            </div>
        </div>
    );
};

export default ScrollingHeader;
