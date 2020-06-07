//JS used for test


console.log("Ouverture du programme");

var numeroParticipantPrompt = 0

// Caractéristiques personnalisées
var fEcr = 3
var fRam = 3
var fPrx = 3
var fSsd = 3
var fBat = 3
var fRes = 3
var fGhz = 3
var fPds = 3


// Total number of products
var fTot = fEcr + fRam + fPrx + fSsd + fBat + fRes + fGhz + fPds;

// Weighted values
var wEcr = fEcr/fTot;
var wRam = fRam/fTot;
var wPrx = fPrx/fTot;
var wSsd = fSsd/fTot;
var wBat = fBat/fTot;
var wRes = fRes/fTot;
var wGhz = fGhz/fTot;
var wPds = fPds/fTot;

var maxEcr;
var maxRam;
var maxPrx;
var maxSsd;
var maxBat;
var maxRes;
var maxGhz;
var maxPds;

//SAW Calculation for S1 Scores
for (y = 0; y < s1.length ; y++) {

  maxEcr = Math.max(list[s1[y].L1-1].Inches,list[s1[y].L2-1].Inches,list[s1[y].L3-1].Inches,list[s1[y].L4-1].Inches,list[s1[y].L5-1].Inches,list[s1[y].L6-1].Inches)
  maxRam = Math.max(list[s1[y].L1-1]["RAM (GB)"],list[s1[y].L2-1]["RAM (GB)"],list[s1[y].L3-1]["RAM (GB)"],list[s1[y].L4-1]["RAM (GB)"],list[s1[y].L5-1]["RAM (GB)"],list[s1[y].L6-1]["RAM (GB)"])
  maxPrx = Math.min(list[s1[y].L1-1]["Price ($)"],list[s1[y].L2-1]["Price ($)"],list[s1[y].L3-1]["Price ($)"],list[s1[y].L4-1]["Price ($)"],list[s1[y].L5-1]["Price ($)"],list[s1[y].L6-1]["Price ($)"])
  maxSsd = Math.max(list[s1[y].L1-1]["SSD Memory (GB)"],list[s1[y].L2-1]["SSD Memory (GB)"],list[s1[y].L3-1]["SSD Memory (GB)"],list[s1[y].L4-1]["SSD Memory (GB)"],list[s1[y].L5-1]["SSD Memory (GB)"],list[s1[y].L6-1]["SSD Memory (GB)"])
  maxBat = Math.max(list[s1[y].L1-1]["Battery life (hours)"],list[s1[y].L2-1]["Battery life (hours)"],list[s1[y].L3-1]["Battery life (hours)"],list[s1[y].L4-1]["Battery life (hours)"],list[s1[y].L5-1]["Battery life (hours)"],list[s1[y].L6-1]["Battery life (hours)"])
  maxRes = Math.max(list[s1[y].L1-1]["Average Rating"],list[s1[y].L2-1]["Average Rating"],list[s1[y].L3-1]["Average Rating"],list[s1[y].L4-1]["Average Rating"],list[s1[y].L5-1]["Average Rating"],list[s1[y].L6-1]["Average Rating"])
  maxGhz = Math.max(list[s1[y].L1-1]["Processor Speed (GHz)"],list[s1[y].L2-1]["Processor Speed (GHz)"],list[s1[y].L3-1]["Processor Speed (GHz)"],list[s1[y].L4-1]["Processor Speed (GHz)"],list[s1[y].L5-1]["Processor Speed (GHz)"],list[s1[y].L6-1]["Processor Speed (GHz)"])
  maxPds = Math.min(list[s1[y].L1-1]["Weight (kg)"],list[s1[y].L2-1]["Weight (kg)"],list[s1[y].L3-1]["Weight (kg)"],list[s1[y].L4-1]["Weight (kg)"],list[s1[y].L5-1]["Weight (kg)"],list[s1[y].L6-1]["Weight (kg)"])

  list[s1[y].L1-1].Score = (list[s1[y].L1-1].Inches/maxEcr)*wEcr + (list[s1[y].L1-1]["RAM (GB)"]/maxRam)*wRam + (maxPrx/list[s1[y].L1-1]["Price ($)"])*wPrx + (list[s1[y].L1-1]["SSD Memory (GB)"]/maxSsd)*wSsd +  (list[s1[y].L1-1]["Battery life (hours)"]/maxBat)*wBat +  (list[s1[y].L1-1]["Average Rating"]/maxRes)*wRes + (list[s1[y].L1-1]["Processor Speed (GHz)"]/maxGhz)*wGhz +  (maxPds/list[s1[y].L1-1]["Weight (kg)"])*wPds;
  list[s1[y].L2-1].Score = (list[s1[y].L2-1].Inches/maxEcr)*wEcr + (list[s1[y].L2-1]["RAM (GB)"]/maxRam)*wRam + (maxPrx/list[s1[y].L2-1]["Price ($)"])*wPrx + (list[s1[y].L2-1]["SSD Memory (GB)"]/maxSsd)*wSsd +  (list[s1[y].L2-1]["Battery life (hours)"]/maxBat)*wBat +  (list[s1[y].L2-1]["Average Rating"]/maxRes)*wRes + (list[s1[y].L2-1]["Processor Speed (GHz)"]/maxGhz)*wGhz +  (maxPds/list[s1[y].L2-1]["Weight (kg)"])*wPds;
  list[s1[y].L3-1].Score = (list[s1[y].L3-1].Inches/maxEcr)*wEcr + (list[s1[y].L3-1]["RAM (GB)"]/maxRam)*wRam + (maxPrx/list[s1[y].L3-1]["Price ($)"])*wPrx + (list[s1[y].L3-1]["SSD Memory (GB)"]/maxSsd)*wSsd +  (list[s1[y].L3-1]["Battery life (hours)"]/maxBat)*wBat +  (list[s1[y].L3-1]["Average Rating"]/maxRes)*wRes + (list[s1[y].L3-1]["Processor Speed (GHz)"]/maxGhz)*wGhz +  (maxPds/list[s1[y].L3-1]["Weight (kg)"])*wPds;
  list[s1[y].L4-1].Score = (list[s1[y].L4-1].Inches/maxEcr)*wEcr + (list[s1[y].L4-1]["RAM (GB)"]/maxRam)*wRam + (maxPrx/list[s1[y].L4-1]["Price ($)"])*wPrx + (list[s1[y].L4-1]["SSD Memory (GB)"]/maxSsd)*wSsd +  (list[s1[y].L4-1]["Battery life (hours)"]/maxBat)*wBat +  (list[s1[y].L4-1]["Average Rating"]/maxRes)*wRes + (list[s1[y].L4-1]["Processor Speed (GHz)"]/maxGhz)*wGhz +  (maxPds/list[s1[y].L4-1]["Weight (kg)"])*wPds;
  list[s1[y].L5-1].Score = (list[s1[y].L5-1].Inches/maxEcr)*wEcr + (list[s1[y].L5-1]["RAM (GB)"]/maxRam)*wRam + (maxPrx/list[s1[y].L5-1]["Price ($)"])*wPrx + (list[s1[y].L5-1]["SSD Memory (GB)"]/maxSsd)*wSsd +  (list[s1[y].L5-1]["Battery life (hours)"]/maxBat)*wBat +  (list[s1[y].L5-1]["Average Rating"]/maxRes)*wRes + (list[s1[y].L5-1]["Processor Speed (GHz)"]/maxGhz)*wGhz +  (maxPds/list[s1[y].L5-1]["Weight (kg)"])*wPds;
  list[s1[y].L6-1].Score = (list[s1[y].L6-1].Inches/maxEcr)*wEcr + (list[s1[y].L6-1]["RAM (GB)"]/maxRam)*wRam + (maxPrx/list[s1[y].L6-1]["Price ($)"])*wPrx + (list[s1[y].L6-1]["SSD Memory (GB)"]/maxSsd)*wSsd +  (list[s1[y].L6-1]["Battery life (hours)"]/maxBat)*wBat +  (list[s1[y].L6-1]["Average Rating"]/maxRes)*wRes + (list[s1[y].L6-1]["Processor Speed (GHz)"]/maxGhz)*wGhz +  (maxPds/list[s1[y].L6-1]["Weight (kg)"])*wPds;

var rank1 = [list[s1[y].L1-1].Score,list[s1[y].L2-1].Score,list[s1[y].L3-1].Score,list[s1[y].L4-1].Score,list[s1[y].L5-1].Score,list[s1[y].L6-1].Score];
var rank1Sorted = rank1.sort(function(a,b){return b-a});

list[s1[y].L1-1].Rank = rank1Sorted.indexOf(list[s1[y].L1-1].Score) +1;
list[s1[y].L2-1].Rank = rank1Sorted.indexOf(list[s1[y].L2-1].Score) +1;
list[s1[y].L3-1].Rank = rank1Sorted.indexOf(list[s1[y].L3-1].Score) +1;
list[s1[y].L4-1].Rank = rank1Sorted.indexOf(list[s1[y].L4-1].Score) +1;
list[s1[y].L5-1].Rank = rank1Sorted.indexOf(list[s1[y].L5-1].Score) +1;
list[s1[y].L6-1].Rank = rank1Sorted.indexOf(list[s1[y].L6-1].Score) +1;

};
console.log(list)
//SAW Calculation for s3 Scores
for (y = 0; y < s3.length ; y++) {

    maxEcr = Math.max(list[s3[y].L1-1].Inches,list[s3[y].L2-1].Inches,list[s3[y].L3-1].Inches,list[s3[y].L4-1].Inches,list[s3[y].L5-1].Inches,list[s3[y].L6-1].Inches)
    maxRam = Math.max(list[s3[y].L1-1]["RAM (GB)"],list[s3[y].L2-1]["RAM (GB)"],list[s3[y].L3-1]["RAM (GB)"],list[s3[y].L4-1]["RAM (GB)"],list[s3[y].L5-1]["RAM (GB)"],list[s3[y].L6-1]["RAM (GB)"])
    maxPrx = Math.min(list[s3[y].L1-1]["Price ($)"],list[s3[y].L2-1]["Price ($)"],list[s3[y].L3-1]["Price ($)"],list[s3[y].L4-1]["Price ($)"],list[s3[y].L5-1]["Price ($)"],list[s3[y].L6-1]["Price ($)"])
    maxSsd = Math.max(list[s3[y].L1-1]["SSD Memory (GB)"],list[s3[y].L2-1]["SSD Memory (GB)"],list[s3[y].L3-1]["SSD Memory (GB)"],list[s3[y].L4-1]["SSD Memory (GB)"],list[s3[y].L5-1]["SSD Memory (GB)"],list[s3[y].L6-1]["SSD Memory (GB)"])
    maxBat = Math.max(list[s3[y].L1-1]["Battery life (hours)"],list[s3[y].L2-1]["Battery life (hours)"],list[s3[y].L3-1]["Battery life (hours)"],list[s3[y].L4-1]["Battery life (hours)"],list[s3[y].L5-1]["Battery life (hours)"],list[s3[y].L6-1]["Battery life (hours)"])
    maxRes = Math.max(list[s3[y].L1-1]["Average Rating"],list[s3[y].L2-1]["Average Rating"],list[s3[y].L3-1]["Average Rating"],list[s3[y].L4-1]["Average Rating"],list[s3[y].L5-1]["Average Rating"],list[s3[y].L6-1]["Average Rating"])
    maxGhz = Math.max(list[s3[y].L1-1]["Processor Speed (GHz)"],list[s3[y].L2-1]["Processor Speed (GHz)"],list[s3[y].L3-1]["Processor Speed (GHz)"],list[s3[y].L4-1]["Processor Speed (GHz)"],list[s3[y].L5-1]["Processor Speed (GHz)"],list[s3[y].L6-1]["Processor Speed (GHz)"])
    maxPds = Math.min(list[s3[y].L1-1]["Weight (kg)"],list[s3[y].L2-1]["Weight (kg)"],list[s3[y].L3-1]["Weight (kg)"],list[s3[y].L4-1]["Weight (kg)"],list[s3[y].L5-1]["Weight (kg)"],list[s3[y].L6-1]["Weight (kg)"])
  
    list[s3[y].L1-1].Score = (list[s3[y].L1-1].Inches/maxEcr)*wEcr + (list[s3[y].L1-1]["RAM (GB)"]/maxRam)*wRam + (maxPrx/list[s3[y].L1-1]["Price ($)"])*wPrx + (list[s3[y].L1-1]["SSD Memory (GB)"]/maxSsd)*wSsd +  (list[s3[y].L1-1]["Battery life (hours)"]/maxBat)*wBat +  (list[s3[y].L1-1]["Average Rating"]/maxRes)*wRes + (list[s3[y].L1-1]["Processor Speed (GHz)"]/maxGhz)*wGhz +  (maxPds/list[s3[y].L1-1]["Weight (kg)"])*wPds;
    list[s3[y].L2-1].Score = (list[s3[y].L2-1].Inches/maxEcr)*wEcr + (list[s3[y].L2-1]["RAM (GB)"]/maxRam)*wRam + (maxPrx/list[s3[y].L2-1]["Price ($)"])*wPrx + (list[s3[y].L2-1]["SSD Memory (GB)"]/maxSsd)*wSsd +  (list[s3[y].L2-1]["Battery life (hours)"]/maxBat)*wBat +  (list[s3[y].L2-1]["Average Rating"]/maxRes)*wRes + (list[s3[y].L2-1]["Processor Speed (GHz)"]/maxGhz)*wGhz +  (maxPds/list[s3[y].L2-1]["Weight (kg)"])*wPds;
    list[s3[y].L3-1].Score = (list[s3[y].L3-1].Inches/maxEcr)*wEcr + (list[s3[y].L3-1]["RAM (GB)"]/maxRam)*wRam + (maxPrx/list[s3[y].L3-1]["Price ($)"])*wPrx + (list[s3[y].L3-1]["SSD Memory (GB)"]/maxSsd)*wSsd +  (list[s3[y].L3-1]["Battery life (hours)"]/maxBat)*wBat +  (list[s3[y].L3-1]["Average Rating"]/maxRes)*wRes + (list[s3[y].L3-1]["Processor Speed (GHz)"]/maxGhz)*wGhz +  (maxPds/list[s3[y].L3-1]["Weight (kg)"])*wPds;
    list[s3[y].L4-1].Score = (list[s3[y].L4-1].Inches/maxEcr)*wEcr + (list[s3[y].L4-1]["RAM (GB)"]/maxRam)*wRam + (maxPrx/list[s3[y].L4-1]["Price ($)"])*wPrx + (list[s3[y].L4-1]["SSD Memory (GB)"]/maxSsd)*wSsd +  (list[s3[y].L4-1]["Battery life (hours)"]/maxBat)*wBat +  (list[s3[y].L4-1]["Average Rating"]/maxRes)*wRes + (list[s3[y].L4-1]["Processor Speed (GHz)"]/maxGhz)*wGhz +  (maxPds/list[s3[y].L4-1]["Weight (kg)"])*wPds;
    list[s3[y].L5-1].Score = (list[s3[y].L5-1].Inches/maxEcr)*wEcr + (list[s3[y].L5-1]["RAM (GB)"]/maxRam)*wRam + (maxPrx/list[s3[y].L5-1]["Price ($)"])*wPrx + (list[s3[y].L5-1]["SSD Memory (GB)"]/maxSsd)*wSsd +  (list[s3[y].L5-1]["Battery life (hours)"]/maxBat)*wBat +  (list[s3[y].L5-1]["Average Rating"]/maxRes)*wRes + (list[s3[y].L5-1]["Processor Speed (GHz)"]/maxGhz)*wGhz +  (maxPds/list[s3[y].L5-1]["Weight (kg)"])*wPds;
    list[s3[y].L6-1].Score = (list[s3[y].L6-1].Inches/maxEcr)*wEcr + (list[s3[y].L6-1]["RAM (GB)"]/maxRam)*wRam + (maxPrx/list[s3[y].L6-1]["Price ($)"])*wPrx + (list[s3[y].L6-1]["SSD Memory (GB)"]/maxSsd)*wSsd +  (list[s3[y].L6-1]["Battery life (hours)"]/maxBat)*wBat +  (list[s3[y].L6-1]["Average Rating"]/maxRes)*wRes + (list[s3[y].L6-1]["Processor Speed (GHz)"]/maxGhz)*wGhz +  (maxPds/list[s3[y].L6-1]["Weight (kg)"])*wPds;
 
    var rank3 = [list[s3[y].L1-1].Score,list[s3[y].L2-1].Score,list[s3[y].L3-1].Score,list[s3[y].L4-1].Score,list[s3[y].L5-1].Score,list[s3[y].L6-1].Score];
    var rank3Sorted = rank3.sort(function(a,b){return b-a});
    
    list[s3[y].L1-1].Rank = rank3Sorted.indexOf(list[s3[y].L1-1].Score) +1;
    list[s3[y].L2-1].Rank = rank3Sorted.indexOf(list[s3[y].L2-1].Score) +1;
    list[s3[y].L3-1].Rank = rank3Sorted.indexOf(list[s3[y].L3-1].Score) +1;
    list[s3[y].L4-1].Rank = rank3Sorted.indexOf(list[s3[y].L4-1].Score) +1;
    list[s3[y].L5-1].Rank = rank3Sorted.indexOf(list[s3[y].L5-1].Score) +1;
    list[s3[y].L6-1].Rank = rank3Sorted.indexOf(list[s3[y].L6-1].Score) +1;
};
//SAW Calculation for s2 Scores
for (y = 0; y < s2.length ; y++) {

    maxEcr = Math.max(list[s2[y].L1-1].Inches,list[s2[y].L2-1].Inches,list[s2[y].L3-1].Inches,list[s2[y].L4-1].Inches,list[s2[y].L5-1].Inches,list[s2[y].L6-1].Inches,list[s2[y].L7-1].Inches,list[s2[y].L8-1].Inches,list[s2[y].L9-1].Inches,list[s2[y].L10-1].Inches,list[s2[y].L11-1].Inches,list[s2[y].L12-1].Inches,list[s2[y].L13-1].Inches,list[s2[y].L14-1].Inches,list[s2[y].L15-1].Inches,list[s2[y].L16-1].Inches,list[s2[y].L17-1].Inches,list[s2[y].L18-1].Inches,list[s2[y].L19-1].Inches,list[s2[y].L20-1].Inches,list[s2[y].L21-1].Inches,list[s2[y].L22-1].Inches,list[s2[y].L23-1].Inches,list[s2[y].L24-1].Inches)
    maxRam = Math.max(list[s2[y].L1-1]["RAM (GB)"],list[s2[y].L2-1]["RAM (GB)"],list[s2[y].L3-1]["RAM (GB)"],list[s2[y].L4-1]["RAM (GB)"],list[s2[y].L5-1]["RAM (GB)"],list[s2[y].L6-1]["RAM (GB)"],list[s2[y].L7-1]["RAM (GB)"],list[s2[y].L8-1]["RAM (GB)"],list[s2[y].L9-1]["RAM (GB)"],list[s2[y].L10-1]["RAM (GB)"],list[s2[y].L11-1]["RAM (GB)"],list[s2[y].L12-1]["RAM (GB)"],list[s2[y].L13-1]["RAM (GB)"],list[s2[y].L14-1]["RAM (GB)"],list[s2[y].L15-1]["RAM (GB)"],list[s2[y].L16-1]["RAM (GB)"],list[s2[y].L17-1]["RAM (GB)"],list[s2[y].L18-1]["RAM (GB)"],list[s2[y].L19-1]["RAM (GB)"],list[s2[y].L20-1]["RAM (GB)"],list[s2[y].L21-1]["RAM (GB)"],list[s2[y].L22-1]["RAM (GB)"],list[s2[y].L23-1]["RAM (GB)"],list[s2[y].L24-1]["RAM (GB)"])
    maxPrx = Math.min(list[s2[y].L1-1]["Price ($)"],list[s2[y].L2-1]["Price ($)"],list[s2[y].L3-1]["Price ($)"],list[s2[y].L4-1]["Price ($)"],list[s2[y].L5-1]["Price ($)"],list[s2[y].L6-1]["Price ($)"],list[s2[y].L7-1]["Price ($)"],list[s2[y].L8-1]["Price ($)"],list[s2[y].L9-1]["Price ($)"],list[s2[y].L10-1]["Price ($)"],list[s2[y].L11-1]["Price ($)"],list[s2[y].L12-1]["Price ($)"],list[s2[y].L13-1]["Price ($)"],list[s2[y].L14-1]["Price ($)"],list[s2[y].L15-1]["Price ($)"],list[s2[y].L16-1]["Price ($)"],list[s2[y].L17-1]["Price ($)"],list[s2[y].L18-1]["Price ($)"],list[s2[y].L19-1]["Price ($)"],list[s2[y].L20-1]["Price ($)"],list[s2[y].L21-1]["Price ($)"],list[s2[y].L22-1]["Price ($)"],list[s2[y].L23-1]["Price ($)"],list[s2[y].L24-1]["Price ($)"])
    maxSsd = Math.max(list[s2[y].L1-1]["SSD Memory (GB)"],list[s2[y].L2-1]["SSD Memory (GB)"],list[s2[y].L3-1]["SSD Memory (GB)"],list[s2[y].L4-1]["SSD Memory (GB)"],list[s2[y].L5-1]["SSD Memory (GB)"],list[s2[y].L6-1]["SSD Memory (GB)"],list[s2[y].L7-1]["SSD Memory (GB)"],list[s2[y].L8-1]["SSD Memory (GB)"],list[s2[y].L9-1]["SSD Memory (GB)"],list[s2[y].L10-1]["SSD Memory (GB)"],list[s2[y].L11-1]["SSD Memory (GB)"],list[s2[y].L12-1]["SSD Memory (GB)"],list[s2[y].L13-1]["SSD Memory (GB)"],list[s2[y].L14-1]["SSD Memory (GB)"],list[s2[y].L15-1]["SSD Memory (GB)"],list[s2[y].L16-1]["SSD Memory (GB)"],list[s2[y].L17-1]["SSD Memory (GB)"],list[s2[y].L18-1]["SSD Memory (GB)"],list[s2[y].L19-1]["SSD Memory (GB)"],list[s2[y].L20-1]["SSD Memory (GB)"],list[s2[y].L21-1]["SSD Memory (GB)"],list[s2[y].L22-1]["SSD Memory (GB)"],list[s2[y].L23-1]["SSD Memory (GB)"],list[s2[y].L24-1]["SSD Memory (GB)"])
    maxBat = Math.max(list[s2[y].L1-1]["Battery life (hours)"],list[s2[y].L2-1]["Battery life (hours)"],list[s2[y].L3-1]["Battery life (hours)"],list[s2[y].L4-1]["Battery life (hours)"],list[s2[y].L5-1]["Battery life (hours)"],list[s2[y].L6-1]["Battery life (hours)"],list[s2[y].L7-1]["Battery life (hours)"],list[s2[y].L8-1]["Battery life (hours)"],list[s2[y].L9-1]["Battery life (hours)"],list[s2[y].L10-1]["Battery life (hours)"],list[s2[y].L11-1]["Battery life (hours)"],list[s2[y].L12-1]["Battery life (hours)"],list[s2[y].L13-1]["Battery life (hours)"],list[s2[y].L14-1]["Battery life (hours)"],list[s2[y].L15-1]["Battery life (hours)"],list[s2[y].L16-1]["Battery life (hours)"],list[s2[y].L17-1]["Battery life (hours)"],list[s2[y].L18-1]["Battery life (hours)"],list[s2[y].L19-1]["Battery life (hours)"],list[s2[y].L20-1]["Battery life (hours)"],list[s2[y].L21-1]["Battery life (hours)"],list[s2[y].L22-1]["Battery life (hours)"],list[s2[y].L23-1]["Battery life (hours)"],list[s2[y].L24-1]["Battery life (hours)"])
    maxRes = Math.max(list[s2[y].L1-1]["Average Rating"],list[s2[y].L2-1]["Average Rating"],list[s2[y].L3-1]["Average Rating"],list[s2[y].L4-1]["Average Rating"],list[s2[y].L5-1]["Average Rating"],list[s2[y].L6-1]["Average Rating"],list[s2[y].L7-1]["Average Rating"],list[s2[y].L8-1]["Average Rating"],list[s2[y].L9-1]["Average Rating"],list[s2[y].L10-1]["Average Rating"],list[s2[y].L11-1]["Average Rating"],list[s2[y].L12-1]["Average Rating"],list[s2[y].L13-1]["Average Rating"],list[s2[y].L14-1]["Average Rating"],list[s2[y].L15-1]["Average Rating"],list[s2[y].L16-1]["Average Rating"],list[s2[y].L17-1]["Average Rating"],list[s2[y].L18-1]["Average Rating"],list[s2[y].L19-1]["Average Rating"],list[s2[y].L20-1]["Average Rating"],list[s2[y].L21-1]["Average Rating"],list[s2[y].L22-1]["Average Rating"],list[s2[y].L23-1]["Average Rating"],list[s2[y].L24-1]["Average Rating"])
    maxGhz = Math.max(list[s2[y].L1-1]["Processor Speed (GHz)"],list[s2[y].L2-1]["Processor Speed (GHz)"],list[s2[y].L3-1]["Processor Speed (GHz)"],list[s2[y].L4-1]["Processor Speed (GHz)"],list[s2[y].L5-1]["Processor Speed (GHz)"],list[s2[y].L6-1]["Processor Speed (GHz)"],list[s2[y].L7-1]["Processor Speed (GHz)"],list[s2[y].L8-1]["Processor Speed (GHz)"],list[s2[y].L9-1]["Processor Speed (GHz)"],list[s2[y].L10-1]["Processor Speed (GHz)"],list[s2[y].L11-1]["Processor Speed (GHz)"],list[s2[y].L12-1]["Processor Speed (GHz)"],list[s2[y].L13-1]["Processor Speed (GHz)"],list[s2[y].L14-1]["Processor Speed (GHz)"],list[s2[y].L15-1]["Processor Speed (GHz)"],list[s2[y].L16-1]["Processor Speed (GHz)"],list[s2[y].L17-1]["Processor Speed (GHz)"],list[s2[y].L18-1]["Processor Speed (GHz)"],list[s2[y].L19-1]["Processor Speed (GHz)"],list[s2[y].L20-1]["Processor Speed (GHz)"],list[s2[y].L21-1]["Processor Speed (GHz)"],list[s2[y].L22-1]["Processor Speed (GHz)"],list[s2[y].L23-1]["Processor Speed (GHz)"],list[s2[y].L24-1]["Processor Speed (GHz)"])
    maxPds = Math.min(list[s2[y].L1-1]["Weight (kg)"],list[s2[y].L2-1]["Weight (kg)"],list[s2[y].L3-1]["Weight (kg)"],list[s2[y].L4-1]["Weight (kg)"],list[s2[y].L5-1]["Weight (kg)"],list[s2[y].L6-1]["Weight (kg)"],list[s2[y].L7-1]["Weight (kg)"],list[s2[y].L8-1]["Weight (kg)"],list[s2[y].L9-1]["Weight (kg)"],list[s2[y].L10-1]["Weight (kg)"],list[s2[y].L11-1]["Weight (kg)"],list[s2[y].L12-1]["Weight (kg)"],list[s2[y].L13-1]["Weight (kg)"],list[s2[y].L14-1]["Weight (kg)"],list[s2[y].L15-1]["Weight (kg)"],list[s2[y].L16-1]["Weight (kg)"],list[s2[y].L17-1]["Weight (kg)"],list[s2[y].L18-1]["Weight (kg)"],list[s2[y].L19-1]["Weight (kg)"],list[s2[y].L20-1]["Weight (kg)"],list[s2[y].L21-1]["Weight (kg)"],list[s2[y].L22-1]["Weight (kg)"],list[s2[y].L23-1]["Weight (kg)"],list[s2[y].L24-1]["Weight (kg)"])
  
    list[s2[y].L1-1].Score = (list[s2[y].L1-1].Inches/maxEcr)*wEcr + (list[s2[y].L1-1]["RAM (GB)"]/maxRam)*wRam + (maxPrx/list[s2[y].L1-1]["Price ($)"])*wPrx + (list[s2[y].L1-1]["SSD Memory (GB)"]/maxSsd)*wSsd +  (list[s2[y].L1-1]["Battery life (hours)"]/maxBat)*wBat +  (list[s2[y].L1-1]["Average Rating"]/maxRes)*wRes + (list[s2[y].L1-1]["Processor Speed (GHz)"]/maxGhz)*wGhz +  (maxPds/list[s2[y].L1-1]["Weight (kg)"])*wPds;
    list[s2[y].L2-1].Score = (list[s2[y].L2-1].Inches/maxEcr)*wEcr + (list[s2[y].L2-1]["RAM (GB)"]/maxRam)*wRam + (maxPrx/list[s2[y].L2-1]["Price ($)"])*wPrx + (list[s2[y].L2-1]["SSD Memory (GB)"]/maxSsd)*wSsd +  (list[s2[y].L2-1]["Battery life (hours)"]/maxBat)*wBat +  (list[s2[y].L2-1]["Average Rating"]/maxRes)*wRes + (list[s2[y].L2-1]["Processor Speed (GHz)"]/maxGhz)*wGhz +  (maxPds/list[s2[y].L2-1]["Weight (kg)"])*wPds;
    list[s2[y].L3-1].Score = (list[s2[y].L3-1].Inches/maxEcr)*wEcr + (list[s2[y].L3-1]["RAM (GB)"]/maxRam)*wRam + (maxPrx/list[s2[y].L3-1]["Price ($)"])*wPrx + (list[s2[y].L3-1]["SSD Memory (GB)"]/maxSsd)*wSsd +  (list[s2[y].L3-1]["Battery life (hours)"]/maxBat)*wBat +  (list[s2[y].L3-1]["Average Rating"]/maxRes)*wRes + (list[s2[y].L3-1]["Processor Speed (GHz)"]/maxGhz)*wGhz +  (maxPds/list[s2[y].L3-1]["Weight (kg)"])*wPds;
    list[s2[y].L4-1].Score = (list[s2[y].L4-1].Inches/maxEcr)*wEcr + (list[s2[y].L4-1]["RAM (GB)"]/maxRam)*wRam + (maxPrx/list[s2[y].L4-1]["Price ($)"])*wPrx + (list[s2[y].L4-1]["SSD Memory (GB)"]/maxSsd)*wSsd +  (list[s2[y].L4-1]["Battery life (hours)"]/maxBat)*wBat +  (list[s2[y].L4-1]["Average Rating"]/maxRes)*wRes + (list[s2[y].L4-1]["Processor Speed (GHz)"]/maxGhz)*wGhz +  (maxPds/list[s2[y].L4-1]["Weight (kg)"])*wPds;
    list[s2[y].L5-1].Score = (list[s2[y].L5-1].Inches/maxEcr)*wEcr + (list[s2[y].L5-1]["RAM (GB)"]/maxRam)*wRam + (maxPrx/list[s2[y].L5-1]["Price ($)"])*wPrx + (list[s2[y].L5-1]["SSD Memory (GB)"]/maxSsd)*wSsd +  (list[s2[y].L5-1]["Battery life (hours)"]/maxBat)*wBat +  (list[s2[y].L5-1]["Average Rating"]/maxRes)*wRes + (list[s2[y].L5-1]["Processor Speed (GHz)"]/maxGhz)*wGhz +  (maxPds/list[s2[y].L5-1]["Weight (kg)"])*wPds;
    list[s2[y].L6-1].Score = (list[s2[y].L6-1].Inches/maxEcr)*wEcr + (list[s2[y].L6-1]["RAM (GB)"]/maxRam)*wRam + (maxPrx/list[s2[y].L6-1]["Price ($)"])*wPrx + (list[s2[y].L6-1]["SSD Memory (GB)"]/maxSsd)*wSsd +  (list[s2[y].L6-1]["Battery life (hours)"]/maxBat)*wBat +  (list[s2[y].L6-1]["Average Rating"]/maxRes)*wRes + (list[s2[y].L6-1]["Processor Speed (GHz)"]/maxGhz)*wGhz +  (maxPds/list[s2[y].L6-1]["Weight (kg)"])*wPds;
    list[s2[y].L7-1].Score = (list[s2[y].L7-1].Inches/maxEcr)*wEcr + (list[s2[y].L7-1]["RAM (GB)"]/maxRam)*wRam + (maxPrx/list[s2[y].L7-1]["Price ($)"])*wPrx + (list[s2[y].L7-1]["SSD Memory (GB)"]/maxSsd)*wSsd +  (list[s2[y].L7-1]["Battery life (hours)"]/maxBat)*wBat +  (list[s2[y].L7-1]["Average Rating"]/maxRes)*wRes + (list[s2[y].L7-1]["Processor Speed (GHz)"]/maxGhz)*wGhz +  (maxPds/list[s2[y].L7-1]["Weight (kg)"])*wPds;
    list[s2[y].L8-1].Score = (list[s2[y].L8-1].Inches/maxEcr)*wEcr + (list[s2[y].L8-1]["RAM (GB)"]/maxRam)*wRam + (maxPrx/list[s2[y].L8-1]["Price ($)"])*wPrx + (list[s2[y].L8-1]["SSD Memory (GB)"]/maxSsd)*wSsd +  (list[s2[y].L8-1]["Battery life (hours)"]/maxBat)*wBat +  (list[s2[y].L8-1]["Average Rating"]/maxRes)*wRes + (list[s2[y].L8-1]["Processor Speed (GHz)"]/maxGhz)*wGhz +  (maxPds/list[s2[y].L8-1]["Weight (kg)"])*wPds;
    list[s2[y].L9-1].Score = (list[s2[y].L9-1].Inches/maxEcr)*wEcr + (list[s2[y].L9-1]["RAM (GB)"]/maxRam)*wRam + (maxPrx/list[s2[y].L9-1]["Price ($)"])*wPrx + (list[s2[y].L9-1]["SSD Memory (GB)"]/maxSsd)*wSsd +  (list[s2[y].L9-1]["Battery life (hours)"]/maxBat)*wBat +  (list[s2[y].L9-1]["Average Rating"]/maxRes)*wRes + (list[s2[y].L9-1]["Processor Speed (GHz)"]/maxGhz)*wGhz +  (maxPds/list[s2[y].L9-1]["Weight (kg)"])*wPds;
    list[s2[y].L10-1].Score = (list[s2[y].L10-1].Inches/maxEcr)*wEcr + (list[s2[y].L10-1]["RAM (GB)"]/maxRam)*wRam + (maxPrx/list[s2[y].L10-1]["Price ($)"])*wPrx + (list[s2[y].L10-1]["SSD Memory (GB)"]/maxSsd)*wSsd +  (list[s2[y].L10-1]["Battery life (hours)"]/maxBat)*wBat +  (list[s2[y].L10-1]["Average Rating"]/maxRes)*wRes + (list[s2[y].L10-1]["Processor Speed (GHz)"]/maxGhz)*wGhz +  (maxPds/list[s2[y].L10-1]["Weight (kg)"])*wPds;
    list[s2[y].L11-1].Score = (list[s2[y].L11-1].Inches/maxEcr)*wEcr + (list[s2[y].L11-1]["RAM (GB)"]/maxRam)*wRam + (maxPrx/list[s2[y].L11-1]["Price ($)"])*wPrx + (list[s2[y].L11-1]["SSD Memory (GB)"]/maxSsd)*wSsd +  (list[s2[y].L11-1]["Battery life (hours)"]/maxBat)*wBat +  (list[s2[y].L11-1]["Average Rating"]/maxRes)*wRes + (list[s2[y].L11-1]["Processor Speed (GHz)"]/maxGhz)*wGhz +  (maxPds/list[s2[y].L11-1]["Weight (kg)"])*wPds;
    list[s2[y].L12-1].Score = (list[s2[y].L12-1].Inches/maxEcr)*wEcr + (list[s2[y].L12-1]["RAM (GB)"]/maxRam)*wRam + (maxPrx/list[s2[y].L12-1]["Price ($)"])*wPrx + (list[s2[y].L12-1]["SSD Memory (GB)"]/maxSsd)*wSsd +  (list[s2[y].L12-1]["Battery life (hours)"]/maxBat)*wBat +  (list[s2[y].L12-1]["Average Rating"]/maxRes)*wRes + (list[s2[y].L12-1]["Processor Speed (GHz)"]/maxGhz)*wGhz +  (maxPds/list[s2[y].L12-1]["Weight (kg)"])*wPds;
    list[s2[y].L13-1].Score = (list[s2[y].L13-1].Inches/maxEcr)*wEcr + (list[s2[y].L13-1]["RAM (GB)"]/maxRam)*wRam + (maxPrx/list[s2[y].L13-1]["Price ($)"])*wPrx + (list[s2[y].L13-1]["SSD Memory (GB)"]/maxSsd)*wSsd +  (list[s2[y].L13-1]["Battery life (hours)"]/maxBat)*wBat +  (list[s2[y].L13-1]["Average Rating"]/maxRes)*wRes + (list[s2[y].L13-1]["Processor Speed (GHz)"]/maxGhz)*wGhz +  (maxPds/list[s2[y].L13-1]["Weight (kg)"])*wPds;
    list[s2[y].L14-1].Score = (list[s2[y].L14-1].Inches/maxEcr)*wEcr + (list[s2[y].L14-1]["RAM (GB)"]/maxRam)*wRam + (maxPrx/list[s2[y].L14-1]["Price ($)"])*wPrx + (list[s2[y].L14-1]["SSD Memory (GB)"]/maxSsd)*wSsd +  (list[s2[y].L14-1]["Battery life (hours)"]/maxBat)*wBat +  (list[s2[y].L14-1]["Average Rating"]/maxRes)*wRes + (list[s2[y].L14-1]["Processor Speed (GHz)"]/maxGhz)*wGhz +  (maxPds/list[s2[y].L14-1]["Weight (kg)"])*wPds;
    list[s2[y].L15-1].Score = (list[s2[y].L15-1].Inches/maxEcr)*wEcr + (list[s2[y].L15-1]["RAM (GB)"]/maxRam)*wRam + (maxPrx/list[s2[y].L15-1]["Price ($)"])*wPrx + (list[s2[y].L15-1]["SSD Memory (GB)"]/maxSsd)*wSsd +  (list[s2[y].L15-1]["Battery life (hours)"]/maxBat)*wBat +  (list[s2[y].L15-1]["Average Rating"]/maxRes)*wRes + (list[s2[y].L15-1]["Processor Speed (GHz)"]/maxGhz)*wGhz +  (maxPds/list[s2[y].L15-1]["Weight (kg)"])*wPds;
    list[s2[y].L16-1].Score = (list[s2[y].L16-1].Inches/maxEcr)*wEcr + (list[s2[y].L16-1]["RAM (GB)"]/maxRam)*wRam + (maxPrx/list[s2[y].L16-1]["Price ($)"])*wPrx + (list[s2[y].L16-1]["SSD Memory (GB)"]/maxSsd)*wSsd +  (list[s2[y].L16-1]["Battery life (hours)"]/maxBat)*wBat +  (list[s2[y].L16-1]["Average Rating"]/maxRes)*wRes + (list[s2[y].L16-1]["Processor Speed (GHz)"]/maxGhz)*wGhz +  (maxPds/list[s2[y].L16-1]["Weight (kg)"])*wPds;
    list[s2[y].L17-1].Score = (list[s2[y].L17-1].Inches/maxEcr)*wEcr + (list[s2[y].L17-1]["RAM (GB)"]/maxRam)*wRam + (maxPrx/list[s2[y].L17-1]["Price ($)"])*wPrx + (list[s2[y].L17-1]["SSD Memory (GB)"]/maxSsd)*wSsd +  (list[s2[y].L17-1]["Battery life (hours)"]/maxBat)*wBat +  (list[s2[y].L17-1]["Average Rating"]/maxRes)*wRes + (list[s2[y].L17-1]["Processor Speed (GHz)"]/maxGhz)*wGhz +  (maxPds/list[s2[y].L17-1]["Weight (kg)"])*wPds;
    list[s2[y].L18-1].Score = (list[s2[y].L18-1].Inches/maxEcr)*wEcr + (list[s2[y].L18-1]["RAM (GB)"]/maxRam)*wRam + (maxPrx/list[s2[y].L18-1]["Price ($)"])*wPrx + (list[s2[y].L18-1]["SSD Memory (GB)"]/maxSsd)*wSsd +  (list[s2[y].L18-1]["Battery life (hours)"]/maxBat)*wBat +  (list[s2[y].L18-1]["Average Rating"]/maxRes)*wRes + (list[s2[y].L18-1]["Processor Speed (GHz)"]/maxGhz)*wGhz +  (maxPds/list[s2[y].L18-1]["Weight (kg)"])*wPds;
    list[s2[y].L19-1].Score = (list[s2[y].L19-1].Inches/maxEcr)*wEcr + (list[s2[y].L19-1]["RAM (GB)"]/maxRam)*wRam + (maxPrx/list[s2[y].L19-1]["Price ($)"])*wPrx + (list[s2[y].L19-1]["SSD Memory (GB)"]/maxSsd)*wSsd +  (list[s2[y].L19-1]["Battery life (hours)"]/maxBat)*wBat +  (list[s2[y].L19-1]["Average Rating"]/maxRes)*wRes + (list[s2[y].L19-1]["Processor Speed (GHz)"]/maxGhz)*wGhz +  (maxPds/list[s2[y].L19-1]["Weight (kg)"])*wPds;
    list[s2[y].L20-1].Score = (list[s2[y].L20-1].Inches/maxEcr)*wEcr + (list[s2[y].L20-1]["RAM (GB)"]/maxRam)*wRam + (maxPrx/list[s2[y].L20-1]["Price ($)"])*wPrx + (list[s2[y].L20-1]["SSD Memory (GB)"]/maxSsd)*wSsd +  (list[s2[y].L20-1]["Battery life (hours)"]/maxBat)*wBat +  (list[s2[y].L20-1]["Average Rating"]/maxRes)*wRes + (list[s2[y].L20-1]["Processor Speed (GHz)"]/maxGhz)*wGhz +  (maxPds/list[s2[y].L20-1]["Weight (kg)"])*wPds;
    list[s2[y].L21-1].Score = (list[s2[y].L21-1].Inches/maxEcr)*wEcr + (list[s2[y].L21-1]["RAM (GB)"]/maxRam)*wRam + (maxPrx/list[s2[y].L21-1]["Price ($)"])*wPrx + (list[s2[y].L21-1]["SSD Memory (GB)"]/maxSsd)*wSsd +  (list[s2[y].L21-1]["Battery life (hours)"]/maxBat)*wBat +  (list[s2[y].L21-1]["Average Rating"]/maxRes)*wRes + (list[s2[y].L21-1]["Processor Speed (GHz)"]/maxGhz)*wGhz +  (maxPds/list[s2[y].L21-1]["Weight (kg)"])*wPds;
    list[s2[y].L22-1].Score = (list[s2[y].L22-1].Inches/maxEcr)*wEcr + (list[s2[y].L22-1]["RAM (GB)"]/maxRam)*wRam + (maxPrx/list[s2[y].L22-1]["Price ($)"])*wPrx + (list[s2[y].L22-1]["SSD Memory (GB)"]/maxSsd)*wSsd +  (list[s2[y].L22-1]["Battery life (hours)"]/maxBat)*wBat +  (list[s2[y].L22-1]["Average Rating"]/maxRes)*wRes + (list[s2[y].L22-1]["Processor Speed (GHz)"]/maxGhz)*wGhz +  (maxPds/list[s2[y].L22-1]["Weight (kg)"])*wPds;
    list[s2[y].L23-1].Score = (list[s2[y].L23-1].Inches/maxEcr)*wEcr + (list[s2[y].L23-1]["RAM (GB)"]/maxRam)*wRam + (maxPrx/list[s2[y].L23-1]["Price ($)"])*wPrx + (list[s2[y].L23-1]["SSD Memory (GB)"]/maxSsd)*wSsd +  (list[s2[y].L23-1]["Battery life (hours)"]/maxBat)*wBat +  (list[s2[y].L23-1]["Average Rating"]/maxRes)*wRes + (list[s2[y].L23-1]["Processor Speed (GHz)"]/maxGhz)*wGhz +  (maxPds/list[s2[y].L23-1]["Weight (kg)"])*wPds;
    list[s2[y].L24-1].Score = (list[s2[y].L24-1].Inches/maxEcr)*wEcr + (list[s2[y].L24-1]["RAM (GB)"]/maxRam)*wRam + (maxPrx/list[s2[y].L24-1]["Price ($)"])*wPrx + (list[s2[y].L24-1]["SSD Memory (GB)"]/maxSsd)*wSsd +  (list[s2[y].L24-1]["Battery life (hours)"]/maxBat)*wBat +  (list[s2[y].L24-1]["Average Rating"]/maxRes)*wRes + (list[s2[y].L24-1]["Processor Speed (GHz)"]/maxGhz)*wGhz +  (maxPds/list[s2[y].L24-1]["Weight (kg)"])*wPds;
  
    var rank2 = [list[s2[y].L1-1].Score,list[s2[y].L2-1].Score,list[s2[y].L3-1].Score,list[s2[y].L4-1].Score,list[s2[y].L5-1].Score,list[s2[y].L6-1].Score,list[s2[y].L7-1].Score,list[s2[y].L8-1].Score,list[s2[y].L9-1].Score,list[s2[y].L10-1].Score,list[s2[y].L11-1].Score,list[s2[y].L12-1].Score,list[s2[y].L13-1].Score,list[s2[y].L14-1].Score,list[s2[y].L15-1].Score,list[s2[y].L16-1].Score,list[s2[y].L17-1].Score,list[s2[y].L18-1].Score,list[s2[y].L19-1].Score,list[s2[y].L20-1].Score,list[s2[y].L21-1].Score,list[s2[y].L22-1].Score,list[s2[y].L23-1].Score,list[s2[y].L24-1].Score];
    var rank2Sorted = rank2.sort(function(a,b){return b-a});
    
    list[s2[y].L1-1].Rank = rank2Sorted.indexOf(list[s2[y].L1-1].Score) +1;
    list[s2[y].L2-1].Rank = rank2Sorted.indexOf(list[s2[y].L2-1].Score) +1;
    list[s2[y].L3-1].Rank = rank2Sorted.indexOf(list[s2[y].L3-1].Score) +1;
    list[s2[y].L4-1].Rank = rank2Sorted.indexOf(list[s2[y].L4-1].Score) +1;
    list[s2[y].L5-1].Rank = rank2Sorted.indexOf(list[s2[y].L5-1].Score) +1;
    list[s2[y].L6-1].Rank = rank2Sorted.indexOf(list[s2[y].L6-1].Score) +1;
    list[s2[y].L7-1].Rank = rank2Sorted.indexOf(list[s2[y].L7-1].Score) +1;
    list[s2[y].L8-1].Rank = rank2Sorted.indexOf(list[s2[y].L8-1].Score) +1;
    list[s2[y].L9-1].Rank = rank2Sorted.indexOf(list[s2[y].L9-1].Score) +1;
    list[s2[y].L10-1].Rank = rank2Sorted.indexOf(list[s2[y].L10-1].Score) +1;
    list[s2[y].L11-1].Rank = rank2Sorted.indexOf(list[s2[y].L11-1].Score) +1;
    list[s2[y].L12-1].Rank = rank2Sorted.indexOf(list[s2[y].L12-1].Score) +1;
    list[s2[y].L13-1].Rank = rank2Sorted.indexOf(list[s2[y].L13-1].Score) +1;
    list[s2[y].L14-1].Rank = rank2Sorted.indexOf(list[s2[y].L14-1].Score) +1;
    list[s2[y].L15-1].Rank = rank2Sorted.indexOf(list[s2[y].L15-1].Score) +1;
    list[s2[y].L16-1].Rank = rank2Sorted.indexOf(list[s2[y].L16-1].Score) +1;
    list[s2[y].L17-1].Rank = rank2Sorted.indexOf(list[s2[y].L17-1].Score) +1;
    list[s2[y].L18-1].Rank = rank2Sorted.indexOf(list[s2[y].L18-1].Score) +1;
    list[s2[y].L19-1].Rank = rank2Sorted.indexOf(list[s2[y].L19-1].Score) +1;
    list[s2[y].L20-1].Rank = rank2Sorted.indexOf(list[s2[y].L20-1].Score) +1;
    list[s2[y].L21-1].Rank = rank2Sorted.indexOf(list[s2[y].L21-1].Score) +1;
    list[s2[y].L22-1].Rank = rank2Sorted.indexOf(list[s2[y].L22-1].Score) +1;
    list[s2[y].L23-1].Rank = rank2Sorted.indexOf(list[s2[y].L23-1].Score) +1;
    list[s2[y].L24-1].Rank = rank2Sorted.indexOf(list[s2[y].L24-1].Score) +1;
 };
