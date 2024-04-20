'use client'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "./ui/select"
import { Button } from "./ui/button"
import { useState } from 'react';



export default function Translator() {
    const [req, setReq] = useState({
        source_code : '',
        source_lang : '',
        target_lang : ''
    })
    const [res, setRes] = useState('')

    const handleSourceLang = (lang : string) =>{
        setReq({
            ...req,
            source_lang : lang
        })
    }
    const handleTargetLang = (lang : string) =>{
        setReq({
            ...req,
            target_lang : lang
        })
    }
    const handleSourceCode = (event : React.ChangeEvent<HTMLTextAreaElement>) =>{
        setReq({
            ...req,
            source_code : JSON.stringify(event.target.value)
        })
    }

    const handleTranslate = async() =>{
        const response = await fetch('http://127.0.0.1:5000/translate', {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(req)
        })
        const translation = await response.json()
        setRes(JSON.parse(translation.translated_code))
    }





    return (
        <section className="flex justify-center mt-10 w-full h-screen space-x-6">
            <div className=" h-2/4 w-2/6">
                <Select  onValueChange={handleSourceLang} >
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a language" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Supported languages</SelectLabel>
                            <SelectItem value="English">English</SelectItem>
                            <SelectItem value="Spanish">Spanish</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
                <textarea  onChange={handleSourceCode} className=" border-black border mt-5 w-full h-full rounded-xl"></textarea>
            </div>

            <div className="h-2/4 w-2/6  ">
            <Select onValueChange={handleTargetLang}>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a language" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Supported languages</SelectLabel>
                            <SelectItem value="English">English</SelectItem>
                            <SelectItem value="Spanish">Spanish</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
                <div className="rounded-xl  w-full h-full  mt-5  border border-black">
                       {res}
                </div>
            </div>
            <Button onClick={handleTranslate} variant="outline">Button</Button>

        </section>
    )
}