import { careerText } from "../../constants/careerText";

const CareerBenifitComponent = () => {
    return (
        <div>
            <h1 className="text-5xl text-blue-900 text-center mt-6">Careers@AOT</h1>
            <h2 className="text-3xl text-blue-900 font-bold text-center mt-6 mb-16">COMPETITIVE PAY PACKAGES & CAREER ADVANCEMENT SCHEME</h2>
            {careerText.map((item, index) => (
                <div key={index} className="mt-6 mx-16 mb-10">
                    <h3 className="text-2xl text-blue-900 font-bold mb-6">{item.title}</h3>
                    <p className="text-xl">{item.description}</p>
                    <hr className="my-2 border-black border-t-2 mt-12" />
                </div>
            ))}

            <div className="text-3xl font-bold text-blue-950 bg-yellow-400 mx-24 mb-10 p-6">
                <p>We are looking for dynamic faculty members who are ready to join our quest for excellence. Please email your CV indicating the post applied for to career@aot.edu.in</p>
            </div>
        </div>
    )
}


export default CareerBenifitComponent;