//SAW Calculation for s2 Scores
for (y = 0; y < s4.length ; y++) {

    maxEcr = Math.max(list[s4[y].L1-1].Inches,list[s4[y].L2-1].Inches,list[s4[y].L3-1].Inches,list[s4[y].L4-1].Inches,list[s4[y].L5-1].Inches,list[s4[y].L6-1].Inches,list[s4[y].L7-1].Inches,list[s4[y].L8-1].Inches,list[s4[y].L9-1].Inches,list[s4[y].L10-1].Inches,list[s4[y].L11-1].Inches,list[s4[y].L12-1].Inches,list[s4[y].L13-1].Inches,list[s4[y].L14-1].Inches,list[s4[y].L15-1].Inches,list[s4[y].L16-1].Inches,list[s4[y].L17-1].Inches,list[s4[y].L18-1].Inches,list[s4[y].L19-1].Inches,list[s4[y].L20-1].Inches,list[s4[y].L21-1].Inches,list[s4[y].L22-1].Inches,list[s4[y].L23-1].Inches,list[s4[y].L24-1].Inches)
    maxRam = Math.max(list[s4[y].L1-1]["RAM (GB)"],list[s4[y].L2-1]["RAM (GB)"],list[s4[y].L3-1]["RAM (GB)"],list[s4[y].L4-1]["RAM (GB)"],list[s4[y].L5-1]["RAM (GB)"],list[s4[y].L6-1]["RAM (GB)"],list[s4[y].L7-1]["RAM (GB)"],list[s4[y].L8-1]["RAM (GB)"],list[s4[y].L9-1]["RAM (GB)"],list[s4[y].L10-1]["RAM (GB)"],list[s4[y].L11-1]["RAM (GB)"],list[s4[y].L12-1]["RAM (GB)"],list[s4[y].L13-1]["RAM (GB)"],list[s4[y].L14-1]["RAM (GB)"],list[s4[y].L15-1]["RAM (GB)"],list[s4[y].L16-1]["RAM (GB)"],list[s4[y].L17-1]["RAM (GB)"],list[s4[y].L18-1]["RAM (GB)"],list[s4[y].L19-1]["RAM (GB)"],list[s4[y].L20-1]["RAM (GB)"],list[s4[y].L21-1]["RAM (GB)"],list[s4[y].L22-1]["RAM (GB)"],list[s4[y].L23-1]["RAM (GB)"],list[s4[y].L24-1]["RAM (GB)"])
    maxPrx = Math.min(list[s4[y].L1-1]["Price ($)"],list[s4[y].L2-1]["Price ($)"],list[s4[y].L3-1]["Price ($)"],list[s4[y].L4-1]["Price ($)"],list[s4[y].L5-1]["Price ($)"],list[s4[y].L6-1]["Price ($)"],list[s4[y].L7-1]["Price ($)"],list[s4[y].L8-1]["Price ($)"],list[s4[y].L9-1]["Price ($)"],list[s4[y].L10-1]["Price ($)"],list[s4[y].L11-1]["Price ($)"],list[s4[y].L12-1]["Price ($)"],list[s4[y].L13-1]["Price ($)"],list[s4[y].L14-1]["Price ($)"],list[s4[y].L15-1]["Price ($)"],list[s4[y].L16-1]["Price ($)"],list[s4[y].L17-1]["Price ($)"],list[s4[y].L18-1]["Price ($)"],list[s4[y].L19-1]["Price ($)"],list[s4[y].L20-1]["Price ($)"],list[s4[y].L21-1]["Price ($)"],list[s4[y].L22-1]["Price ($)"],list[s4[y].L23-1]["Price ($)"],list[s4[y].L24-1]["Price ($)"])
    maxSsd = Math.max(list[s4[y].L1-1]["SSD Memory (GB)"],list[s4[y].L2-1]["SSD Memory (GB)"],list[s4[y].L3-1]["SSD Memory (GB)"],list[s4[y].L4-1]["SSD Memory (GB)"],list[s4[y].L5-1]["SSD Memory (GB)"],list[s4[y].L6-1]["SSD Memory (GB)"],list[s4[y].L7-1]["SSD Memory (GB)"],list[s4[y].L8-1]["SSD Memory (GB)"],list[s4[y].L9-1]["SSD Memory (GB)"],list[s4[y].L10-1]["SSD Memory (GB)"],list[s4[y].L11-1]["SSD Memory (GB)"],list[s4[y].L12-1]["SSD Memory (GB)"],list[s4[y].L13-1]["SSD Memory (GB)"],list[s4[y].L14-1]["SSD Memory (GB)"],list[s4[y].L15-1]["SSD Memory (GB)"],list[s4[y].L16-1]["SSD Memory (GB)"],list[s4[y].L17-1]["SSD Memory (GB)"],list[s4[y].L18-1]["SSD Memory (GB)"],list[s4[y].L19-1]["SSD Memory (GB)"],list[s4[y].L20-1]["SSD Memory (GB)"],list[s4[y].L21-1]["SSD Memory (GB)"],list[s4[y].L22-1]["SSD Memory (GB)"],list[s4[y].L23-1]["SSD Memory (GB)"],list[s4[y].L24-1]["SSD Memory (GB)"])
    maxBat = Math.max(list[s4[y].L1-1]["Battery life (hours)"],list[s4[y].L2-1]["Battery life (hours)"],list[s4[y].L3-1]["Battery life (hours)"],list[s4[y].L4-1]["Battery life (hours)"],list[s4[y].L5-1]["Battery life (hours)"],list[s4[y].L6-1]["Battery life (hours)"],list[s4[y].L7-1]["Battery life (hours)"],list[s4[y].L8-1]["Battery life (hours)"],list[s4[y].L9-1]["Battery life (hours)"],list[s4[y].L10-1]["Battery life (hours)"],list[s4[y].L11-1]["Battery life (hours)"],list[s4[y].L12-1]["Battery life (hours)"],list[s4[y].L13-1]["Battery life (hours)"],list[s4[y].L14-1]["Battery life (hours)"],list[s4[y].L15-1]["Battery life (hours)"],list[s4[y].L16-1]["Battery life (hours)"],list[s4[y].L17-1]["Battery life (hours)"],list[s4[y].L18-1]["Battery life (hours)"],list[s4[y].L19-1]["Battery life (hours)"],list[s4[y].L20-1]["Battery life (hours)"],list[s4[y].L21-1]["Battery life (hours)"],list[s4[y].L22-1]["Battery life (hours)"],list[s4[y].L23-1]["Battery life (hours)"],list[s4[y].L24-1]["Battery life (hours)"])
    maxRes = Math.max(list[s4[y].L1-1]["Average Rating"],list[s4[y].L2-1]["Average Rating"],list[s4[y].L3-1]["Average Rating"],list[s4[y].L4-1]["Average Rating"],list[s4[y].L5-1]["Average Rating"],list[s4[y].L6-1]["Average Rating"],list[s4[y].L7-1]["Average Rating"],list[s4[y].L8-1]["Average Rating"],list[s4[y].L9-1]["Average Rating"],list[s4[y].L10-1]["Average Rating"],list[s4[y].L11-1]["Average Rating"],list[s4[y].L12-1]["Average Rating"],list[s4[y].L13-1]["Average Rating"],list[s4[y].L14-1]["Average Rating"],list[s4[y].L15-1]["Average Rating"],list[s4[y].L16-1]["Average Rating"],list[s4[y].L17-1]["Average Rating"],list[s4[y].L18-1]["Average Rating"],list[s4[y].L19-1]["Average Rating"],list[s4[y].L20-1]["Average Rating"],list[s4[y].L21-1]["Average Rating"],list[s4[y].L22-1]["Average Rating"],list[s4[y].L23-1]["Average Rating"],list[s4[y].L24-1]["Average Rating"])
    maxGhz = Math.max(list[s4[y].L1-1]["Processor Speed (GHz)"],list[s4[y].L2-1]["Processor Speed (GHz)"],list[s4[y].L3-1]["Processor Speed (GHz)"],list[s4[y].L4-1]["Processor Speed (GHz)"],list[s4[y].L5-1]["Processor Speed (GHz)"],list[s4[y].L6-1]["Processor Speed (GHz)"],list[s4[y].L7-1]["Processor Speed (GHz)"],list[s4[y].L8-1]["Processor Speed (GHz)"],list[s4[y].L9-1]["Processor Speed (GHz)"],list[s4[y].L10-1]["Processor Speed (GHz)"],list[s4[y].L11-1]["Processor Speed (GHz)"],list[s4[y].L12-1]["Processor Speed (GHz)"],list[s4[y].L13-1]["Processor Speed (GHz)"],list[s4[y].L14-1]["Processor Speed (GHz)"],list[s4[y].L15-1]["Processor Speed (GHz)"],list[s4[y].L16-1]["Processor Speed (GHz)"],list[s4[y].L17-1]["Processor Speed (GHz)"],list[s4[y].L18-1]["Processor Speed (GHz)"],list[s4[y].L19-1]["Processor Speed (GHz)"],list[s4[y].L20-1]["Processor Speed (GHz)"],list[s4[y].L21-1]["Processor Speed (GHz)"],list[s4[y].L22-1]["Processor Speed (GHz)"],list[s4[y].L23-1]["Processor Speed (GHz)"],list[s4[y].L24-1]["Processor Speed (GHz)"])
    maxPds = Math.min(list[s4[y].L1-1]["Weight (kg)"],list[s4[y].L2-1]["Weight (kg)"],list[s4[y].L3-1]["Weight (kg)"],list[s4[y].L4-1]["Weight (kg)"],list[s4[y].L5-1]["Weight (kg)"],list[s4[y].L6-1]["Weight (kg)"],list[s4[y].L7-1]["Weight (kg)"],list[s4[y].L8-1]["Weight (kg)"],list[s4[y].L9-1]["Weight (kg)"],list[s4[y].L10-1]["Weight (kg)"],list[s4[y].L11-1]["Weight (kg)"],list[s4[y].L12-1]["Weight (kg)"],list[s4[y].L13-1]["Weight (kg)"],list[s4[y].L14-1]["Weight (kg)"],list[s4[y].L15-1]["Weight (kg)"],list[s4[y].L16-1]["Weight (kg)"],list[s4[y].L17-1]["Weight (kg)"],list[s4[y].L18-1]["Weight (kg)"],list[s4[y].L19-1]["Weight (kg)"],list[s4[y].L20-1]["Weight (kg)"],list[s4[y].L21-1]["Weight (kg)"],list[s4[y].L22-1]["Weight (kg)"],list[s4[y].L23-1]["Weight (kg)"],list[s4[y].L24-1]["Weight (kg)"])
  
    list[s4[y].L1-1].Score = (list[s4[y].L1-1].Inches/maxEcr)*wEcr + (list[s4[y].L1-1]["RAM (GB)"]/maxRam)*wRam + (maxPrx/list[s4[y].L1-1]["Price ($)"])*wPrx + (list[s4[y].L1-1]["SSD Memory (GB)"]/maxSsd)*wSsd +  (list[s4[y].L1-1]["Battery life (hours)"]/maxBat)*wBat +  (list[s4[y].L1-1]["Average Rating"]/maxRes)*wRes + (list[s4[y].L1-1]["Processor Speed (GHz)"]/maxGhz)*wGhz +  (maxPds/list[s4[y].L1-1]["Weight (kg)"])*wPds;
    list[s4[y].L2-1].Score = (list[s4[y].L2-1].Inches/maxEcr)*wEcr + (list[s4[y].L2-1]["RAM (GB)"]/maxRam)*wRam + (maxPrx/list[s4[y].L2-1]["Price ($)"])*wPrx + (list[s4[y].L2-1]["SSD Memory (GB)"]/maxSsd)*wSsd +  (list[s4[y].L2-1]["Battery life (hours)"]/maxBat)*wBat +  (list[s4[y].L2-1]["Average Rating"]/maxRes)*wRes + (list[s4[y].L2-1]["Processor Speed (GHz)"]/maxGhz)*wGhz +  (maxPds/list[s4[y].L2-1]["Weight (kg)"])*wPds;
    list[s4[y].L3-1].Score = (list[s4[y].L3-1].Inches/maxEcr)*wEcr + (list[s4[y].L3-1]["RAM (GB)"]/maxRam)*wRam + (maxPrx/list[s4[y].L3-1]["Price ($)"])*wPrx + (list[s4[y].L3-1]["SSD Memory (GB)"]/maxSsd)*wSsd +  (list[s4[y].L3-1]["Battery life (hours)"]/maxBat)*wBat +  (list[s4[y].L3-1]["Average Rating"]/maxRes)*wRes + (list[s4[y].L3-1]["Processor Speed (GHz)"]/maxGhz)*wGhz +  (maxPds/list[s4[y].L3-1]["Weight (kg)"])*wPds;
    list[s4[y].L4-1].Score = (list[s4[y].L4-1].Inches/maxEcr)*wEcr + (list[s4[y].L4-1]["RAM (GB)"]/maxRam)*wRam + (maxPrx/list[s4[y].L4-1]["Price ($)"])*wPrx + (list[s4[y].L4-1]["SSD Memory (GB)"]/maxSsd)*wSsd +  (list[s4[y].L4-1]["Battery life (hours)"]/maxBat)*wBat +  (list[s4[y].L4-1]["Average Rating"]/maxRes)*wRes + (list[s4[y].L4-1]["Processor Speed (GHz)"]/maxGhz)*wGhz +  (maxPds/list[s4[y].L4-1]["Weight (kg)"])*wPds;
    list[s4[y].L5-1].Score = (list[s4[y].L5-1].Inches/maxEcr)*wEcr + (list[s4[y].L5-1]["RAM (GB)"]/maxRam)*wRam + (maxPrx/list[s4[y].L5-1]["Price ($)"])*wPrx + (list[s4[y].L5-1]["SSD Memory (GB)"]/maxSsd)*wSsd +  (list[s4[y].L5-1]["Battery life (hours)"]/maxBat)*wBat +  (list[s4[y].L5-1]["Average Rating"]/maxRes)*wRes + (list[s4[y].L5-1]["Processor Speed (GHz)"]/maxGhz)*wGhz +  (maxPds/list[s4[y].L5-1]["Weight (kg)"])*wPds;
    list[s4[y].L6-1].Score = (list[s4[y].L6-1].Inches/maxEcr)*wEcr + (list[s4[y].L6-1]["RAM (GB)"]/maxRam)*wRam + (maxPrx/list[s4[y].L6-1]["Price ($)"])*wPrx + (list[s4[y].L6-1]["SSD Memory (GB)"]/maxSsd)*wSsd +  (list[s4[y].L6-1]["Battery life (hours)"]/maxBat)*wBat +  (list[s4[y].L6-1]["Average Rating"]/maxRes)*wRes + (list[s4[y].L6-1]["Processor Speed (GHz)"]/maxGhz)*wGhz +  (maxPds/list[s4[y].L6-1]["Weight (kg)"])*wPds;
    list[s4[y].L7-1].Score = (list[s4[y].L7-1].Inches/maxEcr)*wEcr + (list[s4[y].L7-1]["RAM (GB)"]/maxRam)*wRam + (maxPrx/list[s4[y].L7-1]["Price ($)"])*wPrx + (list[s4[y].L7-1]["SSD Memory (GB)"]/maxSsd)*wSsd +  (list[s4[y].L7-1]["Battery life (hours)"]/maxBat)*wBat +  (list[s4[y].L7-1]["Average Rating"]/maxRes)*wRes + (list[s4[y].L7-1]["Processor Speed (GHz)"]/maxGhz)*wGhz +  (maxPds/list[s4[y].L7-1]["Weight (kg)"])*wPds;
    list[s4[y].L8-1].Score = (list[s4[y].L8-1].Inches/maxEcr)*wEcr + (list[s4[y].L8-1]["RAM (GB)"]/maxRam)*wRam + (maxPrx/list[s4[y].L8-1]["Price ($)"])*wPrx + (list[s4[y].L8-1]["SSD Memory (GB)"]/maxSsd)*wSsd +  (list[s4[y].L8-1]["Battery life (hours)"]/maxBat)*wBat +  (list[s4[y].L8-1]["Average Rating"]/maxRes)*wRes + (list[s4[y].L8-1]["Processor Speed (GHz)"]/maxGhz)*wGhz +  (maxPds/list[s4[y].L8-1]["Weight (kg)"])*wPds;
    list[s4[y].L9-1].Score = (list[s4[y].L9-1].Inches/maxEcr)*wEcr + (list[s4[y].L9-1]["RAM (GB)"]/maxRam)*wRam + (maxPrx/list[s4[y].L9-1]["Price ($)"])*wPrx + (list[s4[y].L9-1]["SSD Memory (GB)"]/maxSsd)*wSsd +  (list[s4[y].L9-1]["Battery life (hours)"]/maxBat)*wBat +  (list[s4[y].L9-1]["Average Rating"]/maxRes)*wRes + (list[s4[y].L9-1]["Processor Speed (GHz)"]/maxGhz)*wGhz +  (maxPds/list[s4[y].L9-1]["Weight (kg)"])*wPds;
    list[s4[y].L10-1].Score = (list[s4[y].L10-1].Inches/maxEcr)*wEcr + (list[s4[y].L10-1]["RAM (GB)"]/maxRam)*wRam + (maxPrx/list[s4[y].L10-1]["Price ($)"])*wPrx + (list[s4[y].L10-1]["SSD Memory (GB)"]/maxSsd)*wSsd +  (list[s4[y].L10-1]["Battery life (hours)"]/maxBat)*wBat +  (list[s4[y].L10-1]["Average Rating"]/maxRes)*wRes + (list[s4[y].L10-1]["Processor Speed (GHz)"]/maxGhz)*wGhz +  (maxPds/list[s4[y].L10-1]["Weight (kg)"])*wPds;
    list[s4[y].L11-1].Score = (list[s4[y].L11-1].Inches/maxEcr)*wEcr + (list[s4[y].L11-1]["RAM (GB)"]/maxRam)*wRam + (maxPrx/list[s4[y].L11-1]["Price ($)"])*wPrx + (list[s4[y].L11-1]["SSD Memory (GB)"]/maxSsd)*wSsd +  (list[s4[y].L11-1]["Battery life (hours)"]/maxBat)*wBat +  (list[s4[y].L11-1]["Average Rating"]/maxRes)*wRes + (list[s4[y].L11-1]["Processor Speed (GHz)"]/maxGhz)*wGhz +  (maxPds/list[s4[y].L11-1]["Weight (kg)"])*wPds;
    list[s4[y].L12-1].Score = (list[s4[y].L12-1].Inches/maxEcr)*wEcr + (list[s4[y].L12-1]["RAM (GB)"]/maxRam)*wRam + (maxPrx/list[s4[y].L12-1]["Price ($)"])*wPrx + (list[s4[y].L12-1]["SSD Memory (GB)"]/maxSsd)*wSsd +  (list[s4[y].L12-1]["Battery life (hours)"]/maxBat)*wBat +  (list[s4[y].L12-1]["Average Rating"]/maxRes)*wRes + (list[s4[y].L12-1]["Processor Speed (GHz)"]/maxGhz)*wGhz +  (maxPds/list[s4[y].L12-1]["Weight (kg)"])*wPds;
    list[s4[y].L13-1].Score = (list[s4[y].L13-1].Inches/maxEcr)*wEcr + (list[s4[y].L13-1]["RAM (GB)"]/maxRam)*wRam + (maxPrx/list[s4[y].L13-1]["Price ($)"])*wPrx + (list[s4[y].L13-1]["SSD Memory (GB)"]/maxSsd)*wSsd +  (list[s4[y].L13-1]["Battery life (hours)"]/maxBat)*wBat +  (list[s4[y].L13-1]["Average Rating"]/maxRes)*wRes + (list[s4[y].L13-1]["Processor Speed (GHz)"]/maxGhz)*wGhz +  (maxPds/list[s4[y].L13-1]["Weight (kg)"])*wPds;
    list[s4[y].L14-1].Score = (list[s4[y].L14-1].Inches/maxEcr)*wEcr + (list[s4[y].L14-1]["RAM (GB)"]/maxRam)*wRam + (maxPrx/list[s4[y].L14-1]["Price ($)"])*wPrx + (list[s4[y].L14-1]["SSD Memory (GB)"]/maxSsd)*wSsd +  (list[s4[y].L14-1]["Battery life (hours)"]/maxBat)*wBat +  (list[s4[y].L14-1]["Average Rating"]/maxRes)*wRes + (list[s4[y].L14-1]["Processor Speed (GHz)"]/maxGhz)*wGhz +  (maxPds/list[s4[y].L14-1]["Weight (kg)"])*wPds;
    list[s4[y].L15-1].Score = (list[s4[y].L15-1].Inches/maxEcr)*wEcr + (list[s4[y].L15-1]["RAM (GB)"]/maxRam)*wRam + (maxPrx/list[s4[y].L15-1]["Price ($)"])*wPrx + (list[s4[y].L15-1]["SSD Memory (GB)"]/maxSsd)*wSsd +  (list[s4[y].L15-1]["Battery life (hours)"]/maxBat)*wBat +  (list[s4[y].L15-1]["Average Rating"]/maxRes)*wRes + (list[s4[y].L15-1]["Processor Speed (GHz)"]/maxGhz)*wGhz +  (maxPds/list[s4[y].L15-1]["Weight (kg)"])*wPds;
    list[s4[y].L16-1].Score = (list[s4[y].L16-1].Inches/maxEcr)*wEcr + (list[s4[y].L16-1]["RAM (GB)"]/maxRam)*wRam + (maxPrx/list[s4[y].L16-1]["Price ($)"])*wPrx + (list[s4[y].L16-1]["SSD Memory (GB)"]/maxSsd)*wSsd +  (list[s4[y].L16-1]["Battery life (hours)"]/maxBat)*wBat +  (list[s4[y].L16-1]["Average Rating"]/maxRes)*wRes + (list[s4[y].L16-1]["Processor Speed (GHz)"]/maxGhz)*wGhz +  (maxPds/list[s4[y].L16-1]["Weight (kg)"])*wPds;
    list[s4[y].L17-1].Score = (list[s4[y].L17-1].Inches/maxEcr)*wEcr + (list[s4[y].L17-1]["RAM (GB)"]/maxRam)*wRam + (maxPrx/list[s4[y].L17-1]["Price ($)"])*wPrx + (list[s4[y].L17-1]["SSD Memory (GB)"]/maxSsd)*wSsd +  (list[s4[y].L17-1]["Battery life (hours)"]/maxBat)*wBat +  (list[s4[y].L17-1]["Average Rating"]/maxRes)*wRes + (list[s4[y].L17-1]["Processor Speed (GHz)"]/maxGhz)*wGhz +  (maxPds/list[s4[y].L17-1]["Weight (kg)"])*wPds;
    list[s4[y].L18-1].Score = (list[s4[y].L18-1].Inches/maxEcr)*wEcr + (list[s4[y].L18-1]["RAM (GB)"]/maxRam)*wRam + (maxPrx/list[s4[y].L18-1]["Price ($)"])*wPrx + (list[s4[y].L18-1]["SSD Memory (GB)"]/maxSsd)*wSsd +  (list[s4[y].L18-1]["Battery life (hours)"]/maxBat)*wBat +  (list[s4[y].L18-1]["Average Rating"]/maxRes)*wRes + (list[s4[y].L18-1]["Processor Speed (GHz)"]/maxGhz)*wGhz +  (maxPds/list[s4[y].L18-1]["Weight (kg)"])*wPds;
    list[s4[y].L19-1].Score = (list[s4[y].L19-1].Inches/maxEcr)*wEcr + (list[s4[y].L19-1]["RAM (GB)"]/maxRam)*wRam + (maxPrx/list[s4[y].L19-1]["Price ($)"])*wPrx + (list[s4[y].L19-1]["SSD Memory (GB)"]/maxSsd)*wSsd +  (list[s4[y].L19-1]["Battery life (hours)"]/maxBat)*wBat +  (list[s4[y].L19-1]["Average Rating"]/maxRes)*wRes + (list[s4[y].L19-1]["Processor Speed (GHz)"]/maxGhz)*wGhz +  (maxPds/list[s4[y].L19-1]["Weight (kg)"])*wPds;
    list[s4[y].L20-1].Score = (list[s4[y].L20-1].Inches/maxEcr)*wEcr + (list[s4[y].L20-1]["RAM (GB)"]/maxRam)*wRam + (maxPrx/list[s4[y].L20-1]["Price ($)"])*wPrx + (list[s4[y].L20-1]["SSD Memory (GB)"]/maxSsd)*wSsd +  (list[s4[y].L20-1]["Battery life (hours)"]/maxBat)*wBat +  (list[s4[y].L20-1]["Average Rating"]/maxRes)*wRes + (list[s4[y].L20-1]["Processor Speed (GHz)"]/maxGhz)*wGhz +  (maxPds/list[s4[y].L20-1]["Weight (kg)"])*wPds;
    list[s4[y].L21-1].Score = (list[s4[y].L21-1].Inches/maxEcr)*wEcr + (list[s4[y].L21-1]["RAM (GB)"]/maxRam)*wRam + (maxPrx/list[s4[y].L21-1]["Price ($)"])*wPrx + (list[s4[y].L21-1]["SSD Memory (GB)"]/maxSsd)*wSsd +  (list[s4[y].L21-1]["Battery life (hours)"]/maxBat)*wBat +  (list[s4[y].L21-1]["Average Rating"]/maxRes)*wRes + (list[s4[y].L21-1]["Processor Speed (GHz)"]/maxGhz)*wGhz +  (maxPds/list[s4[y].L21-1]["Weight (kg)"])*wPds;
    list[s4[y].L22-1].Score = (list[s4[y].L22-1].Inches/maxEcr)*wEcr + (list[s4[y].L22-1]["RAM (GB)"]/maxRam)*wRam + (maxPrx/list[s4[y].L22-1]["Price ($)"])*wPrx + (list[s4[y].L22-1]["SSD Memory (GB)"]/maxSsd)*wSsd +  (list[s4[y].L22-1]["Battery life (hours)"]/maxBat)*wBat +  (list[s4[y].L22-1]["Average Rating"]/maxRes)*wRes + (list[s4[y].L22-1]["Processor Speed (GHz)"]/maxGhz)*wGhz +  (maxPds/list[s4[y].L22-1]["Weight (kg)"])*wPds;
    list[s4[y].L23-1].Score = (list[s4[y].L23-1].Inches/maxEcr)*wEcr + (list[s4[y].L23-1]["RAM (GB)"]/maxRam)*wRam + (maxPrx/list[s4[y].L23-1]["Price ($)"])*wPrx + (list[s4[y].L23-1]["SSD Memory (GB)"]/maxSsd)*wSsd +  (list[s4[y].L23-1]["Battery life (hours)"]/maxBat)*wBat +  (list[s4[y].L23-1]["Average Rating"]/maxRes)*wRes + (list[s4[y].L23-1]["Processor Speed (GHz)"]/maxGhz)*wGhz +  (maxPds/list[s4[y].L23-1]["Weight (kg)"])*wPds;
    list[s4[y].L24-1].Score = (list[s4[y].L24-1].Inches/maxEcr)*wEcr + (list[s4[y].L24-1]["RAM (GB)"]/maxRam)*wRam + (maxPrx/list[s4[y].L24-1]["Price ($)"])*wPrx + (list[s4[y].L24-1]["SSD Memory (GB)"]/maxSsd)*wSsd +  (list[s4[y].L24-1]["Battery life (hours)"]/maxBat)*wBat +  (list[s4[y].L24-1]["Average Rating"]/maxRes)*wRes + (list[s4[y].L24-1]["Processor Speed (GHz)"]/maxGhz)*wGhz +  (maxPds/list[s4[y].L24-1]["Weight (kg)"])*wPds;
 
    var rank4 = [list[s4[y].L1-1].Score,list[s4[y].L2-1].Score,list[s4[y].L3-1].Score,list[s4[y].L4-1].Score,list[s4[y].L5-1].Score,list[s4[y].L6-1].Score,list[s4[y].L7-1].Score,list[s4[y].L8-1].Score,list[s4[y].L9-1].Score,list[s4[y].L10-1].Score,list[s4[y].L11-1].Score,list[s4[y].L12-1].Score,list[s4[y].L13-1].Score,list[s4[y].L14-1].Score,list[s4[y].L15-1].Score,list[s4[y].L16-1].Score,list[s4[y].L17-1].Score,list[s4[y].L18-1].Score,list[s4[y].L19-1].Score,list[s4[y].L20-1].Score,list[s4[y].L21-1].Score,list[s4[y].L22-1].Score,list[s4[y].L23-1].Score,list[s4[y].L24-1].Score];
    var rank4Sorted = rank4.sort(function(a,b){return b-a});
    
    list[s4[y].L1-1].Rank = rank4Sorted.indexOf(list[s4[y].L1-1].Score) +1;
    list[s4[y].L2-1].Rank = rank4Sorted.indexOf(list[s4[y].L2-1].Score) +1;
    list[s4[y].L3-1].Rank = rank4Sorted.indexOf(list[s4[y].L3-1].Score) +1;
    list[s4[y].L4-1].Rank = rank4Sorted.indexOf(list[s4[y].L4-1].Score) +1;
    list[s4[y].L5-1].Rank = rank4Sorted.indexOf(list[s4[y].L5-1].Score) +1;
    list[s4[y].L6-1].Rank = rank4Sorted.indexOf(list[s4[y].L6-1].Score) +1;
    list[s4[y].L7-1].Rank = rank4Sorted.indexOf(list[s4[y].L7-1].Score) +1;
    list[s4[y].L8-1].Rank = rank4Sorted.indexOf(list[s4[y].L8-1].Score) +1;
    list[s4[y].L9-1].Rank = rank4Sorted.indexOf(list[s4[y].L9-1].Score) +1;
    list[s4[y].L10-1].Rank = rank4Sorted.indexOf(list[s4[y].L10-1].Score) +1;
    list[s4[y].L11-1].Rank = rank4Sorted.indexOf(list[s4[y].L11-1].Score) +1;
    list[s4[y].L12-1].Rank = rank4Sorted.indexOf(list[s4[y].L12-1].Score) +1;
    list[s4[y].L13-1].Rank = rank4Sorted.indexOf(list[s4[y].L13-1].Score) +1;
    list[s4[y].L14-1].Rank = rank4Sorted.indexOf(list[s4[y].L14-1].Score) +1;
    list[s4[y].L15-1].Rank = rank4Sorted.indexOf(list[s4[y].L15-1].Score) +1;
    list[s4[y].L16-1].Rank = rank4Sorted.indexOf(list[s4[y].L16-1].Score) +1;
    list[s4[y].L17-1].Rank = rank4Sorted.indexOf(list[s4[y].L17-1].Score) +1;
    list[s4[y].L18-1].Rank = rank4Sorted.indexOf(list[s4[y].L18-1].Score) +1;
    list[s4[y].L19-1].Rank = rank4Sorted.indexOf(list[s4[y].L19-1].Score) +1;
    list[s4[y].L20-1].Rank = rank4Sorted.indexOf(list[s4[y].L20-1].Score) +1;
    list[s4[y].L21-1].Rank = rank4Sorted.indexOf(list[s4[y].L21-1].Score) +1;
    list[s4[y].L22-1].Rank = rank4Sorted.indexOf(list[s4[y].L22-1].Score) +1;
    list[s4[y].L23-1].Rank = rank4Sorted.indexOf(list[s4[y].L23-1].Score) +1;
    list[s4[y].L24-1].Rank = rank4Sorted.indexOf(list[s4[y].L24-1].Score) +1;
 };


