// ADD A NEW CASE EVERY DAY: copy the last object, change the date and the content, keep the comma.
// A case appears on its date (visitor's local time) and stays in the archive afterwards.
// Preview any case before it goes live by opening the site with ?date=YYYY-MM-DD
// Fields: clues = {id: text}; rooms[].c = clue ids found in that room; suspects[].clr = clue id that clears
// that suspect (use null for the culprit); culprit = suspect id; solution.points = explanation lines.
const CASES=[
{
date:"2026-10-13",
title:"The Blue Star Theft",
intro:"At 9:30 PM, Lady Harlow found her safe open and the famous Blue Star necklace gone. The manor's doors were locked all evening, so the thief is one of five people still in the house. Don't trust a single clue on its own.",
clues:{
s1:"The safe is open and undamaged. It was opened with the correct combination, which only Lady Harlow, Julian and Edmund have ever held.",
s2:"The mantel clock's hands read 9:12, but the pendulum has been pulled out and set neatly beside it. Clocks that fall don't do that.",
s3:"A scrap of dark green velvet lies on the desk. It isn't snagged on anything; it's just resting there.",
s4:"A letter from the insurer: the Blue Star was insured for double its value last month. Lady Harlow signed the policy.",
b1:"Pia played without a pause from 8:45 to 9:30. She says she heard a muffled crash from the study near the end of her last piece, around 9:25.",
b2:"Lady Harlow waltzed with Dr. Vale until 9:20. Then she excused herself to \"freshen up\". The Colonel saw her leave.",
k1:"The cook says Edmund cut cake for twelve guests until 9:25, then came to the kitchen to fetch champagne and stayed until 9:40.",
t1:"The Colonel says Julian joined him on the terrace for cigars from 9:15 until 9:35, and never left his side.",
t2:"Caterers remember Dr. Vale at the dessert buffet from 9:20 until the alarm was raised at 9:30.",
c1:"The cloakroom attendant saw Lady Harlow heading down the east corridor around 9:23. The powder room is on the west side; the east corridor leads only to the study.",
c2:"Julian's dark green velvet jacket hangs here, intact, without a single tear. In the pocket: a creditor's final notice."
},
rooms:[
{id:"study",n:"Study",e:"🗝️",t:"The scene of the crime. You search carefully.",c:["s1","s2","s3","s4"]},
{id:"ball",n:"Ballroom",e:"🎹",t:"Music and chatter fill the room. You ask around.",c:["b1","b2"]},
{id:"kit",n:"Kitchen",e:"🍰",t:"The cook wipes her hands and talks.",c:["k1"]},
{id:"terr",n:"Terrace",e:"🚬",t:"Cool night air and cigar smoke.",c:["t1","t2"]},
{id:"cloak",n:"Cloakroom",e:"🧥",t:"Rows of coats and a watchful attendant.",c:["c1","c2"]}
],
suspects:[
{id:"lady",n:"Lady Harlow",r:"Hostess",st:"\"I waltzed with Dr. Vale, then slipped off to freshen up. I came back to chaos. That necklace is my family's heritage; I'm devastated.\"",clr:null},
{id:"edmund",n:"Edmund Pryce",r:"Butler",st:"\"I served the cake, then fetched champagne. I know where the safe is, but Lady Harlow never trusted me with the combination.\"",clr:"k1"},
{id:"ines",n:"Dr. Ines Vale",r:"Guest",st:"\"I went to the dessert buffet after our dance. I did notice the study door ajar around 8:50, but I thought nothing of it.\"",clr:"t2"},
{id:"julian",n:"Julian Cross",r:"Secretary",st:"\"I was on the terrace with the Colonel. Yes, I owe money, and everyone knows it. But I would never rob Lady Harlow.\"",clr:"t1"},
{id:"pia",n:"Pia Okonjo",r:"Pianist",st:"\"I played from quarter to nine until half past, no breaks. I did hear a thump from the study near the end.\"",clr:"b1"}
],
culprit:"lady",
solution:{
who:"Lady Harlow, the hostess herself.",
summary:"She staged the theft for the insurance money.",
points:[
"Staged time: the clock was set to 9:12 on purpose. Pia heard the real crash around 9:25.",
"The trap: at 9:12 only Julian had no alibi, and his debts made him look guilty. But he was on the terrace at 9:25, and his velvet jacket is untorn.",
"Opportunity: at 9:25 Pia, Edmund, Dr. Vale and Julian are all accounted for. Lady Harlow left the dance at 9:20 and was seen on the study corridor at 9:23.",
"Means and motive: she knew the combination, and she doubled the necklace's insurance last month."
]}
}
];
