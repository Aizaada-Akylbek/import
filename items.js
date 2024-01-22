const fns={
    getItems: function(a,b){
        return a+b
    }, 
    countItems: function (array){
        const summa=array.reduce((total, el)=>total+el,0)
        
        console.log(summa);
    }
}

export const studentName='Amina'
export const studentAge=15

export const redactor='VS Code'
export const nreInfo='GIT'


export const getItems =fns.getItems
export const countItems =fns.countItems