$.ajax({
    url: 'http://localhost:80/webapp/server.php',
    type: 'POST',
    data: {
        button: "TASK"
    },
    success: function (data) {
        console.log(data)
    }
})

var order1 = Math.floor(Math.random() * 2);
var order2 = Math.floor(Math.random() * 2);
console.log(order1)
console.log(order2)
s1.sort((a,b) => 0.5 - Math.random()); // Mélange tout les trials a l'interieur de leur bloc
s2.sort((a,b) => 0.5 - Math.random());
s3.sort((a,b) => 0.5 - Math.random());
s4.sort((a,b) => 0.5 - Math.random());
//s5.sort((a,b) => 0.5 - Math.random()); //n'existe plus à suprimmer
//s6.sort((a,b) => 0.5 - Math.random()); //n'existe plus à suprimmer
//scenario3.sort((a,b) => 0.5 - Math.random()); // Choice scenario n'existe plus à suprimmer

var scenario = [];
var scenario2 = [];


// Ordre changer de 5 produits à 6 produits

    scenario = s1
                  


    scenario2 = s4;
    scenario2.push(s3[0],s2[0]);
    



    var listtemp = []; //Liste de laptop du scenario a  imprimer
    var listScore = []; //Liste de laptop avec les scores
    var sce = 0; //Numero du scenario
    var sce2 = 0;
   // var sce3 = 0;
    var answerArray = [] // Liste qui va contenir les donnees
    var nadapt = 0;
    var blank = ["---------","---------","---------","---------","---------","---------","---------","---------","---------"]
    var listLength;
    var timer;
    var arrayPush = [-10,-10,-1,-1,-1,-1,-1,-1,-1,-1,-10]; //Array vide de la classification de threads
    var timeout = 0; 
    var sumArr = 0
    var scoreGlobal=0 //Score de bonne reponse  (Partie à développer)
    var autoAdapt = 1
    console.log(autoAdapt)
    if (autoAdapt==1){alert(" ADAPT Durant ce premier bloc, nous allons vous aider si vous avez des difficultés à choisir le meilleur produit. Les moins bons choix seront retirés de l'écran à certains moments. Appuyer sur Enter pour continuer")}
   else{alert(" NON-ADAPT Veuillez choisir le meilleur produit dans le tableau. Aucune aide ne sera fournie. Appuyé sur Enter pour continuer.")}
    var timeTrial
    answerArray.push({"Participant":numeroParticipantPrompt,"autoAdapt":autoAdapt,"Time":Date.now(),"Score Ecran":fEcr,"Score Ram":fRam,"Score Prix":fPrx,"Score SSD":fSsd,"Score Batterie":fBat,"Score Resolution":fRes,"Score CPU":fGhz,"Score Poids":fPds});
    var answerJs

    var list2Score = JSON.parse(JSON.stringify(list));
    var list2 = JSON.parse(JSON.stringify(list)); // Pour creer un deep clone puisqu'on veut pas delete le score de la liste originale
    for (y=0;y<list2.length;y++){delete list2[y].Score;delete list2[y].Rank};
    var list3Score = JSON.parse(JSON.stringify(list));
    var list3 = JSON.parse(JSON.stringify(list)); // Pour creer un deep clone puisqu'on veut pas delete le score de la liste originale
    for (y=0;y<list3.length;y++){delete list3[y].Score;delete list3[y].Rank};
    var list4Score = JSON.parse(JSON.stringify(list));
    var list4 = JSON.parse(JSON.stringify(list)); // Pour creer un deep clone puisqu'on veut pas delete le score de la liste originale
    for (y=0;y<list4.length;y++){delete list4[y].Score;delete list4[y].Rank};



	
