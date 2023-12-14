import Logo from '../Images/logoo.png'
const Navbar = ()=>{
    
    
    return (
        <div>
            <nav className="flex border mx-32 py-10 justify-between px-10 text-[1.4rem]">
                <div className="border w-[8rem]">
                    <img className='w-[6rem]' src={Logo} alt="Logo" />
                </div>
                <div className="border w-[50rem] justify-end space-x-12 flex">
                    <button className="border px-5 py-1 rounded-lg">Home</button>
                    <button className="border px-5 py-1 rounded-lg">Courses</button>
                    <button className="border px-5 py-1 rounded-lg">Class</button>
                    <button className="border px-5 py-1 rounded-lg">Date</button>
                    <button className="border px-5 py-1 rounded-lg">Later</button>
                </div>
            </nav>
        </div>

        
    )
}
export default Navbar 