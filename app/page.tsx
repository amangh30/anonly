import Link from "next/link";

const Home = () => {
    return(
        <div>
            <div className="h-screen flex items-center justify-center flex-col">
                <p className="text-6xl font-bold">Welcome to Anonly</p>
                <p>Send your secret message anonymously</p>
                <div className="my-5">
                    <Link href='/user-details' className="bg-[#dddddd] p-4 dark:bg-[#121212] rounded-4xl font-bold">
                        Make for me
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home;