//Refresh la liste temporaire avec le nouveau scenario   
function refreshscenario(){
        // Liste Front End
	listtemp = [list2[scenario[sce].L1-1],list2[scenario[sce].L2-1],list2[scenario[sce].L3-1],list2[scenario[sce].L4-1],list2[scenario[sce].L5-1],list2[scenario[sce].L6-1],list2[scenario[sce].L7-1],list2[scenario[sce].L8-1],list2[scenario[sce].L9-1],list2[scenario[sce].L10-1],list2[scenario[sce].L11-1],list2[scenario[sce].L12-1],list2[scenario[sce].L13-1],list2[scenario[sce].L14-1],list2[scenario[sce].L15-1],list2[scenario[sce].L16-1],list2[scenario[sce].L17-1],list2[scenario[sce].L18-1],list2[scenario[sce].L19-1],list2[scenario[sce].L20-1],list2[scenario[sce].L21-1],list2[scenario[sce].L22-1],list2[scenario[sce].L23-1],list2[scenario[sce].L24-1]];
    
    listtemp = listtemp.filter(function( element ) { // Remove undefined values | list with under 15 products
        return element !== undefined;
     });

        // Liste Back End avec scores
    listScore = [list2Score[scenario[sce].L1-1],list2Score[scenario[sce].L2-1],list2Score[scenario[sce].L3-1],list2Score[scenario[sce].L4-1],list2Score[scenario[sce].L5-1],list2Score[scenario[sce].L6-1],list2Score[scenario[sce].L7-1],list2Score[scenario[sce].L8-1],list2Score[scenario[sce].L9-1],list2Score[scenario[sce].L10-1],list2Score[scenario[sce].L11-1],list2Score[scenario[sce].L12-1],list2Score[scenario[sce].L13-1],list2Score[scenario[sce].L14-1],list2Score[scenario[sce].L15-1],list2Score[scenario[sce].L16-1],list2Score[scenario[sce].L17-1],list2Score[scenario[sce].L18-1],list2Score[scenario[sce].L19-1],list2Score[scenario[sce].L20-1],list2Score[scenario[sce].L21-1],list2Score[scenario[sce].L22-1],list2Score[scenario[sce].L23-1],list2Score[scenario[sce].L24-1]];
    
    listScore = listScore.filter(function( element ) {  // Remove undefined values | list with under 15 products
        return element !== undefined;
     });
    trial = scenario[sce].Trial
    sce=sce+1;
    lengthPrint = listtemp.length
    listLength = listtemp.length;
    timer = 180;
    jQuery('#countdown').html('');
    $('#countdown').append('Temps restant: '+[timer]+' secondes');
    timeTrial = Date.now();
    nadapt = 0
    
	};
	
