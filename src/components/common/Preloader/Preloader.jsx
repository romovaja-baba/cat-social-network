import preloaderImage from "../../../images/preloader.svg";

const Preloader = () => {
    return (
        <div style={ {display: 'flex', justifyContent: 'center'} }>
            <img width={"100px"} src={preloaderImage} alt="" />
        </div>
    )
};

export default Preloader;