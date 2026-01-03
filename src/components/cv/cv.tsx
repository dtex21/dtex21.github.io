import { useContext, useState } from 'react'
import { DownloadOutlined, UndoOutlined, MinusCircleOutlined, PlusCircleOutlined, LoadingOutlined } from '@ant-design/icons'
import { createTooltip, IFunctionalIcon } from '../utils'
import { pdfjs, Document, Page } from 'react-pdf'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'
import './cv.css'
import '../utils.css'
import { LanguageContext, translate } from '../../translation/helper'

pdfjs.GlobalWorkerOptions.workerSrc = new URL('pdfjs-dist/build/pdf.worker.min.mjs', import.meta.url,).toString()

const defaultPDFScale = 1.5
const pdfScaleStep = 0.1
const pdfScaleUpperLimit = 2.2
const pdfScaleLowerLimit = 0.8

const CV = () => {
    const context = useContext(LanguageContext)
    const [scale, setScale] = useState<number>(defaultPDFScale)

    const handleScaleSetting = (action?: string, currentPDFScale?: number) => {
        const scale = currentPDFScale ?? defaultPDFScale
        switch(action) {
            case pdfToolsArray[0].id:
                setScale(scale < pdfScaleUpperLimit ? scale + pdfScaleStep : pdfScaleUpperLimit)
                break
            case pdfToolsArray[1].id: 
                setScale(scale > pdfScaleLowerLimit ? scale - pdfScaleStep : pdfScaleLowerLimit)
                break
            default: 
                setScale(defaultPDFScale)
        }
    }

    const translatedCV = "tselas_cv_" + context.language + ".pdf"

    const pdfToolsArray: IFunctionalIcon[] = [
        {
            id: "zoomIn",
            title: translate('cv.zoomIn', context.language),
            content: <PlusCircleOutlined className="functional-icon" onClick={() => handleScaleSetting(pdfToolsArray[0].id, scale)}/>
        },
        {
            id: "zoomOut",
            title: translate('cv.zoomOut', context.language),
            content: <MinusCircleOutlined className="functional-icon" onClick={() => handleScaleSetting(pdfToolsArray[1].id, scale)}/>
        },
        {
            id: "resetZoom",
            title: translate('cv.resetZoom', context.language),
            content: <UndoOutlined className="functional-icon" onClick={() => handleScaleSetting()}/>
        },
        {
            id: "download",
            title: translate('cv.download', context.language),
            content: <a href={translatedCV} download={true} style={{color: "black"}}><DownloadOutlined className="functional-icon" /></a>
        },
    ]

    return (
        <div className="pdfLayout">
            <div className="pdfTools">
                {pdfToolsArray.map((tool) => createTooltip(tool))}
            </div>
            <div className="pdfViewport">
                <Document file={translatedCV} loading={<LoadingOutlined />} scale={scale}>
                    <Page pageNumber={1} />
                </Document>
            </div>
        </div>
    )
}

export default CV;