; //Appel au debut pour alimenter le premier tableau
console.log(scenario2)
function refreshscenario2(){
    autoAdapt==1
    
//monter jusqu'à L24
        listtemp = [list3[scenario2[sce2].L1-1],list3[scenario2[sce2].L2-1],list3[scenario2[sce2].L3-1],list3[scenario2[sce2].L4-1],list3[scenario2[sce2].L5-1],list3[scenario2[sce2].L6-1],list3[scenario2[sce2].L7-1],list3[scenario2[sce2].L8-1],list3[scenario2[sce2].L9-1],list3[scenario2[sce2].L10-1],list3[scenario2[sce2].L11-1],list3[scenario2[sce2].L12-1],list3[scenario2[sce2].L13-1],list3[scenario2[sce2].L14-1],list3[scenario2[sce2].L15-1],list3[scenario2[sce2].L16-1],list3[scenario2[sce2].L17-1],list3[scenario2[sce2].L18-1],list3[scenario2[sce2].L19-1],list3[scenario2[sce2].L20-1],list3[scenario2[sce2].L21-1],list3[scenario2[sce2].L22-1],list3[scenario2[sce2].L23-1],list3[scenario2[sce2].L24-1]];
        
        listtemp = listtemp.filter(function( element ) { // Remove undefined values | list with under 15 products
            return element !== undefined;
         });
    
        listScore = [list[scenario2[sce2].L1-1],list[scenario2[sce2].L2-1],list[scenario2[sce2].L3-1],list[scenario2[sce2].L4-1],list[scenario2[sce2].L5-1],list[scenario2[sce2].L6-1],list[scenario2[sce2].L7-1],list[scenario2[sce2].L8-1],list[scenario2[sce2].L9-1],list[scenario2[sce2].L10-1],list[scenario2[sce2].L11-1],list[scenario2[sce2].L12-1],list[scenario2[sce2].L13-1],list[scenario2[sce2].L14-1],list[scenario2[sce2].L15-1],list[scenario2[sce2].L16-1],list[scenario2[sce2].L17-1],list[scenario2[sce2].L18-1],list[scenario2[sce2].L19-1],list[scenario2[sce2].L20-1],list[scenario2[sce2].L21-1],list[scenario2[sce2].L22-1],list[scenario2[sce2].L23-1],list[scenario2[sce2].L24-1]];
        
        listScore = listScore.filter(function( element ) {  // Remove undefined values | list with under 15 products
            return element !== undefined;
        
         });
        trial = scenario2[sce2].Trial
        sce2 =sce2+1
        lengthPrint = listtemp.length
        listLength = listtemp.length;
        timer = 180;
        jQuery('#countdown').html('');
        $('#countdown').append('Temps restant: '+[timer]+' secondes');
        timeTrial = Date.now();
        nadapt = 0
    };

    var scenLevel = 0
