import ReactMarkdown from 'react-markdown'
import matter from 'gray-matter';
import { useEffect } from 'react';
import { useRouter } from 'next/router'

import Select from 'react-select';

const gfm = require('remark-gfm')


const forwardOptions = [];

const tags = [];

const theme = theme => ({
    ...theme,
    colors: {
        ...theme.colors,
        primary: 'red',
        primary25: '#ffebeb',
    }
})

export default function Browse() {
    const router = useRouter()

    useEffect(() => {
        const searchIndex = require("../public/source/indxtable.html").default;
        searchIndex.split("\n").map((str) => {
            let results = /value=['"](.*)\/(.*?).html['"]>(.*?)</.exec(str);
            if (results) {
                forwardOptions.push({value: results[1]+"/"+results[2], label: results[3]})
                tags.push({value: results[1]+"/"+results[2], label: results[2]})
            }
        });
    }, []);

    return (
        <>
            <div className="flex items-center justify-center m-4">
                <div className="w-full max-w-md mt-5 mr-5">
                    <h1 className="inline-block mr-3 cursor-pointer" onClick={()=>router.push("/")}>Taproot</h1>
                    <h2 className="inline-block mr-3">Browse</h2>
                    <h2>Hoppity Hop</h2>
                    <div className="mb-2"> 
                        <Select options={forwardOptions} theme={theme} placeholder="Search by name (title)" onChange={(result) => {
                            router.push(result.value);
                        }} />
                    </div>
                    <div>
                        <Select options={tags} theme={theme} placeholder="Search by tag (KB)" onChange={(result) => {
                            router.push(result.value);
                        }} />
                    </div>
                    <h2 className="mt-3">Master Indexes</h2>
                    <div onClick={()=>router.push("2020MATH401/KBCalculusMasterIndex")} className="master-index">Calculus</div>
                    <div onClick={()=>router.push("2020PHYS201/KBPhysicsMasterIndex")} className="master-index">Physics</div>
                    <div onClick={()=>router.push("2020BIO101/KBBiologyMasterIndex")} className="master-index">Biology</div>
                    <div onClick={()=>router.push("2020MATH530/KBe2020math530index")} className="master-index">Linear Algebra</div>
                    <div onClick={()=>router.push("2020HIST201/KBHistoryMasterIndex")} className="master-index">History</div>
                    <div onClick={()=>router.push("2020ENG201/KBEnglishMasterIndex")} className="master-index">English</div>
                    <div onClick={()=>router.push("2020ISOS101/KBISOSMasterIndex")} className="master-index">ISOS</div>
                    <div onClick={()=>router.push("2020SPAN301/KB20200824124831")} className="master-index">Spanish</div>
                </div>
            </div>

        </>
    )
}
