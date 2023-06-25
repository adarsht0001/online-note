import React, { useState } from 'react'

function Card() {
    const [edit, setEdit] = useState(true)
    return (
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <textarea id="multi-line-input" aria-label="multi-line input" cols="30"
                rows="10" className="m-1 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" disabled={edit} readOnly={edit}>
                Disabled readonly multi-line input
            </textarea>
            <div className='flex-row text-center p-4'>
                <button type="button" className="p-3 m-4 px-4 inline-flex justify-center items-center gap-2 rounded-md border-2 border-blue-200 font-semibold text-blue-500 hover:text-white hover:bg-blue-500 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                    onClick={() => {
                        setEdit(false)
                    }}
                >
                    Edit
                </button>
                <button type="button" className=" m-4 p-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border-2 border-blue-200 font-semibold text-blue-500 hover:text-white hover:bg-blue-500 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
                    Delete
                </button>
            </div>
        </div>

    )
}

export default Card