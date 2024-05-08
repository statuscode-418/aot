import {advertisements} from "../../constants/advertisement"


const NewsComponent = () => {
    return (
        <div className="mx-10 mb-10">
            {advertisements.map((ad, index) => (
                <div className="text-3xl mb-3 flex" key={index}>
                    <a href="/"><h2 className="text-blue-900">{ad.title} </h2> </a> <span className="text-black">(Published in {ad.publishedIn})</span>
                    <hr />
                </div>
            ))}
            <div className=" text-blue-900 text-3xl">
                <a href="/"><h2>AOT Application Format</h2></a>
            </div>
        </div>
    );
};

export default NewsComponent;