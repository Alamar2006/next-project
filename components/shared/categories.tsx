import { cn } from "@/lib/utils"
import React from "react"

interface Props {
    className?: string
}

const staff = ['Курсовые', 'Дипломные', 'Рефераты', 'Проекты', 'Другое']
const activeIndex = 1

export const Categories:React.FC<Props> = ({ className }) => {
    return (
        <div className={cn("inline-flex gap-1 rounded-2xl bg-gray-50", className)} >
            {
                staff.map((s, index) => (
                    <a className={cn("flex items-center font-bold h-11 rounded-2xl px-5", 
                        activeIndex === index && 'bg-white shadow-md shadow-gray-200 text-primary'
                    )} key={index}>
                        <button className="cursor-pointer">{s}</button>
                    </a>
                ))
            }
        </div>      
    )
}