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
import CodeSkeleton from "./ui/skeleton";



export default function Translator() {
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [req, setReq] = useState({
        source_code: '',
        source_lang: '',
        target_lang: ''
    });
    const [res, setRes] = useState('');
    const [copied, setCopied] = useState(false);
    const MAX_CODE_LENGTH = 3000;

    const handleSourceLang = (lang: string) => {
        setReq({
            ...req,
            source_lang: lang
        });
    };

    const handleTargetLang = (lang: string) => {
        setReq({
            ...req,
            target_lang: lang
        });
    };

    const handleSourceCode = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newSourceCode = event.target.value;
        setReq({
            ...req,
            source_code: newSourceCode
        });
        if (!newSourceCode.trim()) {
            setRes('');
        }
    };

    const handleTranslate = async () => {
        if (!req.source_code.trim()) {
            setError("Please enter a code in the textarea");
            return;
        }

        if (!/[{}();<></>]/.test(req.source_code)) {
            setError('The text entered doesn\'t look like code');
            return;
        }

        if (!req.source_lang || !req.target_lang) {
            setError('Select a source and a target language');
            return;
        }

        if (req.source_code.length > MAX_CODE_LENGTH) {
            setError(`The code is too long. Please reduce it to under ${MAX_CODE_LENGTH} characters.`);
            return;
        }

        setError('');
        setLoading(true);
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/translate`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(req)
            });

            if (response.ok) {
                const translation = await response.json();
                setRes(translation.translated_code);
            } else {
                setError("Failed to translate code. Please try again.");
            }
        } catch (error) {
            setError(`An error occurred: ${error}`);
        } finally {
            setLoading(false);
        }
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(res);
        setCopied(true);
    };

    return (
<section className="flex flex-col items-center mt-10  min-h-screen px-4 md:px-10">
            {error && <p className="text-red-500 text-center mb-2">{error}</p>}
            <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6 justify-center w-full mb-6">
                <div className="flex flex-col w-full md:w-2/6">
                    <Select onValueChange={handleSourceLang}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select a language" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Supported languages</SelectLabel>
                                <SelectItem value="English">English</SelectItem>
                                <SelectItem value="Spanish">Spanish</SelectItem>
                                <SelectItem value="German">German</SelectItem>
                                <SelectItem value="French">French</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    <textarea
                        placeholder="Enter here the code to translate"
                        onChange={handleSourceCode}
                        className="p-1 border-black border mt-5 w-full h-60 lg:h-96 rounded-xl resize-none"
                    ></textarea>
                    <div className={`text-sm mt-2 ${req.source_code.length > MAX_CODE_LENGTH ? 'text-red-500' : 'text-gray-600'}`}>
                        {req.source_code.length}/{MAX_CODE_LENGTH}
                    </div>
                </div>
                <div className="flex flex-col w-full md:w-2/6">
                    <Select onValueChange={handleTargetLang}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select a language" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Supported languages</SelectLabel>
                                <SelectItem value="English">English</SelectItem>
                                <SelectItem value="Spanish">Spanish</SelectItem>
                                <SelectItem value="German">German</SelectItem>
                                <SelectItem value="French">French</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    {loading ? (
                        <div className="mt-5 p-1 rounded-xl w-full h-60 lg:h-96 border border-black overflow-auto resize-none">
                                        <CodeSkeleton />
                        </div>
                    ) : (
                        <div className="relative mt-5">
                        <textarea
                            readOnly
                            value={res}
                            className="p-1 rounded-xl w-full h-60 lg:h-96 border border-black overflow-auto resize-none"
                            aria-label="Translated code"
                        ></textarea>
                        {res &&  <> {copied ? (
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="p-1 absolute top-1 right-1 icon icon-tabler icons-tabler-outline icon-tabler-check">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M5 12l5 5l10 -10" />
                                </svg>
                            ) : (
                                <svg onClick={handleCopy} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="p-1 absolute top-1 right-1 icon icon-tabler icons-tabler-outline icon-tabler-copy cursor-pointer hover:text-blue-500">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z" />
                                    <path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1" />
                                </svg>
                            )}</>}
                      
                    </div>
                    )}
                </div>
            </div>
            <Button onClick={handleTranslate} variant="outline" className="w-auto">Translate</Button>
        </section>
    );
    
}