if (autoAdapt == 1) {refreshscenario2(); scenLevel = 2} else {refreshscenario(); scenLevel = 1}
 

//fonction qui reset le tableau pour passer au prochain scenario
function reset(){ //tout changer les 5 pour 6 **
        
		var i;
			jQuery('#content').html('');
            

    //BLOC 1.1
           if (sce==1 && scenLevel==1) {refreshscenario2();

           $.ajax({
            url: 'http://localhost:80/webapp/server.php',
            type: 'POST',
            data: {
                button: "PAUSE"
            },
            success: function (data) {
                console.log(data)
            }})
            autoAdapt=1
            console.log("dabut 1")
        alert(" ADAPT Durant ce bloc, nous allons vous aider si vous avez des difficultés à choisir le meilleur produit. Les moins bons choix seront retirés de l'écran à certains moments")
        alert("Veuillez appuyer sur Enter pour passer au prochain bloc");

        $.ajax({
            url: 'http://localhost:80/webapp/server.php',
            type: 'POST',
            data: {
                button: "TASK"
            },
            success: function (data) {
                console.log(data)
            }
        })
        scenLevel = 2
        refreshscenario2();}


    //BLOC 2.1
           else if (sce2<3 && scenLevel==2){ console.log("fin 1");
           alert(" ADAPT Durant ce bloc, nous allons vous aider si vous avez des difficultés à choisir le meilleur produit. Les moins bons choix seront retirés de l'écran à certains moments");
           alert("Veuillez appuyer sur Enter pour passer au prochain bloc");
            refreshscenario2();autoAdapt=1 }

    //FIN BLOC 2.1
    else if (sce2==3 && scenLevel==2 && sce==0) {

        $.ajax({
            url: 'http://localhost:80/webapp/server.php',
            type: 'POST',
            data: {
                button: "PAUSE"
            },
            success: function (data) {
                console.log(data)
            }})
            autoAdapt=0
          alert(" NON-ADAPT Veuillez choisir le meilleur produit dans le tableau. Aucune aide ne sera fournie.")
        
        alert("Veuillez appuyer sur Enter pour passer au prochain bloc"); //Extra au cas où l'utilisateur pèse sur OK par mégarde
        answerArray.push({"Participant":numeroParticipantPrompt,"Time":Date.now()});

        $.ajax({
            url: 'http://localhost:80/webapp/server.php',
            type: 'POST',
            data: {
                button: "TASK"
            },
            success: function (data) {
                console.log(data)
            }

        
        })
        
        scenLevel = 1
        refreshscenario();
       }

           //BLOC FIN

           else if (sce2==3 && sce==1){


            alert("C'est la fin, attendez les instructions avant de passer à la prochaine tâche"); //Pause dans la transition de scenario
            listtemp=blank;

        }

    //BLOC 2.2
       else if (/*sce2>9 && */sce2<18 && scenLevel==2) {refreshscenario2()}

    //FIN BLOC 2.2

            else if (sce2==18 && scenLevel==2){

                $.ajax({
                    url: 'http://localhost:80/webapp/server.php',
                    type: 'POST',
                    data: {
                        button: "PAUSE"
                    },
                    success: function (data) {
                        console.log(data)
                    }
                })

                var blob = new Blob([JSON.stringify(answerArray)], {type: "text/plain;charset=utf-8"}); //save data du bloc 1
                var path = "Bloc2_"+numeroParticipantPrompt+".txt"
                saveAs(blob, path);
                answerArray=[] //reset le file pour pas qu'il devienne trop lourd

                document.getElementById("content").value="";
                alert("Ne pas fermer ce message!\n C'est la fin du bloc 2.3, veuillez attendre les procédures pour continuer"); //Pause dans la transition de scenario
                alert("Ne cliquez pas sur OK");
                
                autoAdapt=0

                alert("Veuillez appuyer sur Enter pour passer au bloc 1"); //Extra au cas où l'utilisateur pèse sur OK par mégarde
                answerArray.push({"Participant":numeroParticipantPrompt,"Time":Date.now()});

                $.ajax({
                    url: 'http://localhost:80/webapp/server.php',
                    type: 'POST',
                    data: {
                        button: "TASK"
                    },
                    success: function (data) {
                        console.log(data)
                    }
                })
                scenLevel = 1
                
                refreshscenario()

            }

             //FIN DE LA COLLECTE

           else {

            var blob = new Blob([JSON.stringify(answerArray)], {type: "text/plain;charset=utf-8"}); //save data du bloc 1
            var path = "Bloc2_"+numeroParticipantPrompt+".txt"
            saveAs(blob, path);

            $.ajax({
                url: 'http://localhost:80/webapp/server.php',
                type: 'POST',
                data: {
                    button: "PAUSE"
                },
                success: function (data) {
                    console.log(data)
                }
            })

            alert("Fin du 2e bloc, veuillez appuyer sur OK et passer au questionnaire"); //Pause dans la transition de scenario
            document.getElementById("img").src="https://www.affichez.ca/wp-content/uploads/2014/01/blank-image.png";
            listtemp=blank;
           }

           //A FAIRE || Pousser le download du csv avec les données quand l'utilisateur fini le test || Quand il arrive a sce3 = scenario3.length

            arrayPush = [-1,-1,-1,-1,-1,-1,-1,-1,-1,-10] ;     //Independance des trials
            base=0; //debug si le produit à enlever est le premier
            document.getElementById("answer").value = "";
            document.getElementById("content").appendChild(buildTable(listtemp));			//imprime le contenu de listtemp dans le div
			};

		
