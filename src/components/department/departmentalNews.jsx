import "tailwindcss/tailwind.css";
import { DepartmentNews } from "../../constants/departmentNews";

const DepartmentalNews = () => {
    return (
        <div className="flex justify-center text-blue-800 font-bold p-2 ">
    <div className="mr-auto ml-16 ">
        <h1 className='text-5xl mb-5'>Departmental News</h1>
        <div className='border border-black rounded-3xl bg-white' style={{ height: '75%', width: '95%' }}>
            <img className='m-5' style={{ width: 'calc(100% - 40px)' }} src="https://res.cloudinary.com/dtwrlsxun/image/upload/v1715102919/aot_assets/dvnkz4bnjqcfnzr6hxze.png" alt="asset" />
            <div>
                <p className='ml-5'>24th April 2024</p>
                <p className='ml-5 text-4xl'>Lorem ipsum dolor sit, !</p>
                <div className='flex justify-center mt-10'>
                    <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-800 text-white px-4 border-2 border-black py-2 rounded-md"
                    >
                        Read more...
                    </a>
                </div>
            </div>
        </div>
    </div>

    <div className="flex items-center">
        <div className="hidden sm:block relative right-[17.5rem] md:block h-full" style={{ borderLeft: '2px solid black', height: "65vh" }}></div>
    </div>

    <div className="flex flex-col items-center">
        <div className="hidden lg:block md:block ml-auto mt-7 mr-16 border rounded-3xl bg-white overflow-auto scrollbar-hide" style={{ height: '58vh', width: '60vh' }}>
            {DepartmentNews.map((item, index) => (
                <div key={index} className="p-4 mx-5 border-b-2 border-blue-800">
                    <h2 className="font-bold">{item.news}</h2>
                    <p>{item.date}</p>
                </div>
            ))}
        </div>
        <div className='flex justify-center mt-6'>
            <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-800 text-white px-4 border-2 border-black py-2 rounded-md"
            >
                Archives
            </a>
        </div>
    </div>
</div>

    )
}

export default DepartmentalNews;
