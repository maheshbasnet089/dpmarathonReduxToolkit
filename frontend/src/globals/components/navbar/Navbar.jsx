import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { fetchCartItems } from "../../../store/cartSlice"
import { useEffect } from "react"



export default function Navbar() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {items}  = useSelector((state)=>state.cart)
    console.log(items)
    useEffect(()=>{
        dispatch(fetchCartItems())
    },[])

  return (
    <>

<nav className="fixed z-10 w-full bg-white md:absolute md:bg-transparent">
            <div className="container px-2 m-auto md:px-12 lg:px-7">
                <div className="flex flex-wrap items-center justify-between gap-6 py-3 md:py-4 md:gap-0">
                    <div className="flex justify-between w-full px-6 lg:w-max md:px-0">
                        <Link to="/" aria-label="logo" className="flex items-center space-x-2">
                            <img src="https://tailus.io/sources/blocks/food-delivery/preview/images/icon.png" className="w-12" alt="tailus logo" width="144" height="133" />
                            <span className="text-2xl font-bold text-yellow-900">Digital <span className="text-yellow-700">Momo</span></span>
                        </Link>
    
                        <button aria-label="humburger" id="hamburger" className="relative w-10 h-10 -mr-2 lg:hidden">
                            <div aria-hidden="true" id="line" className="inset-0 w-6 h-0.5 m-auto rounded bg-yellow-900 transtion duration-300"></div>
                            <div aria-hidden="true" id="line2" className="inset-0 w-6 h-0.5 mt-2 m-auto rounded bg-yellow-900 transtion duration-300"></div>
                        </button>
                    </div>
    
                    <div className="flex-wrap items-center justify-end hidden w-full p-6 space-y-6 bg-white lg:flex rounded-xl md:space-y-0 md:p-0 md:flex-nowrap md:bg-transparent lg:w-7/12">
                     {
                        items.length !== 0 && (
                            <div className="text-gray-600 lg:pr-4">
                            <ul className="space-y-6 text-sm font-medium tracking-wide md:flex md:space-y-0">
    
                                <li>
                                    <Link to="/cart" className="block transition md:px-4 hover:text-yellow-700">
    <span>Cart <sup>{items.length}</sup> </span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        )
                     }
    
                        <div className="w-full space-y-2 border-yellow-200 lg:space-y-0 md:w-max lg:border-l">
                            <button type="button" title="Start buying" className="w-full px-6 py-3 text-center transition rounded-full active:bg-yellow-200 focus:bg-yellow-100 sm:w-max" onClick={()=>navigate('/register')}>
                                <span className="block text-sm font-semibold text-yellow-800">
                                    Sign up
                                </span>
                            </button>
                            <button type="button" title="Start buying" onClick={()=>navigate('/login')} className="w-full px-6 py-3 text-center transition bg-yellow-300 rounded-full hover:bg-yellow-100 active:bg-yellow-400 focus:bg-yellow-300 sm:w-max">
                                <span className="block text-sm font-semibold text-yellow-900">
                                    Login
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </>
  )
}
