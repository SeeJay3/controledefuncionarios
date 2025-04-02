const inss=(salary:number):number=>{

    let inss = 0

    if (salary < 1500) {
        inss = 0.10 * salary
    }
    else if (salary >=1500 && salary < 4000) {
        inss = 0.12 * salary
    }
    else if (salary >= 4000 && salary < 6000) {
        inss = 0.14 * salary
    }
    else 
        inss = 0.15 * salary
    
    return parseFloat(inss.toFixed(2))
}

export function irf(salary:number):number{
    const irf = 0.10 * salary
    return parseFloat(irf.toFixed(2))
}

export function salliq(salary:number) {
    let salliq = salary - inss(salary) - irf(salary)
    return salliq.toFixed(2)
}

export {inss}