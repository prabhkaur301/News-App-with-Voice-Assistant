// Use this sample to create your own voice commands
intent('What does this app do','What is this App?', (p)=> {
    p.play('This App will show you latest News');
    p.play('To get started , say "Tell me the latest news"');
})

// making api calls for news from certain source
const NEWS_API_KEY="2d945e3bd25341139dd7a3af9cd18340";
let savedArticles=[];

// //api call for news based on source
// intent('(Tell|Give|) (me the|) (latest|recent) news from $(source* (.*))',(p)=>{
//     
//   
//    let  NEWS_API_URL=`https://newsapi.org/v2/top-headlines?apiKey=${NEWS_API_KEY}`;  //common api url 
//    if(p.source.value) // if source is available
//    {
//        NEWS_API_URL=`${NEWS_API_URL}&sources=${(p.source.value).toLowerCase().split(" ").join("-")}` // add source value to url and process it so that correct request can be made 
//        console.log(NEWS_API_URL) // for testing
//       
//    }
//     api.request(NEWS_API_URL,(error,res,body)=>{ // making api call
//          if (error || res && res.statusCode !== 200) {
//             p.play('Could not get News from source. Try Again!');
//         } else {
//            let {articles}=JSON.parse(body);
//             if(!articles.length){
//                 p.play("Sorry! Please Try another source")
//                 return;
//             }
//             
//             console.log(articles)
//              savedArticles=articles;
//              p.play(`Here is the (latest|recent) news from ${p.source.value}`);
//              p.play({command:'top-headline',articles});
//            
//             }
//        })
// })

//api call for news based on terms
intent('(Tell|Give|What\'s up ) (me the|with) (latest|recent|) $(term* (.*))',(p)=>{
    
   let newsTerm=""
   let  NEWS_API_URL=`https://newsapi.org/v2/everything?q=${newsTerm}&apiKey=${NEWS_API_KEY}`;  //common api url 
   if(p.term.value) // if source is available
   {
       newsTerm=p.term.value
       NEWS_API_URL=`https://newsapi.org/v2/everything?q=${newsTerm}&apiKey=${NEWS_API_KEY}`;
       console.log(NEWS_API_URL) // for testing
      
   }
    api.request(NEWS_API_URL,(error,res,body)=>{ // making api call
         if (error || res && res.statusCode !== 200) {
            p.play('Could not get (requested|) News. Try Again!');
        } else {
           let {articles}=JSON.parse(body);
            if(!articles.length){
                p.play("Sorry! Please try something else")
                return;
            }
            
            console.log(articles)
             savedArticles=articles;
             p.play(`Here are the (latest|recent) articles (about|related to) ${p.term.value}`);
             p.play({command:'term-headline',articles});
           
            }
       })
})
