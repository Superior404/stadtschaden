import React, { useState } from 'react'
import Dropdown from "../Components/Dropdown";
import { statusCategories } from "../StatusCategorys";

const StaffSingelTicket = () => {
    const [status, setStatus] = useState("All");

    const test = () => {
        let index = document.cookie.indexOf('test_cookie=')
        console.log("cookie index", index)

        const date = new Date();

        // Set it expire in 7 days
        date.setTime(date.getTime() + (7 * 24 * 60 * 60 * 1000));
        document.cookie = "test_cookie" + "=" + "1234" + "; expires=" + date.toUTCString() + "; path=/";

        console.log("cookie was set")

        index = document.cookie.indexOf('test_cookie=')

        console.log("cookie index", index)

    }

    const test2 =() => {
        let index = document.cookie.indexOf('test_cookie=')
        console.log("cookie index", index)
    }

    const test3 =() => {
        let index = document.cookie.indexOf('test_cookie=')
        console.log("cookie index", index)

        const date = new Date();

        // Set it expire in -1 days
        date.setTime(date.getTime() + (-1 * 24 * 60 * 60 * 1000));

        // Set it
        document.cookie = "test_cookie" + "=; expires=" + date.toUTCString() + "; path=/";

        index = document.cookie.indexOf('test_cookie=')
        console.log("cookie index", index)
    }

    return (
        <div>
            <div className=" flex flex-wrap bg-midlightgray shadow-2xl p-6 rounded-3xl mx-20 my-14 justify-between justify-items-center">
                <button className='rounded-3xl  bg-darkgray w-40 h-12 m-2 text-white  font-primary'>
                    Accept
                </button>

                <Dropdown name="status"
                    hight={12}
                    with={52}
                    options={
                        statusCategories.map(

                            (category) => category.category,
                        )
                    }
                    value={status}
                    onChange={(selected: string) => setStatus(selected)}
                />

                <button
                    className='rounded-3xl  bg-darkgray w-40 h-12 m-2 text-white  font-primary'>
                    save
                </button>

                <button
                    onClick={test}>
                    test
                </button>

                <button
                    onClick={test2}>
                    test2
                </button>

                <button
                    onClick={test3}>
                    test3
                </button>
            </div>

            <div className="bg-midlightgray shadow-2xl p-20 rounded-3xl mx-20">

            </div>

        </div>
    )
}

export default StaffSingelTicket