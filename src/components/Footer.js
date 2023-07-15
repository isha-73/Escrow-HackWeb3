
export default function Footer() {

    return (
        <>
            <div className=" inset-x-0 bottom-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500"></div>
            <footer className="bg-slate-950 text-white text-center py-4">

                <div className="container mx-auto relative">
                    <p>&copy; {new Date().getFullYear()} Made by ISNTI</p>
                </div>

            </footer>


        </>
    );
}