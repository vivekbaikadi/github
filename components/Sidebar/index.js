import Button from '@mui/material/Button';
import { RiDashboardFill } from "react-icons/ri";
import { FaAngleRight } from "react-icons/fa6";
import { MdInterests } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { MyContext } from '../../App';



const Sidebar = () => {

    const [activeTab, setactiveTab] = useState(0);
    const [isToggleSubmenu, setisToggleSubmenu] = useState(false);

    const content = useContext(MyContext);
    const isOpenSubmenu=(index)=>{
        setactiveTab(index);
        setisToggleSubmenu(!isToggleSubmenu);
    }
    return (
        <>
            <div className="sidebar">
                <ul>
                    <li>
                        <Link to="/">
                            <Button className={`w-100 ${activeTab===0 ? 'active' : ''}`} onClick={()=>isOpenSubmenu(0)}>
                                <span className='icon'><RiDashboardFill /></span>
                                Dashboard
                                <span className='arrow'><FaAngleRight /></span>
                            </Button>
                            <div className={` submenuWrapper ${activeTab===0 && isToggleSubmenu===true ? 'colapse' : 'colapsed'}`}>
                                <ul className='submenu'>
                                    <li><Link to="#"><Button >Ecommerce</Button></Link></li>
                                </ul>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <Button className={`w-100 ${activeTab===1 ? 'active' : ''}`} onClick={()=>isOpenSubmenu(1)}>
                                <span className='icon'><FaUser /></span>
                                User
                                <span className='arrow'><FaAngleRight /></span>
                            </Button>
                            <div className={` submenuWrapper ${activeTab===1 && isToggleSubmenu===true ? 'colapse' : 'colapsed'}`}>
                                <ul className='submenu'>
                                    <li><Link to="#"><Button >User List</Button></Link></li>
                                </ul>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <Button className={`w-100 ${activeTab===2 ? 'active' : ''}`} onClick={()=>isOpenSubmenu(2)}>
                                <span className='icon'><MdInterests /></span>
                                Products
                                <span className='arrow'><FaAngleRight /></span>
                            </Button>
                            <div className={` submenuWrapper ${activeTab===2 && isToggleSubmenu===true ? 'colapse' : 'colapsed'}`}>
                                <ul className='submenu'>
                                    <li><Link to="#"><Button >Product List</Button></Link></li>
                                    <li><Link to="#"><Button>Product view</Button></Link></li>
                                    <li><Link to="#"><Button>Product Upload</Button></Link></li>
                                </ul>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Sidebar;