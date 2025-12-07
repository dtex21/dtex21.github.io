import { useState } from 'react'
import { DownloadOutlined, UndoOutlined, MinusCircleOutlined, PlusCircleOutlined, LoadingOutlined } from '@ant-design/icons'
import { createTooltip, IFunctionalIcon } from '../utils'
import { pdfjs, Document, Page } from 'react-pdf'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'
import './cv.css'
import '../utils.css'

pdfjs.GlobalWorkerOptions.workerSrc = new URL('pdfjs-dist/build/pdf.worker.min.mjs', import.meta.url,).toString()

const defaultPDFScale = 1.5
const pdfScaleStep = 0.1
const pdfScaleUpperLimit = 2.2
const pdfScaleLowerLimit = 0.8

const CV = () => {
    const [scale, setScale] = useState<number>(defaultPDFScale)

    const handleScaleSetting = (action?: string, currentPDFScale?: number) => {
        const scale = currentPDFScale ?? defaultPDFScale
        switch(action) {
            case pdfToolsArray[0].title: 
                setScale(scale < pdfScaleUpperLimit ? scale + pdfScaleStep : pdfScaleUpperLimit)
                break
            case pdfToolsArray[1].title: 
                setScale(scale > pdfScaleLowerLimit ? scale - pdfScaleStep : pdfScaleLowerLimit)
                break
            default: 
                setScale(defaultPDFScale)
        }
    }

    const pdfToolsArray: IFunctionalIcon[] = [
        {title: "Zoom In", content: <PlusCircleOutlined className="functional-icon" onClick={() => handleScaleSetting(pdfToolsArray[0].title, scale)}/>},
        {title: "Zoom Out", content: <MinusCircleOutlined className="functional-icon" onClick={() => handleScaleSetting(pdfToolsArray[1].title, scale)}/>},
        {title: "Reset Zoom", content: <UndoOutlined className="functional-icon" onClick={() => handleScaleSetting()}/>},
        {title: "Download", content: <a href="tselas_cv_2025.pdf" download={true} style={{color: "black"}}><DownloadOutlined className="functional-icon" /></a>},
    ]

    return (
        <div className="pdfLayout">
            <div className="pdfTools">
                {pdfToolsArray.map((tool) => createTooltip(tool))}
            </div>
            <div className="pdfViewport">
                <Document file={"tselas_cv_2025.pdf"} loading={<LoadingOutlined />} scale={scale}>
                    <Page pageNumber={1} />
                </Document>
            </div>
        </div>
    )
}

export default CV;