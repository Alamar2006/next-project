import { cn } from "@/lib/utils"
import React from "react"
import { FilterCheckbox } from "./filter-checkbox"
import { Input } from "../ui"
import { Slider } from "../ui/slider"
import CheckBoxFiltersGroup from "./checkbox-filters-group"

interface Props {
    className?: string
}

export const Filters: React.FC<Props> = ( {className} ) => {
    return (
        <div>
            <h1 className="mb-5 font-bold size-3 ">Фильтрация</h1>


            {/* Checkboxes */}
            <div className="flex flex-col gap-4" >
                <FilterCheckbox text='Can give' value='filter-1' />
                <FilterCheckbox text='Ты тут?' value='filter-2' />
            </div>

            {/* Price */}
            <div className="mt-5 border-y py-6 pb-7 border-y-neutral-100 "  >
                <p className="mb-3 font-bold ">Price от и до:</p>
                <div className="flex gap-3 mb-5" >
                    <Input type="number" placeholder="0" min={0} max={30000} defaultValue={0} />
                    <Input type="number" placeholder="30000" min={100} max={30000} defaultValue={0}/>
                </div>
                <Slider/>
            </div>

            {/* List */}

            <CheckBoxFiltersGroup
            title="Курсовые"
            className="mt-5"
            limit={5}
            defaultItems={[
                {text:'Курсовая1', value:'i1'}, {text:'Курсовая2', value:'i2'}, {text: 'Курсовая3', value: 'i3'},
            ]}
            items={[
                {text:'Курсовая1', value:'i1'}, {text:'Курсовая2', value:'i2'}, {text: 'Курсовая3', value: 'i3'},
                {text:'АААА???', value:'i4'}, {text:'Ляяяя', value:'i5'}, {text: 'гиг и', value: 'i6'},
                {text:'Курва че как?', value:'i7'}, {text:'Чечен', value:'i8'}, {text: 'Курсовая3', value: 'i9'},
                {text:'Ты меня провоцируешь?', value:'i10'}, {text:'Бабиджон', value:'i11'}, {text: 'Як маш на имея', value: 'i12'},
            ]}
            />

        </div>
    )
}