import './Navbar.css'

const Navbar=({links})=>{


    return(
        <>
        <div className='navbar--container'>
            <div className='navbar--title'>
                <h1>Navbar</h1>
            </div>
            <div className='navbar--links'>
                {
                    links.map((link, index)=>(
                        <div key={index} className='navbar--link'>
                            <a href={link.href}>{link.name}</a>
                        </div>
                    ))
                }
            </div>
        </div>
        </>
    )
}

export default Navbar;