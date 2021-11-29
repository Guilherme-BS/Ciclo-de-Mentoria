/*
Obejetivo: retornar qual numero aparece mais vezes dentro do array */
const testCase = [1, 4, 1, 2, 1]
const testCase2 = [1, 1, 1, 3, 3, 2, 2, 3, 3, 3, 2, 3, 3]

const RepeatedNumber = (list)=>{
  let apparitionCunter = {}
  for(let number of list){
    if(apparitionCunter[number] === undefined){
      apparitionCunter[number] = 1
    } else{
      apparitionCunter[number] ++
    }
  }
  return apparitionCunter
}
const imprimeMaior = (map) =>{
  let biggerNumber = 0
  let mapList = Object.keys(map)
  for(let i= 0; i<mapList.length; i++){
    if(map[mapList[i]] > biggerNumber){
      biggerNumber = mapList[i]
    }
  }
  console.log(biggerNumber)
}
imprimeMaior(RepeatedNumber(testCase2))
