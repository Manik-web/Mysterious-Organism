// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single stand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }
  
  // New code
  
  const pAequorFactory = (number, array) => {     
          return{
          speciesNumber : number,
          dna : array,
          mutate () {
              let swap = (Math.round(Math.random()*array.length)-1);
              let base = Math.round(Math.random()*2);
              let notA = ['C','G','T'];
              let notC = ['A','G','T'];
              let notG = ['A','C','T'];
              let notT = ['A','C','G'];
              
              switch(array[swap]){
                  case 'A': array[swap]=notA[base]; break;
                  case 'C': array[swap]= notC[base];break;
                  case 'G': array[swap]= notG[base]; break;
                  case 'T': array[swap] = notT[base]; break;
                  default: break;
              }
            },
            compareDNA (species1){
                let perc = 0;
                console.log(this.dna, species1.dna);

                for (i=0;i<species1.dna.length;i++){
                    if (this.dna[i]===species1.dna[i]){
                        perc ++;
                    }                }
                perc = Math.round((perc/15)*100);
                console.log(`Specimen #${species1.speciesNumber} and Specimen #${this.speciesNumber} have ${perc}% DNA in common!`);
            },
            willLikelySurvive(){
                let surviveCount = 0;
                for(k=0;k<array.length;k++){
                    if (array[k]==='C'||array[k]==='G'){
                        surviveCount++;
                    }
                }
                if(surviveCount>8){
                    return true;
                }else{ return false;}
            }
        }
    }     

  //let test = mockUpStrand();
 // let test2 = mockUpStrand();
 // console.log(test, test2);
  
//pecimen1 = pAequorFactory(1, test);
//console.log(specimen1.dna.length);
//pAequorFactory(2,test2).compareDNA(specimen1);
//console.log(pAequorFactory(2, test2).willLikelySurvive());
//console.log(test2.willLikelySurvive());

let specimenCollection =[];
let specimenCount = 1;
let specimenId = 0;

do {
    specimenId ++;
    
    let temp = mockUpStrand();
    if(pAequorFactory(specimenId, temp).willLikelySurvive()){
        specimenCollection.push(pAequorFactory(specimenId,temp));
        specimenCount ++;
    }     
} while (specimenCount < 30);

console.log(specimenCollection);