//Fonction pour creer la table front end
	function buildTable(data) {
    var table = document.createElement("table");
    table.className="gridtable";
    var thead = document.createElement("thead");
    var tbody = document.createElement("tbody");
    var headRow = document.createElement("tr");
    ["ID Produit","Taille de l'écran (pouces)","RAM (GB)","Prix ($)","Mémoire SSD (GB)","Batterie (heures)","Résolution de l'écran (px)","Vitesse du processeur (GHz)","Poids (kg)","Recommandations"].forEach(function(el) {
      var th=document.createElement("th");
      th.appendChild(document.createTextNode(el));
      headRow.appendChild(th);
    });
    thead.appendChild(headRow);
    table.appendChild(thead); 
    data.forEach(function(el) {
      var tr = document.createElement("tr");
      for (var o in el) {  
        var td = document.createElement("td");
        td.appendChild(document.createTextNode(el[o]))
        tr.appendChild(td);
      }
      tbody.appendChild(tr);  
    });
    table.appendChild(tbody);   
    return table
}

// Lancer le tableau lorsque la page est lancee
window.onload=function() {
  document.getElementById("content").appendChild(buildTable(listtemp)); 
};


//To print value they click on the table to the input field

    $('#content').on('click', 'td', function(){
        document.getElementById("answer").value =$(this).html();
    });



