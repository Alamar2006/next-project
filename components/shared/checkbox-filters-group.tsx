'use client'

import React from 'react'
import { FilterCheckbox, FilterCheckboxProps } from './filter-checkbox'
import { Input } from '../ui/input'
import { Button } from '../ui'


interface Props {
    title: string
    items: FilterCheckboxProps[]
    defaultItems: FilterCheckboxProps[]
    onChange?: (values: string[]) => void
    className?: string
    limit?: number
    searchInputPlaceholder?: string
    defaultValue?: string[]
    endAdornment?: React.ReactNode
    onCheckedChange?: (checked: boolean) => void
    checked?: boolean
}

const CheckBoxFiltersGroup: React.FC<Props> = (
    {
    title,
    items,
    defaultItems,
    limit = 5,
    searchInputPlaceholder = 'Поиск...',
    className,
    onChange,
    defaultValue,
    endAdornment,
    onCheckedChange,
    checked
}
) => {

    const [showAll, setShowAll] = React.useState(false)

    const [searchValue, setSearchValue] = React.useState('')

    const list = showAll ? items.filter((item) => item.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())) : defaultItems?.slice(0, limit)

    const onChangeSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value) 
        // обьект создался во время напечатывания пользователем текста в value
    }

  return (
    <div className={className} >
        <p className='font-bold mb-3'>{title}</p>
  
        {/* Search */}

        {showAll && (
            <div>
            <Input value={searchValue} onChange={onChangeSearchInput} placeholder={searchInputPlaceholder} className='bg-gray-50 border-none mb-3 ' />
        </div>
        )}

        {/* List */}

        <div className='flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar' >
            {list.map((item, index) => <FilterCheckbox
                key={index}
                text={item.text}
                value={item.value}
                endAdornment={item.endAdornment}
                checked={checked}
                onCheckedChange={onCheckedChange}
            />)
            }
        </div>

        {items.length > limit && (
            <div >
                <Button onClick={() => setShowAll(!showAll)} className='text-primary mt-3 text-white cursor-pointer' >
                    {showAll ? `- Hide all` : `+ Show all`}
                </Button>
                
            </div>
        )}

    </div>
  )
}

export default CheckBoxFiltersGroup 