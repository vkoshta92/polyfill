// interface ApiResponse<T> {
//     success: boolean;
//     data: T;
//   }
  
//   const response: ApiResponse<string[]> = {
//     success: true,
//     data: ["apple", "banana"],
//   };

  

interface ApidData<T>{
    success:boolean;
    data:T;
  }

  const myResponse:ApidData<String[]>= {
    success: true,
    data:["apple","banana"],
  }

  console.log(myResponse)