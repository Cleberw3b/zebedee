export interface Input {
    register: any
    errors?: any
    name?: string
    placeholder?: string
    required?: boolean
}

type emptyFunctionVoid = () => void

type functionDataPromise = (data?: any) => Promise<any>

export interface Button {
    triggerAction?: emptyFunctionVoid | functionDataPromise
    name?: string
}