//Processus de validation de la reponse envoyee et appel au reset
//$('#button1').click(function() {
  $(document).on('keypress',function(e) {
        if(e.which == 13) {
eval()        
} //ferme le test

})

//fonction qui évalue la réponse de l'utilisateur 

function eval() {var productNumber =listtemp.length
    var	bestScore=listScore[0].Score;
    var	bestId=listScore[0].Product_ID;
    
    
          for (j = 1; j <= productNumber; j++) {
            if (j < productNumber) {
                if (listScore[j].Score > bestScore) {
                    bestScore = listScore[j].Score
                    bestId = listScore[j].Product_ID
                }
            }
    
            else {
                
               answerJs = document.getElementById("answer").value;
    
                if (answerJs == bestId) {
                        scoreGlobal = scoreGlobal + 1;
                        answerArray.push({"Trial":trial,"listLength":listLength,"originalLength":lengthPrint,"answerJs":answerJs,"rankAnswer":list[answerJs-1].Rank,"bestId":bestId,"Score":scoreGlobal,"Time":Date.now(),"Trial time":Date.now()-timeTrial});
                        reset();
    console.log(answerArray);
                }
                else {
                    console.log(answerJs)
                        answerArray.push({"Trial":trial,"listLength":listLength,"originalLength":lengthPrint,"answerJs":answerJs,"rankAnswer":list[answerJs-1].Rank,"bestId":bestId,"Score":scoreGlobal,"Time":Date.now(),"Trial time":Date.now()-timeTrial});
                        reset();
                        console.log(answerArray);
                }
            }
        } }




setInterval(function(){
console.log(autoAdapt)
console.log(sumArr)
//Intervale qui va chercher le contenu du fichier JSON à chaque 0.5 secondes

// Classification
// 0 --> very low
// 1 --> average low
// 2 --> cummulative average
// 3 --> average high
// 4 --> ver high

$.ajax({
        type: "GET",
        url: "short.json",
        async: "false", //Puisqu'il y a un ordre d'execution
        success: function(result) {
          var stamp = JSON.parse(result);

          arrayPush.push(Math.floor(stamp.Classification*0.35)); //  À modifier au besoin
/* 
          if (timeout >11) // Cette condition nous permet d'avoir un délai de 10x 0.5 secondes
         { arrayPush.shift() } //Supprime la première donnée pour garder un array = 10
    */}}) 
    arrayPush.shift()

        timeout = timeout +1
        sumArr=0;
        sumArr= arrayPush.reduce(function(arrayPush, b) { return arrayPush + b; }, 0); //Somme les 10 dernières données
console.log(arrayPush)

        if (sumArr>1/* && Math.round(listLength*0.25)==2 */&& autoAdapt==1 && timer>11 && nadapt == 0)
            {var preAnswer = prompt("Si vous avez déjà choisi un produit, veuillez écrire son numéro maintenant et appuyez sur OK. Sinon, laissez 361 dans la zone de texte et appuyez sur OK", "361");
                arrayPush = [-10,0,0,0,-1,-1,-1,-1,-1,-10];adapt(); sumArr=0,nadapt=1}
            

    }, 500);
var onlyOneAdapt = 0;
//à adapter en fonction des labels. Prendre les meilleurs au lieu des pires
console.log(listScore)


var shuffleLabel1 = ["Meilleur produit selon PC Mag","Meilleur produit selon d'autres consommateurs similaires à vous","Meilleur produit selon vos préferences inscrites au système"]
var shuffleLabel2 = ["Meilleur produit selon PC Mag","Meilleur produit selon d'autres consommateurs similaires à vous","Meilleur produit selon vos préferences inscrites au système"]


shuffleLabel1.sort((a,b) => 0.5 - Math.random());
shuffleLabel2.sort((a,b) => 0.5 - Math.random());
console.log(shuffleLabel1)
console.log(shuffleLabel2)

function adapt() {



    if (sce2==1){label = shuffleLabel1[0]}
    else if (sce2==2) {label = shuffleLabel1[1]}
    else if (sce2==3) {label = shuffleLabel1[2]}


         answerArray.push({"Trial":trial,"listLength":listLength,"Time":Date.now()});           
                   
                    if (listtemp.length == 6 && listScore[0].Rank < 3)  {listtemp[0].Feedback=label}
                    if (listtemp.length == 6 && listScore[1].Rank < 3)  {listtemp[1].Feedback=label}
                    if (listtemp.length == 6 && listScore[2].Rank < 3)  {listtemp[2].Feedback=label}
                    if (listtemp.length == 6 && listScore[3].Rank < 3)  {listtemp[3].Feedback=label}
                    if (listtemp.length == 6 && listScore[4].Rank < 3)  {listtemp[4].Feedback=label}
                    if (listtemp.length == 6 && listScore[5].Rank < 3)  {listtemp[5].Feedback=label} // 2 adaptations for 6 products matrix

                    if (listtemp.length == 24 && listScore[0].Rank < 6)  {listtemp[0].Feedback=label}
                    if (listtemp.length == 24 && listScore[1].Rank < 6)  {listtemp[1].Feedback=label}
                    if (listtemp.length == 24 && listScore[2].Rank < 6)  {listtemp[2].Feedback=label}
                    if (listtemp.length == 24 && listScore[3].Rank < 6)  {listtemp[3].Feedback=label}
                    if (listtemp.length == 24 && listScore[4].Rank < 6)  {listtemp[4].Feedback=label}
                    if (listtemp.length == 24 && listScore[5].Rank < 6)  {listtemp[5].Feedback=label}
                    if (listtemp.length == 24 && listScore[6].Rank < 6)  {listtemp[6].Feedback=label}
                    if (listtemp.length == 24 && listScore[7].Rank < 6)  {listtemp[7].Feedback=label}
                    if (listtemp.length == 24 && listScore[8].Rank < 6)  {listtemp[8].Feedback=label}
                    if (listtemp.length == 24 && listScore[9].Rank < 6)  {listtemp[9].Feedback=label}
                    if (listtemp.length == 24 && listScore[10].Rank < 6)  {listtemp[10].Feedback=label}
                    if (listtemp.length == 24 && listScore[11].Rank < 6)  {listtemp[11].Feedback=label}
                    if (listtemp.length == 24 && listScore[12].Rank < 6)  {listtemp[12].Feedback=label}
                    if (listtemp.length == 24 && listScore[13].Rank < 6)  {listtemp[13].Feedback=label}
                    if (listtemp.length == 24 && listScore[14].Rank < 6)  {listtemp[14].Feedback=label}
                    if (listtemp.length == 24 && listScore[15].Rank < 6)  {listtemp[15].Feedback=label}
                    if (listtemp.length == 24 && listScore[16].Rank < 6)  {listtemp[16].Feedback=label}
                    if (listtemp.length == 24 && listScore[17].Rank < 6)  {listtemp[17].Feedback=label}
                    if (listtemp.length == 24 && listScore[18].Rank < 6)  {listtemp[18].Feedback=label}
                    if (listtemp.length == 24 && listScore[19].Rank < 6)  {listtemp[19].Feedback=label}
                    if (listtemp.length == 24 && listScore[20].Rank < 6)  {listtemp[20].Feedback=label}
                    if (listtemp.length == 24 && listScore[21].Rank < 6)  {listtemp[21].Feedback=label}
                    if (listtemp.length == 24 && listScore[22].Rank < 6)  {listtemp[22].Feedback=label}
                    if (listtemp.length == 24 && listScore[23].Rank < 6)  {listtemp[23].Feedback=label} //5 adaptations for 24 products

               jQuery('#content').html('');
                document.getElementById("content").appendChild(buildTable(listtemp));
            }

           
            

//Timer pour reset le tableau quand le temps est écoulé + affichage sur html


setInterval(function(){
         timer=timer-1;
        // $( ".container" ).append( $( "h2" ) );
         jQuery('#countdown').html('');
         $('#countdown').append('Temps restant: '+[timer]+' secondes');
         if(timer==0) {document.getElementById("answer").value = 360;
         eval();
        }}, 1000)
