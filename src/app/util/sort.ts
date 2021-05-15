export class Sort {

    private sortOrder = 1;
    private collator = new Intl.Collator(undefined, {
        numeric: true,
        sensitivity: "base",
    });


    constructor() {
    }

    public startSort(property:string, order:string, type = "") {
        console.log(property,order,type)
        if (order === "desc") {
            this.sortOrder = -1;
        }
        return (a:any, b:any) => {
           
            if (type === "date") {
                return this.sortData(new Date(a.data[property]), new Date(b.data[property]));
            }
            else {
                
                return this.collator.compare(a.data[property], b.data[property]) * this.sortOrder;
            }
        }
    }

    private sortData(a:any, b:any) {
        if (a < b) {
            return -1 * this.sortOrder;
        } else if (a > b) {
            return 1 * this.sortOrder;
        } else {
            return 0 * this.sortOrder;
        }
    }
}