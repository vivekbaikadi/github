import DashboardBox from "./components/dashboardBox";
import { FaCircleUser } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { FaBagShopping } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from "react";
import Button from '@mui/material/Button';
import { IoMdEye } from "react-icons/io";
import { FaPen } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";


import Pagination from '@mui/material/Pagination';


const Dashboard = () => {

    const [showBy, setshowBy] = useState('');
    const [showByCat, setCatBy] = useState('');

    return (
        <>
            <div className="right-content">
                <div className="row">
                    <div className="col-md-8">
                        <div className="dashboardboxWrapper d-flex">
                            <DashboardBox color={["#1da256", "#48d483"]} icon={<FaCircleUser />} />
                            <DashboardBox color={["#c012e2", "#eb64fe"]} icon={<FaCartShopping />} />
                            <DashboardBox color={["#2c78e5", "#60aff5"]} icon={<FaBagShopping />} />
                            <DashboardBox color={["#e1950e", "#f3cd29"]} icon={<FaStar />} />
                        </div>
                    </div>
                </div>

                <div className="card shadow border-0 p-3 mt-4">
                    <h3 className="hd">Best Selling Products</h3>

                    <div className="row cardFilters mt-3">
                        <div className="col-md-3">
                            <h4>SHOW BY</h4>
                            <FormControl size="small" className="w-100">
                                <Select
                                    value={showBy}
                                    onChange={(e) => setshowBy(e.target.value)}
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}

                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div className="col-md-3">
                            <h4>CATEGORY BY</h4>
                            <FormControl size="small" className="w-100">
                                <Select
                                    value={showByCat}
                                    onChange={(e) => setCatBy(e.target.value)}
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}

                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </div>

                    <div className="table-responsive mt-3">
                        <table className="table table-bordered v-align">
                            <thead className="thead-dark">
                                <tr>
                                    <th>UID</th>
                                    <th>PRODUCT</th>
                                    <th>CATEGORY</th>
                                    <th>BRAND</th>
                                    <th>PRICE</th>
                                    <th>RATING</th>
                                    <th>ACTION</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>#1</td>
                                    <td>
                                        <div className="d-flex align-items-center productBox">
                                            <div className="imgWrapper">
                                                <div className="img">
                                                    <img src="https://m.media-amazon.com/images/I/717ePALRxWL._SL1200_.jpg" className="w-100" />
                                                </div>
                                            </div>
                                            <div className="info">
                                                <h6>Red Label Powder</h6>
                                            </div>
                                        </div>
                                    </td>
                                    <td>Tea powder</td>
                                    <td>Dabur</td>
                                    <td>
                                        <del className="oldPrice">INR 200</del>
                                        <span className="text-danger netPrice">INR 150</span>
                                    </td>
                                    <td>4.5</td>
                                    <td>
                                        <div className="actions d-flex align-items-center" style={{ width: '50px' }}>
                                            <Button color="secondary"><IoMdEye /></Button>
                                            <Button color="success"><FaPen /></Button>
                                            <Button color="error"><MdDelete /></Button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>#1</td>
                                    <td>
                                        <div className="d-flex align-items-center productBox">
                                            <div className="imgWrapper">
                                                <div className="img">
                                                    <img src="https://m.media-amazon.com/images/I/717ePALRxWL._SL1200_.jpg" className="w-100" />
                                                </div>
                                            </div>
                                            <div className="info">
                                                <h6>Red Label Powder</h6>
                                            </div>
                                        </div>
                                    </td>
                                    <td>Tea powder</td>
                                    <td>Dabur</td>
                                    <td>
                                        <del className="oldPrice">INR 200</del>
                                        <span className="text-danger netPrice">INR 150</span>
                                    </td>
                                    <td>4.5</td>
                                    <td>
                                        <div className="actions d-flex align-items-center" style={{ width: '50px' }}>
                                            <Button color="secondary"><IoMdEye /></Button>
                                            <Button color="success"><FaPen /></Button>
                                            <Button color="error"><MdDelete /></Button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>#1</td>
                                    <td>
                                        <div className="d-flex align-items-center productBox">
                                            <div className="imgWrapper">
                                                <div className="img">
                                                    <img src="https://m.media-amazon.com/images/I/717ePALRxWL._SL1200_.jpg" className="w-100" />
                                                </div>
                                            </div>
                                            <div className="info">
                                                <h6>Red Label Powder</h6>
                                            </div>
                                        </div>
                                    </td>
                                    <td>Tea powder</td>
                                    <td>Dabur</td>
                                    <td>
                                        <del className="oldPrice">INR 200</del>
                                        <span className="text-danger netPrice">INR 150</span>
                                    </td>
                                    <td>4.5</td>
                                    <td>
                                        <div className="actions d-flex align-items-center" style={{ width: '50px' }}>
                                            <Button color="secondary"><IoMdEye /></Button>
                                            <Button color="success"><FaPen /></Button>
                                            <Button color="error"><MdDelete /></Button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>#1</td>
                                    <td>
                                        <div className="d-flex align-items-center productBox">
                                            <div className="imgWrapper">
                                                <div className="img">
                                                    <img src="https://m.media-amazon.com/images/I/717ePALRxWL._SL1200_.jpg" className="w-100" />
                                                </div>
                                            </div>
                                            <div className="info">
                                                <h6>Red Label Powder</h6>
                                            </div>
                                        </div>
                                    </td>
                                    <td>Tea powder</td>
                                    <td>Dabur</td>
                                    <td>
                                        <del className="oldPrice">INR 200</del>
                                        <span className="text-danger netPrice">INR 150</span>
                                    </td>
                                    <td>4.5</td>
                                    <td>
                                        <div className="actions d-flex align-items-center" style={{ width: '50px' }}>
                                            <Button color="secondary"><IoMdEye /></Button>
                                            <Button color="success"><FaPen /></Button>
                                            <Button color="error"><MdDelete /></Button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>#1</td>
                                    <td>
                                        <div className="d-flex align-items-center productBox">
                                            <div className="imgWrapper">
                                                <div className="img">
                                                    <img src="https://m.media-amazon.com/images/I/717ePALRxWL._SL1200_.jpg" className="w-100" />
                                                </div>
                                            </div>
                                            <div className="info">
                                                <h6>Red Label Powder</h6>
                                            </div>
                                        </div>
                                    </td>
                                    <td>Tea powder</td>
                                    <td>Dabur</td>
                                    <td>
                                        <del className="oldPrice">INR 200</del>
                                        <span className="text-danger netPrice">INR 150</span>
                                    </td>
                                    <td>4.5</td>
                                    <td>
                                        <div className="actions d-flex align-items-center" style={{ width: '50px' }}>
                                            <Button color="secondary"><IoMdEye /></Button>
                                            <Button color="success"><FaPen /></Button>
                                            <Button color="error"><MdDelete /></Button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>#1</td>
                                    <td>
                                        <div className="d-flex align-items-center productBox">
                                            <div className="imgWrapper">
                                                <div className="img">
                                                    <img src="https://m.media-amazon.com/images/I/717ePALRxWL._SL1200_.jpg" className="w-100" />
                                                </div>
                                            </div>
                                            <div className="info">
                                                <h6>Red Label Powder</h6>
                                            </div>
                                        </div>
                                    </td>
                                    <td>Tea powder</td>
                                    <td>Dabur</td>
                                    <td>
                                        <del className="oldPrice">INR 200</del>
                                        <span className="text-danger netPrice">INR 150</span>
                                    </td>
                                    <td>4.5</td>
                                    <td>
                                        <div className="actions d-flex align-items-center" style={{ width: '50px' }}>
                                            <Button color="secondary"><IoMdEye /></Button>
                                            <Button color="success"><FaPen /></Button>
                                            <Button color="error"><MdDelete /></Button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>#1</td>
                                    <td>
                                        <div className="d-flex align-items-center productBox">
                                            <div className="imgWrapper">
                                                <div className="img">
                                                    <img src="https://m.media-amazon.com/images/I/717ePALRxWL._SL1200_.jpg" className="w-100" />
                                                </div>
                                            </div>
                                            <div className="info">
                                                <h6>Red Label Powder</h6>
                                            </div>
                                        </div>
                                    </td>
                                    <td>Tea powder</td>
                                    <td>Dabur</td>
                                    <td>
                                        <del className="oldPrice">INR 200</del>
                                        <span className="text-danger netPrice">INR 150</span>
                                    </td>
                                    <td>4.5</td>
                                    <td>
                                        <div className="actions d-flex align-items-center" style={{ width: '50px' }}>
                                            <Button color="secondary"><IoMdEye /></Button>
                                            <Button color="success"><FaPen /></Button>
                                            <Button color="error"><MdDelete /></Button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>#1</td>
                                    <td>
                                        <div className="d-flex align-items-center productBox">
                                            <div className="imgWrapper">
                                                <div className="img">
                                                    <img src="https://m.media-amazon.com/images/I/717ePALRxWL._SL1200_.jpg" className="w-100" />
                                                </div>
                                            </div>
                                            <div className="info">
                                                <h6>Red Label Powder</h6>
                                            </div>
                                        </div>
                                    </td>
                                    <td>Tea powder</td>
                                    <td>Dabur</td>
                                    <td>
                                        <del className="oldPrice">INR 200</del>
                                        <span className="text-danger netPrice">INR 150</span>
                                    </td>
                                    <td>4.5</td>
                                    <td>
                                        <div className="actions d-flex align-items-center" style={{ width: '50px' }}>
                                            <Button color="secondary"><IoMdEye /></Button>
                                            <Button color="success"><FaPen /></Button>
                                            <Button color="error"><MdDelete /></Button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <div className="d-flex tableFooter">
                            <p>showing <b>12</b> of <b>60</b> results</p>
                            <Pagination count={10} color="primary" className="pagination"/>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Dashboard;