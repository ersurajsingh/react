import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  //DialogActions,
  //TextField,
  //Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem
  //FormHelperText
} from "@mui/material"; // Import Material-UI components
//import SideMenu from "../components/side-menu";
//import { useNavigate } from "react-router-dom";
//const [filterRole, setFilterRole] = useState(""); // State to hold the selected filter role
//const [filterOpen, setFilterOpen] = useState(false); // State to manage filter dropdown visibility
const Employees = () => {
  const [employees, setEmployees] = useState([]); // State to hold employee data
  const [loading, setLoading] = useState(true); // Loading state
  const [filterRole, setFilterRole] = useState(""); // State to hold the selected filter role
  const [filterOpen, setFilterOpen] = useState(false); // State to manage filter dropdown visibility
  const [employeeName, setEmployeeName] = useState("");
  const [employeeEmail, setEmployeeEmail] = useState("");
  const [employeeRole, setEmployeeRole] = useState("Employee");
  const [employeeStatus, setEmployeeStatus] = useState("Active");
  const [open, setOpen] = useState(false); // State for modal visibility

  // Function to fetch employees from the backend
  const fetchEmployees = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/employees");
      setEmployees(response.data);
    } catch (error) {
      console.error("Error fetching employees:", error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch employees when the component mounts
  useEffect(() => {
    fetchEmployees();
  }, []);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    // Reset form fields
    setEmployeeName("");
    setEmployeeEmail("");
    setEmployeeRole("Employee");
    setEmployeeStatus("Active");
  };

  const handleSubmit = async () => {
    const newEmployee = {
      name: employeeName,
      email: employeeEmail,
      role: employeeRole,
      status: employeeStatus
    };

    try {
      // Send POST request to add the new employee
      const response = await axios.post(
        "http://localhost:8080/api/employees",
        newEmployee
      );
      // Update the employees state with the new employee
      setEmployees((prevEmployees) => [...prevEmployees, response.data]);
      handleClose(); // Close modal after adding
    } catch (error) {
      console.error("Error adding employee:", error);
    }
  };

  return (
    <div className="relative box-border flex w-full flex-col items-start justify-start gap-[13.5px] overflow-hidden bg-whitesmoke-200 px-0 pb-[39px] pt-0 text-left font-source-sans-pro text-3xl leading-[normal] tracking-[normal] text-gray-200">
      <header className="sticky top-0 z-[99] box-border flex max-w-full flex-row items-start justify-between gap-5 self-stretch bg-darkslateblue pb-[9px] pl-[15px] pr-3.5 pt-2.5 text-center font-source-sans-pro text-5xl text-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.05)]">
        <div className="relative hidden h-[50px] w-[1920px] max-w-full bg-darkslateblue shadow-[0px_4px_4px_rgba(0,_0,_0,_0.05)]" />
        <div className="flex flex-col items-start justify-start px-0 pb-0 pt-0.5">
          <h3 className="relative z-[2] m-0 inline-block min-w-[127px] self-stretch font-[inherit] text-inherit font-normal">
            StockMaster
          </h3>
        </div>
        <img
          className="relative z-[2] size-[30px] object-cover"
          loading="lazy"
          alt=""
          src="/mask-group@2x.png"
        />
      </header>
      <div className="box-border flex max-w-full flex-row items-start justify-start py-0 pl-[255px] pr-[254px] mq850:box-border mq850:px-[127px] mq450:box-border mq450:px-5">
        <a className="relative font-bold text-[inherit] [text-decoration:none] mq450:text-lg">
          Employees
        </a>
      </div>
      <main className="box-border flex w-[1883px] max-w-full flex-row items-start justify-start px-2 py-0">
        <section className="relative flex max-w-full flex-1 flex-row items-start justify-start gap-[49px] text-left font-source-sans-pro text-base text-gray-100 mq850:gap-6">
          <div className="box-border flex w-[198px] flex-col items-start justify-start px-0 pb-0 pt-1.5 mq1225:hidden">
            <div className="flex flex-col items-start justify-start gap-[26px] self-stretch">
              <div className="flex flex-row items-start justify-start px-6 py-0">
                <div className="flex flex-1 flex-row items-start justify-start gap-[17.6px]">
                  <div className="flex flex-col items-start justify-start px-0 pb-0 pt-0.5">
                    <div className="flex flex-col items-end justify-start gap-[32.2px]">
                      <img
                        className="relative h-[16.8px] w-[18.1px]"
                        loading="lazy"
                        alt=""
                        src="/group-12.svg"
                      />
                      <div className="flex flex-col items-end justify-start gap-[35.8px]">
                        <div className="flex flex-row items-start justify-end py-0 pl-[3px] pr-0.5">
                          <img
                            className="relative size-[14.2px] shrink-0"
                            loading="lazy"
                            alt=""
                            src="/group-11.svg"
                          />
                        </div>
                        <div className="flex shrink-0 flex-col items-end justify-start gap-[32.2px]">
                          <img
                            className="relative h-[13px] w-[18px]"
                            loading="lazy"
                            alt=""
                            src="/vector.svg"
                          />
                          <img
                            className="relative size-[19.4px]"
                            loading="lazy"
                            alt=""
                            src="/group-9.svg"
                          />
                          <div className="flex flex-row items-start justify-end px-px py-0">
                            <img
                              className="relative size-[16.8px]"
                              loading="lazy"
                              alt=""
                              src="/group-8.svg"
                            />
                          </div>
                          <div className="flex flex-row items-start justify-end px-px py-0">
                            <img
                              className="relative size-[17px]"
                              loading="lazy"
                              alt=""
                              src="/vector-1.svg"
                            />
                          </div>
                          <img
                            className="relative h-[14.2px] w-[18.1px]"
                            loading="lazy"
                            alt=""
                            src="/group-7.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col items-start justify-start gap-[29px]">
                    <a className="relative inline-block min-w-[47px] text-[inherit] [text-decoration:none]">
                      Orders
                    </a>
                    <div className="flex flex-col items-start justify-start gap-[26px] self-stretch">
                      <a className="relative text-[inherit] [text-decoration:none]">
                        Products
                      </a>
                      <a className="relative inline-block min-w-[73px] text-[inherit] [text-decoration:none]">
                        Customers
                      </a>
                      <a className="relative inline-block min-w-[61px] text-[inherit] [text-decoration:none]">
                        Finances
                      </a>
                      <a className="relative inline-block min-w-[62px] text-[inherit] [text-decoration:none]">
                        Analytics
                      </a>
                      <a className="relative inline-block min-w-[54px] text-[inherit] [text-decoration:none]">
                        Referral
                      </a>
                      <a className="relative text-[inherit] [text-decoration:none]">
                        Marketing
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[15px] self-stretch px-0 pb-[397px] pt-0 mq850:box-border mq850:pb-[258px]">
                <div className="flex flex-row items-start justify-start px-[25px] py-0">
                  <div className="flex flex-col items-start justify-start gap-[26px]">
                    <div className="flex flex-row items-start justify-start gap-[17.9px]">
                      <div className="flex flex-col items-start justify-start px-0 pb-0 pt-px">
                        <img
                          className="relative size-[18.1px] shrink-0"
                          loading="lazy"
                          alt=""
                          src="/group-6.svg"
                        />
                      </div>
                      <a className="relative shrink-0 text-[inherit] [text-decoration:none]">
                        Support
                      </a>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[19.2px]">
                      <div className="flex flex-col items-start justify-start px-0 pb-0 pt-px">
                        <img
                          className="relative size-[16.8px] shrink-0"
                          loading="lazy"
                          alt=""
                          src="/group-5.svg"
                        />
                      </div>
                      <a className="relative inline-block min-w-[56px] shrink-0 text-[inherit] [text-decoration:none]">
                        Settings
                      </a>
                    </div>
                  </div>
                </div>
                <button className="flex cursor-pointer flex-row items-start justify-start gap-[18px] self-stretch rounded-8xs bg-darkslateblue px-[25px] pb-2.5 pt-[11px] [border:none]">
                  <div className="relative hidden h-[41px] w-[198px] rounded-8xs bg-darkslateblue" />
                  <div className="flex flex-col items-start justify-start px-0 pb-0 pt-px">
                    <img
                      className="relative z-[1] size-[18px]"
                      alt=""
                      src="/employee.svg"
                    />
                  </div>
                  <a className="relative z-[1] inline-block min-w-[75px] text-left font-source-sans-pro text-base text-white [text-decoration:none]">
                    Employees
                  </a>
                </button>
              </div>
              <div className="flex flex-row items-start justify-start px-[25px] py-0 font-inter text-mini">
                <div className="flex flex-row items-start justify-start gap-[17px]">
                  <div className="flex flex-col items-start justify-start px-0 pb-0 pt-[3px]">
                    <img
                      className="relative size-4"
                      loading="lazy"
                      alt=""
                      src="/group-3366.svg"
                    />
                  </div>
                  <div className="relative inline-block min-w-[50px] font-medium leading-[22px] tracking-[-0.41px]">
                    Logout
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex max-w-[calc(100%_-_247px)] flex-1 flex-col items-start justify-start gap-[21px] text-darkgray mq1225:max-w-full">
            <div className="flex max-w-full flex-row items-end justify-between gap-5 self-stretch mq850:flex-wrap">
              <div className="flex w-[413px] max-w-full flex-row items-start justify-start gap-[16.5px] mq450:flex-wrap">
                <div className="box-border flex min-w-[182px] flex-1 flex-col items-start justify-start px-0 pb-0 pt-px">
                  <div className="box-border flex h-[50px] flex-row items-start justify-start self-stretch rounded-8xs border border-solid border-silver-100 px-5 pb-[11px] pt-3.5">
                    <div className="relative box-border hidden h-[50px] w-[280px] rounded-8xs border border-solid border-silver-100" />
                    <input
                      className="relative z-[1] inline-block w-11 bg-transparent p-0 text-left font-source-sans-pro text-mini text-darkgray [border:none] [outline:none]"
                      placeholder="Search"
                      type="text"
                    />
                  </div>
                </div>
                <div className="relative size-[50px] rounded-8xs bg-gray-200">
                  <div className="absolute left-0 top-0 hidden size-full rounded-8xs bg-gray-200" />
                  <img
                    className="absolute left-[15px] top-[15px] z-[1] size-5 object-contain cursor-pointer"
                    loading="lazy"
                    alt="Filter"
                    src="/vector-2.svg"
                    onClick={() => setFilterOpen(!filterOpen)} // Toggles the dropdown visibility
                  />
                  {filterOpen && (
                    <div
                      className="absolute left-0 mt-2 bg-white border rounded-md shadow-md"
                      style={{
                        marginTop: "25px",
                        marginLeft: "10px",
                        width: "200px",
                        backgroundColor: "#2F303C"
                      }}
                    >
                      <div className="p-2">
                        <span
                          className="block cursor-pointer"
                          onClick={() => {
                            setFilterRole("Admin");
                            setFilterOpen(false);
                          }}
                        >
                          Admin
                        </span>
                        <span
                          className="block cursor-pointer"
                          onClick={() => {
                            setFilterRole("Employee");
                            setFilterOpen(false);
                          }}
                        >
                          Employee
                        </span>
                        <span
                          className="block cursor-pointer"
                          onClick={() => {
                            setFilterRole("");
                            setFilterOpen(false);
                          }} // Corrected arrow function syntax
                        >
                          All
                        </span>
                      </div>
                    </div>
                  )}
                </div>
                <div className="relative size-[50px] rounded-8xs bg-gray-200">
                  <div className="absolute left-0 top-0 hidden size-full rounded-8xs bg-gray-200" />
                  <img
                    className="absolute left-[15px] top-[17px] z-[1] h-4 w-[19px]"
                    loading="lazy"
                    alt=""
                    src="/vector-3.svg"
                  />
                </div>
              </div>
              <button
                className="flex cursor-pointer flex-row items-start justify-start rounded-8xs bg-darkslateblue px-[23px] py-4 [border:none] hover:bg-cornflowerblue-200"
                //onClick={onGroupButtonClick}
                onClick={handleOpen}
              >
                <div className="relative hidden h-[50px] w-[151px] rounded-8xs bg-darkslateblue" />
                <a className="relative z-[1] inline-block min-w-[106px] flex-1 text-center font-inter text-mini font-semibold text-white [text-decoration:none]">
                  Add Employee
                </a>
              </button>
            </div>
            <div className="box-border flex max-w-full flex-col items-start justify-start gap-[13px] self-stretch rounded-md bg-white px-0 pb-[544px] pt-6 mq850:box-border mq850:pb-[354px] mq850:pt-5 mq450:box-border mq450:pb-[230px]">
              <div className="relative hidden h-[813px] self-stretch rounded-md bg-white" />
              <div className="box-border flex w-[1517px] max-w-full flex-row items-start justify-center px-5 pb-2.5 pt-0">
                <div className="flex w-[1315px] max-w-full flex-row items-start justify-between gap-5 mq1225:flex-wrap">
                  <a className="relative z-[1] font-semibold text-[inherit] [text-decoration:none]">
                    Employee Name
                  </a>
                  <div className="box-border flex w-[199px] flex-col items-start justify-start py-0 pl-0 pr-5">
                    <a className="relative z-[1] font-semibold text-[inherit] [text-decoration:none]">
                      Email
                    </a>
                  </div>
                  <div className="flex w-[556px] max-w-full flex-row items-start justify-start gap-[169px] mq850:flex-wrap mq850:gap-[84px] mq450:gap-[42px]">
                    <div className="box-border flex w-[103px] flex-col items-start justify-start py-0 pl-0 pr-5">
                      <div className="relative z-[1] font-semibold">Role</div>
                    </div>
                    <div className="relative z-[1] inline-block min-w-[45px] font-semibold">
                      Status
                    </div>
                    <div className="relative z-[1] inline-block min-w-[72px] font-semibold">
                      Last Login
                    </div>
                  </div>
                </div>
              </div>
              <img
                className="relative z-[1] max-h-full max-w-full self-stretch overflow-hidden rounded-12xs"
                loading="lazy"
                alt=""
                src="/vector-7.svg"
              />
              <div className="box-border flex max-w-full flex-col items-start justify-start gap-[14.2px] self-stretch px-0 pb-px pt-0 text-sm text-gray-200">
                <div className="box-border flex max-w-full flex-col items-start justify-start gap-[13px] self-stretch rounded-md bg-white px-0 pb-[20px] pt-6">
                  <div className="box-border flex max-w-full flex-col items-start justify-start gap-[14.2px] self-stretch px-0 pb-px pt-0 text-sm text-gray-200">
                    {loading ? (
                      <p>Loading...</p>
                    ) : (
                      employees
                        .filter((employee) =>
                          filterRole ? employee.role === filterRole : true
                        ) // Apply filter
                        .map((employee) => (
                          <div
                            key={employee._id}
                            className="box-border flex max-w-full flex-row items-start justify-start px-5 py-2 border-b border-gray-300"
                          >
                            <div className="flex flex-row items-start justify-start gap-[20px]">
                              <div className="relative size-[39px]">
                                <div className="absolute left-0 top-0 z-[1] size-full rounded-[50%] bg-whitesmoke-100" />
                                <img
                                  className="absolute left-[12px] top-[11px] z-[2] h-[17.5px] w-[15px]"
                                  loading="lazy"
                                  alt=""
                                  src="/about.svg"
                                />
                              </div>
                              <div className="box-border flex w-[240px] flex-col items-start justify-start pb-0 pl-0 pr-5 pt-[11px]">
                                <a className="relative z-[1] inline-block min-w-[75px] text-[inherit] [text-decoration:none]">
                                  {employee.name}
                                </a>
                              </div>
                              <div className="box-border flex w-[321px] max-w-full flex-col items-start justify-start pb-0 pl-0 pr-5 pt-2.5">
                                <div className="relative z-[1]">
                                  {employee.email}
                                </div>
                              </div>
                              <div className="box-border flex w-[230px] flex-col items-start justify-start pb-0 pl-0 pr-5 pt-[5px] text-sm">
                                <a className="relative z-[1] inline-block min-w-[60px] text-[inherit] [text-decoration:none ]">
                                  {employee.role}
                                </a>
                              </div>
                              <div className="box-border flex w-[150px] flex-col items-start justify-start pb-0 pl-0 pr-5 pt-[5px] text-sm">
                                <a className="relative z-[1] inline-block min-w-[60px] text-[inherit] [text-decoration:none]">
                                  {employee.status}
                                </a>
                              </div>
                            </div>
                          </div>
                        ))
                    )}
                  </div>
                </div>
                <img
                  className="relative z-[1] max-h-full max-w-full self-stretch overflow-hidden rounded-12xs"
                  alt=""
                  src="/vector-7.svg"
                />
              </div>
            </div>
            <footer className="flex max-w-full flex-row flex-wrap content-start items-start justify-start gap-[7px] self-stretch text-center font-source-sans-pro text-sm text-darkslateblue">
              <div className="flex min-w-[871px] max-w-full flex-1 flex-col items-start justify-start text-left text-base text-darkgray mq1225:min-w-full">
                <div className="box-border flex h-[30px] flex-row items-start justify-start gap-5 rounded-8xs border border-solid border-silver-100 pb-px pl-[7px] pr-[5px] pt-[3px]">
                  <div className="relative box-border hidden h-[30px] w-[110px] rounded-8xs border border-solid border-silver-100" />
                  <div className="relative z-[1] inline-block min-w-[40px] font-semibold">
                    Show
                  </div>
                  <div className="flex flex-col items-start justify-start px-0 pb-0 pt-px text-mini text-darkslateblue">
                    <div className="flex flex-row items-start justify-start gap-[9px]">
                      <div className="relative z-[1] inline-block min-w-[17px] font-semibold">
                        10
                      </div>
                      <div className="flex flex-col items-start justify-start px-0 pb-0 pt-1.5">
                        <img
                          className="relative z-[1] h-1.5 w-[10.5px] object-contain"
                          alt=""
                          src="/vector-4.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start px-0 pb-0 pt-[9.8px]">
                <img
                  className="relative h-[8.2px] w-[11px] object-contain"
                  loading="lazy"
                  alt=""
                  src="/group@2x.png"
                />
              </div>
              <div className="box-border flex w-[81px] flex-col items-start justify-start px-0 pb-0 pt-[5px] text-left">
                <div className="flex flex-row items-start justify-between gap-5 self-stretch">
                  <div className="flex flex-col items-start justify-start px-0 pb-0 pt-px">
                    <div className="relative inline-block min-w-[28px]">
                      prev
                    </div>
                  </div>
                  <div className="flex w-5 flex-row items-start justify-start bg-darkslateblue text-center text-white">
                    <div className="relative hidden size-5 bg-darkslateblue" />
                    <div className="relative z-[1] flex-1">1</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start px-0 pb-0 pt-[5px]">
                <div className="relative inline-block w-[21px]">2</div>
              </div>
              <div className="flex flex-col items-start justify-start px-0 pb-0 pt-[5px]">
                <div className="relative inline-block w-[21px]">3</div>
              </div>
              <div className="flex flex-col items-start justify-start px-0 pb-0 pt-[5px]">
                <div className="relative inline-block w-[21px]">4</div>
              </div>
              <div className="box-border flex w-[35px] flex-col items-start justify-start pb-0 pl-0 pr-3.5 pt-[5px]">
                <div className="relative self-stretch">5</div>
              </div>
              <div className="flex flex-col items-start justify-start px-0 pb-0 pt-1.5 text-right">
                <div className="relative inline-block w-[27px]">next</div>
              </div>
              <div className="flex flex-col items-start justify-start px-0 pb-0 pt-[9.8px]">
                <img
                  className="relative h-[8.2px] w-[11px]"
                  loading="lazy"
                  alt=""
                  src="/group-1.svg"
                />
              </div>
            </footer>
          </div>
          <img
            className="absolute left-[208px] top-[-104px] !m-0 h-[1098px] w-px rounded-12xs"
            loading="lazy"
            alt=""
            src="/vector-18.svg"
          />
        </section>
      </main>
      {/* Modal Dialog */}
      <Dialog open={open} onClose={handleClose}>
        <div className="relative">
          {/* Cross Button */}
          <img
            className="absolute right-2 top-2 z-[1] size-[22px] cursor-pointer"
            loading="lazy"
            alt="Close"
            src="../public/group-3368.png" // Path to your cross icon
            onClick={handleClose} // Function to close the modal
          />

          <DialogTitle>
            <a className="relative z-[1] inline-block min-w-[102px] font-bold text-[inherit] [text-decoration:none]">
              Add Employee
            </a>
            <div className="relative z-[1] font-inter text-sm text-darkgray">
              Employee will receive an email to setup their account
            </div>
          </DialogTitle>

          <DialogContent>
            <a
              className="relative z-[1] text-[inherit] [text-decoration:none]"
              style={{
                fontFamily: "Source Sans Pro",
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "22.11px",
                textAlign: "left",
                textUnderlinePosition: "from-font",
                textDecorationSkipInk: "none"
              }}
            >
              Employee Name
            </a>
            <div
              className="z-[1] box-border flex h-[50px] max-w-full flex-row items-start justify-start self-stretch rounded-8xs border border-solid border-silver-200 px-5 pb-[11px] pt-3.5"
              style={{ paddingBottom: "10px" }}
            >
              <input
                className="text-gainsboro relative z-[2] inline-block w-[65px] bg-transparent p-0 text-left font-source-sans-pro text-mini [border:none] [outline:none]"
                placeholder="Full Name"
                type="text"
                value={employeeName}
                onChange={(e) => setEmployeeName(e.target.value)}
              />
            </div>
            <div className="flex h-[75px] max-w-full flex-col items-start justify-start gap-[5px] self-stretch">
              <a
                className="relative z-[1] text-[inherit] [text-decoration:none]"
                style={{
                  fontFamily: "Source Sans Pro",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "20.11px",
                  textAlign: "left",
                  textUnderlinePosition: "from-font",
                  textDecorationSkipInk: "none",
                  paddingTop: "20px"
                }}
              >
                Email
              </a>
              <div className="z-[1] box-border flex max-w-full flex-1 flex-row items-start justify-start self-stretch rounded-8xs border border-solid border-silver-200 px-5 pb-[11px] pt-3.5">
                <input
                  className="text-gainsboro relative z-[2] inline-block w-[65px] bg-transparent p-0 text-left font-source-sans-pro text-mini [border:none] [outline:none]"
                  placeholder="Add Email"
                  type="text"
                  value={employeeEmail}
                  onChange={(e) => setEmployeeEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="box-border flex max-w-full flex-col items-start justify-start gap-[5px] self-stretch px-0 pb-[22px] pt-0">
              <div
                className="relative z-[1]"
                style={{
                  fontFamily: "Source Sans Pro",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "20.11px",
                  textAlign: "left",
                  textUnderlinePosition: "from-font",
                  textDecorationSkipInk: "none",
                  paddingTop: "40px"
                }}
              >
                Role
              </div>
              <FormControl
                className="z-[1] h-[50px] max-w-full self-stretch font-source-sans-pro text-mini text-darkslategray"
                variant="standard"
                sx={{
                  borderRadius: "0px",
                  width: "465px",
                  height: "50px",
                  m: 0,
                  p: 0,
                  "& .MuiInputBase-root": {
                    m: 0,
                    p: 0,
                    minHeight: "50px",
                    justifyContent: "center",
                    display: "inline-flex",
                    border: "1px solid #3f51b5",
                    borderRadius: "4px"
                  },
                  "& .MuiInputLabel-root": {
                    m: 0,
                    p: 0,
                    minHeight: "50px",
                    display: "inline-flex"
                  },
                  "& .MuiSelect-select": {
                    m: 0,
                    p: 0,
                    height: "50px",
                    alignItems: "center",
                    display: "inline-flex"
                  },
                  "& .MuiInput-input": { m: 0, p: 0 },
                  "& .MuiInputBase-input": {
                    textAlign: "left",
                    p: "0 !important"
                  }
                }}
              >
                <InputLabel color="primary" />
                <Select color="primary" disableUnderline displayEmpty>
                  <MenuItem value="Admin">Admin</MenuItem>
                  <MenuItem value="Employee">Employee</MenuItem>
                </Select>
              </FormControl>
            </div>
          </DialogContent>
          {/* Add Button */}
          <div className="flex justify-end p-4">
            <button
              className="hover:bg-silver-300 relative z-[1] translate-x-[-190px] translate-y-[-8px] transform rounded-md bg-silver-200 px-[40px] py-3 font-medium text-white"
              onClick={(handleSubmit, handleClose)}
            >
              Add
            </button>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default Employees;
