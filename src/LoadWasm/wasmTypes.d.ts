declare global {
  export interface Window {
    Go: any;
    myGolangFunction: (num1: number, num2: number)=>number
  }
}

export {};
