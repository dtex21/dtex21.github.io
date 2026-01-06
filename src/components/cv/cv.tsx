import { useContext, useState } from 'react'
import { DownloadOutlined, UndoOutlined, MinusCircleOutlined, PlusCircleOutlined, LoadingOutlined, InfoCircleOutlined } from '@ant-design/icons'
import { notification } from 'antd'
import { changeLanguageAnimationDelay, createTooltip, IFunctionalIcon } from '../utils'
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

    const handlePdfViewportTransitionStyle = () => {
        const pdfViewportDiv = document.getElementById('pdfViewport')
        pdfViewportDiv?.classList.toggle('show-pdfViewport')
        setTimeout(() => pdfViewportDiv?.classList.toggle('show-pdfViewport'), changeLanguageAnimationDelay)
    }

    const handleScaleSetting = (action?: string, currentPDFScale?: number) => {
        const scale = currentPDFScale ?? defaultPDFScale

        if(scale === pdfScaleUpperLimit && action === 'zoomIn') {
            notification.info({message: translate('cv.maxZoomLevel', context.language), icon: <InfoCircleOutlined />})
        }  
        else if(scale === pdfScaleLowerLimit && action === 'zoomOut') {
            notification.info({message: translate('cv.minZoomLevel', context.language), icon: <InfoCircleOutlined />})
        } 
        else {
            handlePdfViewportTransitionStyle()
            setTimeout(() => {
                    switch(action) {
                        case 'zoomIn':
                            scale < pdfScaleUpperLimit && setScale(Number((scale + pdfScaleStep).toFixed(1)))
                            break
                        case 'zoomOut': 
                            scale > pdfScaleLowerLimit && setScale(Number((scale - pdfScaleStep).toFixed(1)))
                            break
                        default: 
                            setScale(defaultPDFScale)
                    }
            }, changeLanguageAnimationDelay)
        }
    }

    const translatedCV = process.env.PUBLIC_URL + "/tselas_cv_" + context.language + ".pdf"

    const pdfToolsArray: IFunctionalIcon[] = [
        {
            id: "zoomLevel",
            title: translate('cv.zoomLevel', context.language),
            content: <div className='zoom-level-div'>{`${((scale - 0.5) * 100).toFixed(0)}%`}</div>
        },
        {
            id: "zoomIn",
            title: translate('cv.zoomIn', context.language),
            content: <PlusCircleOutlined className="functional-icon" onClick={() => handleScaleSetting('zoomIn', scale)}/>
        },
        {
            id: "zoomOut",
            title: translate('cv.zoomOut', context.language),
            content: <MinusCircleOutlined className="functional-icon" onClick={() => handleScaleSetting('zoomOut', scale)}/>
        },
        {
            id: "resetZoom",
            title: translate('cv.resetZoom', context.language),
            content: <UndoOutlined className="functional-icon" onClick={() => handleScaleSetting()}/>
        },
        {
            id: "download",
            title: translate('cv.download', context.language),
            content: <a href={translatedCV} download={true} style={{color: "black", marginTop: '2px'}}><DownloadOutlined className="functional-icon" /></a>
        },
    ]

    const isMobileRegex = /android|iphone|kindle|ipad/i;
    const isMobile = isMobileRegex.test(navigator.userAgent)

    const pdfDownloadFunctionalIcon = pdfToolsArray[pdfToolsArray.length - 1]

    return (
        <div className="pdfLayout">
            {isMobile ? (
                <div className='pdfTools-mobile'>
                    <p>{pdfDownloadFunctionalIcon.title} PDF</p>
                    {pdfDownloadFunctionalIcon.content}
                </div>
                ) : (
                <>
                    <div className="pdfTools">
                        {pdfToolsArray.map((tool) => createTooltip(tool))}
                    </div>
                    <div id="pdfViewport" className="pdfViewport">
                        <Document file={translatedCV} loading={<LoadingOutlined />} scale={scale}>
                            <Page pageNumber={1} />
                        </Document>
                    </div>
                </>
                )
            }
        </div>
    )
}

export default CV;