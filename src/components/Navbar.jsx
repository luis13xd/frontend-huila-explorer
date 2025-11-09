import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { TiThMenuOutline } from "react-icons/ti";
import { CgCloseO } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";

import avatarImg from "../assets/commentor.png"
import { useLogoutUserMutation } from "../redux/features/auth/authApi";
import { logout } from "../redux/features/auth/authSlice";

const navLists = [
    { name: "Inicio", path: "/" },
    { name: "Nosotros", path: "/nosotros" },
    { name: "Politicas", path: "/politicas" },
    { name: "Contacto", path: "/contacto" },
]

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { user } = useSelector((state) => state.auth);
    console.log(user)
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const dispatch = useDispatch();
    const [logoutUser] = useLogoutUserMutation();

    const handleLogout = async () => {
        try {
            await logoutUser().unwrap();
            dispatch(logout())
        } catch (error) {
           console.log(error) 
        }
    } 

    return (
        <header className='bg-white py-4 border'>
            <nav className='container mx-auto flex justify-between  px-5'>
                <a href="/">
                    <img
                        src="/logoblanco.png"
                        alt="Huila Explorer Marketing"
                        className="h-12 mr-6 sm:hidden md:flex"
                    />
                </a>
                <ul className="sm:flex hidden items-center gap-8">
                    {
                        navLists.map((list, index) => (
                            <li key={index}>
                                <NavLink
                                    to={`${list.path}`}
                                    className={({ isActive }) =>
                                        isActive ? "active" : ""
                                    }
                                >
                                    {list.name}
                                </NavLink>
                            </li>
                        ))
                    }
                    {
                        user && user.role === "user"
                            ? (<li className="flex items-center gap-3">
                                <img src={avatarImg} alt="" className="size-8" />
                                <button 
                                    className="bg-red-500 px-4 py-1.5 text-white rounded-sm"
                                    onClick={handleLogout}
                                >
                                        Salir
                                </button>
                            </li>)
                            : (<li>
                                <NavLink to="/login">Ingresar</NavLink>
                            </li>)
                    }
                    {
                        user && user.role === "admin"
                            && (<li className="flex items-center gap-3">
                                <img src={avatarImg} alt="" className="size-8" />
                                <Link to="/dashboard">
                                    <button className="bg-red-500 px-4 py-1.5 text-white rounded-sm">
                                        Dashboard
                                    </button>
                                </Link>
                            </li>)
                    }

                </ul>
                {/* Menu logo movil */}
                <div className="flex items-center sm:hidden">
                    <button
                        onClick={toggleMenu}
                        className="flex items-center px-3 py-4 bg-[#fafafa] rounded text-sm text-gray-500 hover:text-gray-800 "
                    >
                        {
                            isMenuOpen ? <CgCloseO className="size-6" /> : <TiThMenuOutline className="size-6" />
                        }
                    </button>
                </div>
            </nav>
            {/* Menu seccion movil */}
            {
                isMenuOpen && (
                    <ul className="fixed top-[108px] left-0 w-full h-auto pb-8 border-b bg-white shadow-sm z-50">
                        {
                            navLists.map((list, index) => (
                                <li className="mt-5 px-[15%]" key={index}>
                                    <NavLink
                                        onClick={() => setIsMenuOpen(false)}
                                        to={`${list.path}`}
                                        className={({ isActive }) =>
                                            isActive ? "active" : ""
                                        }
                                    >
                                        {list.name}
                                    </NavLink>
                                </li>
                            ))
                        }
                        <li className="px-[15%] mt-5">
                            <NavLink to="/login">Ingresar</NavLink>
                        </li>
                    </ul>
                )
            }
        </header>
    )
}

export default Navbar;