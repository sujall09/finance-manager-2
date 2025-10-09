import { useState } from "react";
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";
import { AiOutlineRise, AiOutlineFall } from "react-icons/ai";
import { MdOutlineSavings } from "react-icons/md";


function DashboardMain() {
    const [showBalance, setShowBalance] = useState(true)

    return (
        <div className='w-full py-2 space-y-6'>
            {/* Heading and Buttons */}
            <div className='flex justify-between items-center'>
                <div>
                    <h1 className='text-2xl text-gray-900 mb-1'>Dashboard</h1>
                    <p className='text-gray-600'>Overview of your financial activity</p>
                </div>
                <div className='flex gap-3'>
                    <button
                        type="submit"
                        onClick={() => setShowBalance(!showBalance)}
                        className="w-full whitespace-nowrap px-4 py-2 inline-flex items-center justify-center gap-2 cursor-pointer border border-gray-200 text-gray-700 bg-white hover:bg-gray-50 rounded-md text-sm transition-all"
                    >
                        {
                            showBalance ? <><FaEyeSlash /> Hide </> : <><IoEyeSharp /> Show </>
                        }
                        Balances
                    </button>
                    <button
                        type="submit"
                        className="w-full whitespace-nowrap px-4 py-2 inline-flex items-center justify-center gap-2 cursor-pointer bg-green-600 font-medium text-white rounded-md text-sm  hover:bg-green-700 transition-all"
                    >
                        + Add Transaction
                    </button>
                </div>
            </div>

            {/* cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* Income card */}
                <div className="flex flex-col gap-6 rounded-xl border-0 shadow-sm bg-gradient-to-br from-green-50 to-green-100">
                    <div className="auto-rows-min grid-rows-[auto_auto] gap-1.5 px-6 pt-6 flex flex-row items-center justify-between space-y-0 pb-2">
                        <h4 className="text-sm text-green-800">Total Income</h4>
                        <AiOutlineRise size={20} color="var(--color-green-800)" />
                    </div>
                    <div className="px-6 pb-6">
                        <div className="text-lg text-green-900 mb-1">
                            {
                                showBalance ? <>$8,500.00</> : <>••••••</>
                            }
                        </div>
                        <p className="text-xs text-green-700">+12% from last month</p>
                    </div>
                </div>

                {/* Expense Card  */}
                <div className="flex flex-col gap-6 rounded-xl border-0 shadow-sm bg-gradient-to-br from-red-50 to-red-100">
                    <div className="auto-rows-min grid-rows-[auto_auto] gap-1.5 px-6 pt-6 flex flex-row items-center justify-between space-y-0 pb-2">
                        <h4 className="text-sm text-red-800">Total Expense</h4>
                        <AiOutlineFall size={20} color="var(--color-red-800)" />
                    </div>
                    <div className="px-6 pb-6">
                        <div className="text-lg text-red-900 mb-1">
                            {
                                showBalance ? <>$3,500.00</> : <>••••••</>
                            }
                        </div>
                        <p className="text-xs text-red-700">+8% from last month</p>
                    </div>
                </div>

                {/* Savings Card  */}
                <div className="flex flex-col gap-6 rounded-xl border-0 shadow-sm bg-gradient-to-br from-blue-50 to-blue-100">
                    <div className="auto-rows-min grid-rows-[auto_auto] gap-1.5 px-6 pt-6 flex flex-row items-center justify-between space-y-0 pb-2">
                        <h4 className="text-sm text-blue-800">Total Income</h4>
                        <MdOutlineSavings size={20} color="var(--color-blue-800)" />
                    </div>
                    <div className="px-6 pb-6">
                        <div className="text-lg text-blue-900 mb-1">
                            {
                                showBalance ? <>$2,500.00</> : <>••••••</>
                            }
                        </div>
                        <p className="text-xs text-blue-700">+6% from last month</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardMain
