import React from 'react'
import "./MainBody.css"

import { IoDocumentText } from "react-icons/io5";
import BarChart from './Chart/BarChart';


type Props = {}

function MainBody({ }: Props) {
    return (
        <div className='pt-5'>
            <div className=' pl-20'>
                <h1 className='text-4xl font-bold'>Dashboard</h1>
                <p>Information about your current plan and usages</p>
            </div>

            <div className='board ml-20 mt-10'>
                <ul className='pt-5 flex gap-5'>
                    <li className='pl-10 flex' >
                        <div className='icon'>
                        
                        <IoDocumentText
                    className=' ml-4 mt-4' 
                    color='#ff6a00'
                    size={25}/>
                        </div>
                        <div className='pl-4'>
                            <h1>projects</h1>
                            <h1 className=' font-bold text-lg'>3</h1>
                        </div>
                    
                    </li>

                    <li className='pl-10 flex' >
                        <div className='icon-1'>
                        
                        <IoDocumentText
                    className=' ml-4 mt-4' 
                    color='#ff6a00'
                    size={25}/>
                        </div>
                        <div className='pl-4'>
                            <h1>projects</h1>
                            <h1 className=' font-bold text-lg'>3</h1>
                        </div>
                    
                    </li>

                    <li className='pl-10 flex' >
                        <div className='icon-2'>
                        
                        <IoDocumentText
                    className=' ml-4 mt-4' 
                    color='#ff6a00'
                    size={25}/>
                        </div>
                        <div className='pl-4'>
                            <h1>projects</h1>
                            <h1 className=' font-bold text-lg'>3</h1>
                        </div>
                    
                    </li>

                    <li className='pl-10 flex' >
                        <div className='icon-3'>
                        
                        <IoDocumentText
                    className=' ml-4 mt-4' 
                    color='#ff6a00'
                    size={25}/>
                        </div>
                        <div className='pl-4'>
                            <h1>projects</h1>
                            <h1 className=' font-bold text-lg'>3</h1>
                        </div>
                    
                    </li>
                </ul>
            </div>

            <div className='chart'>
                    <div>
                        <BarChart/>
                    </div>
            </div>

        </div>
    )
}

export default MainBody