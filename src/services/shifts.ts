import { shift } from "../models/shift";



export class ShiftsService{
    private shifts: shift[]= [];
   
   

    addShift(Title: string,
        location: string,
        Street: string,
        Day: string,
        date: number,
        StartTime: any,
        EndTime: any,
        DressCode: string,
        Signs: string,
        Otherinfo: string){
   this.shifts.push(new shift(Title,location,Street,Day,date,StartTime,EndTime,DressCode,Signs,Otherinfo));
   console.log(this.shifts); 
   
   
}

    getShifts(){
        return this.shifts.slice();
    }
    updateShift(index: number,
        Title: string,
        location: string,
        Street: string,
        Day: string,
        date: number,
        StartTime: any,
        EndTime: any,
        DressCode: string,
        Signs: string,
        Otherinfo: string
    ){
    this.shifts[index] = new shift(Title,location,Street,Day,date,StartTime,EndTime,DressCode,Signs,Otherinfo);
    }
    removeShift(index: number){
        
        this.shifts.splice(index, 1);
    }
}