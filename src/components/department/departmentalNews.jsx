import 'tailwindcss/tailwind.css'

const DepartmentalNews = () => {
    return (
        <div className="flex justify-between text-blue-800 font-bold" style={{ height: "65vh" }}>
            <div className="mr-auto ml-10 ">
                <h1 className='text-5xl mb-5'>Departmental News</h1>
                <div className='border border-black  rounded-3xl bg-white' style={{ height: '52vh' }} >
                    <img className='m-5' src="/assets/asset1.png" alt="asset" />
                    <div >
                        <p className='ml-5'>24th April 2024</p>
                        <p className='ml-5 text-4xl'>Lorem ipsum dolor sit, !</p>
                        <div className='flex justify-center mt-16'>
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
            <div className="ml-auto">
                <div className='bg-white'></div>
            </div>
        </div>
    )
}

export default DepartmentalNews