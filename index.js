//polyfil

Array.prototype.doubler=function(){
   return this.map(ele=>2*ele)
}


const arr = [1,2,3,4]

console.log(arr.doubler())



//application of clousre




function modular_code() {
   let count = 0;

   return {
      getCount() {
         return count
      },

      increment() {
         count++
      },

      decrement(){
         if(!(count<0)){
            --count
         }
      }
   }
}

// function factory

function multiplier(factor){
   return (number)=>factor*number
}

// currying

function adder(a){
   return (b)=>{
      if(b!=undefined){
         return adder(a+b)
      }
      return a
   }
}



function und_null(){
   console.log(typeof(null));
   console.log(typeof(undefined));

   console.log(null==undefined)
   console.log(null===undefined)

}

function obj_imp_meths(){
   const obj = {
      a:"aa",
      b:"bee",
      c:"cee",
      d:"dee"
   }

   const obj2 = {
      a:"Aaa"
   }

   const keys = Object.keys(obj);
   
   //index
   // for(let key in keys){
   //    console.log(key)
   // }

   //values
   // for(let key of keys){
   //    console.log(key)
   // }

   const vals = Object.values(obj);

   // for (let val of vals){
   //    console.log(val)
   // }

   const tups = Object.entries(obj)

   // for(let tup of tups){
   //    console.log(tup)
   // }

   const freezed_obj = Object.freeze(obj)

   // console.log(freezed_obj===obj)

   // obj["e"] = "eee"
   // obj2["e"] = "Eee"

   // console.log(obj)
   // console.log(obj2)

   // obj["a"] = "not a"
   // obj2["a"]= "Not a"

   // console.log(obj)
   // console.log(obj2)

   //With Array

   const arr = ["a","b","c"]

   // arr.push("e")

   // const arrr_f = Object.freeze(arr);

   // console.log(arr===arrr_f)

   // arr.push("f")

   // console.log(arr)

   const arrr_s = Object.seal(arr);
   console.log(arr===arrr_s)
   //  arr.push("f")

   


}

function equality_check(){
   const obj = {
      a:"a",
      b:"b"
   }
   const obj2 = {
      a:"a",
      b:"b"
   }

   console.log(obj==obj2);
   console.log(obj===obj2);

}


function proto_basic() {
  const obj = {
    name: "saurabh",
    tellName() {
      console.log(this.name);
    },
  };

  const gh = Object.create(obj);
  console.log(gh.tellName());
}


function obj_assign(){
   const obj = {
      a:"a",
      b:"b"
   }

   const obj_2 = {
      c:"c",
      d:"d"
   }

   // const obj_assign = Object.assign(obj,obj_2)

   // console.log(obj===obj_assign)

   // console.log(obj_assign)

   const ant_obj_assign = Object.assign({},obj,obj_2)

   // console.log(obj===ant_obj_assign)
   // console.log(obj==ant_obj_assign)

   console.log(ant_obj_assign)
   console.log(obj)

}


