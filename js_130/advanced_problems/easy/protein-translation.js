const CODON_TO_POLYPEPTIDE = {
  AUG: "Methionine",
  UUU: "Phenylalanine",
  UUC: "Phenylalanine",
  UUA: "Leucine",
  UUG: "Leucine",
  UCU: "Serine",
  UCC: "Serine",
  UCA: "Serine",
  UCG: "Serine",
  UAU: "Tyrosine",
  UAC: "Tyrosine",
  UGU: "Cysteine",
  UGC: "Cysteine",
  UGG: "Tryptophan",
  UAA: "STOP",
  UAG: "STOP",
  UGA: "STOP"
}

function translate(rna) {
  const CODON_LENGTH = 3;
  
  if (!rna) return [];
  
  let proteins = [];
  for (let i = 0; i < rna.length; i+= CODON_LENGTH) {
    let currentCodon = rna.slice(i, i + CODON_LENGTH);
    if (!CODON_TO_POLYPEPTIDE[currentCodon]) {
      throw new Error("Invalid codon");
    } else if (CODON_TO_POLYPEPTIDE[currentCodon] === 'STOP') {
      break;
    } else {
      proteins.push(CODON_TO_POLYPEPTIDE[currentCodon]);
    }
  }
  return proteins;
}


module.exports = translate;

