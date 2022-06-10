// Use this sample to create your own voice commands
intent('What does this app do','What is this App?', (p)=> {
    p.play('This App will show you latest News');
    p.play('To get started , say "Tell me the latest news"');
})

// making api calls for news from certain source
const NEWS_API_KEY="71699aeb2a1345b08adfd2ecb788473d";
let savedArticles=[];

//api call for news based on source
intent('(Tell|Give) (me the|) (latest|recent|) news from $(source* (.*))',(p)=>{
    
   let  NEWS_API_URL=`https://newsapi.org/v2/top-headlines?apiKey=${NEWS_API_KEY}`;  //common api url 
   console.log(NEWS_API_URL);
   if(p.source.value) // if source is available
   {
       NEWS_API_URL=`${NEWS_API_URL}&sources=${(p.source.value).toLowerCase().split(" ").join("-")}` // add source value to url and process it so that correct request can be made 
       console.log(NEWS_API_URL) // for testing
      
   }
     api.axios.get(NEWS_API_URL)
        .then((response) => {
            console.log(response.data);
            let {articles} = response.data;
            console.log(articles.length)
            if(!articles.length){
                 p.play("Sorry! Please Try another source")
                 return;        
            }
              console.log(articles)
              savedArticles=articles;
              p.play(`Here is the (latest|recent) news from ${p.source.value}`);
              p.play({command:'top-headline',articles});
              
              p.play("Would you like me to read the titles?")
              p.then(confirm);
        })
        .catch((error) => {
            console.log(error);
            p.play('Could not get News from source. Try Again!');
        });
    
});


//api call for news based on terms
intent('(Tell|Give|What\'s up|News ) (me the|with|about|realted to) (latest|recent|) $(term* (.*))',(p)=>{
    
   
   let  NEWS_API_URL=`https://newsapi.org/v2/everything&apiKey=${NEWS_API_KEY}`;  //common api url 
   if(p.term.value) // if source is available
   {
       
       NEWS_API_URL=`https://newsapi.org/v2/everything?q=${p.term.value}&apiKey=${NEWS_API_KEY}`
       console.log(NEWS_API_URL) // for testing
      
   }
    api.axios.get(NEWS_API_URL)
        .then((response) => {
            console.log(response.data);
            let {articles} = response.data;
            console.log(articles.length)
            if(!articles.length){
                 p.play("Sorry! Please Try another Term")
                 return;        
            }
              console.log(articles)
              savedArticles=articles;
              p.play(`Here are the (latest|recent) news related to ${p.term.value}`);
              p.play({command:'top-headline',articles});
              
              p.play("Would you like me to read the headlines?")
              p.then(confirm);
        })
        .catch((error) => {
            console.log(error);
            p.play('Could not get News related to this term. Try Again!');
        });
    
})


// making api call for categories
let CATEGORIES=["Business","Entertainment","General","Health","Science","Sports","Technology"]; //arrays of categories
let category_intent=`${CATEGORIES.map((category) =>`${category}~${category}`).join('|')}`;
console.log(category_intent);
intent(`(Show|what is|tell me|what's|what are|what're|read) (the|) (recent|latest|) $(N news|headlines) (in|about|on|) $(C~ ${category_intent})`,
  `(read|show|get|bring me|give me) (the|) (recent|latest) $(C~ ${category_intent}) $(N news|headlines)`, (p) => {
    let NEWS_API_URL = `https://newsapi.org/v2/top-headlines?apiKey=${NEWS_API_KEY}&country=in`;
     
    if(p.C.value) // if source is available
       NEWS_API_URL=`${NEWS_API_URL}&category=${p.C.value}`
    
     api.axios.get(NEWS_API_URL)
        .then((response) => {
            console.log(response.data);
            let {articles} = response.data;
            console.log(articles.length)
            if(!articles.length){
                 p.play("Sorry! Please Try another Category")
                 return;        
            }
              console.log(articles)
              savedArticles=articles;
              p.play({command:'top-headline',articles});
              if(p.C.value)
                   p.play(`Here are the articles related to ${p.C.value} category`);
              else 
                   p.play(`Here are the News`);
              
              p.play("Would you like me to read the headlines?")
              p.then(confirm);
              
        })
        .catch((error) => {
            console.log(error);
            p.play('Could not get News related to this category. Try Again!');
        });
      
})

intent(`(Go|) back`,(p)=>{
    p.play("Yeah Sure! Going back to home page");
    p.play({command:'newHeadlines', articles: [] })
})

intent(`Open article number $(number* (.*))`, (p)=>{
    if(p.number.value<=20){
       p.play({command:'openArticle', number:p.number.value,articles: savedArticles})
       p.play(`Opening article number ${p.number.value}`)
     }
    else
        p.play("Try number within the range of 20")
    
})

// context (dialog between alan and app)
const confirm = context( () => {
    intent('yes',async (p)=> {     
        //don't use for each or map with async
        p.play('Press the Mic button to stop me')
        for(let i=0;i<savedArticles.length;i++){
            
            p.play({command: 'highlight', articles: savedArticles[i]})
            p.play(`${savedArticles[i].title}`);
        }
       
    })
    
    intent('no',(p)=>{
        p.play(`Sure`);
    })
})


