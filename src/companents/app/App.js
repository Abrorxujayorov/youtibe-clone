import './App.css';
import Bebir from '../bebir/bebir';
import Header from '../header/header';
import Movia from '../vedios/vedioApp';



function App() {
  const data = [
    {
      pic: "https://img.youtube.com/vi/PpXUTUXU7Qc/maxresdefault.jpg",
      icons: "http://aninex.com/images/srvc/web_de_icon.png",
      info: "Top 5 Programming Languages to Learn in 2021 | Best Programming Languages to Learn",
      link: "FutureCoders",
      prasmotir: "10M Views • 3 Months Ago"
    },
    {
      pic: "https://img.youtube.com/vi/YpTmcCBBdTE/maxresdefault.jpg",
      icons: "http://aninex.com/images/srvc/web_de_icon.png",
      info: "Build A Password Generator with React JS - Beginners Tutorial",
      link: "FutureCoders",
      prasmotir: "10M Views • 3 Months Ago"
    },
    {
      pic: "https://img.youtube.com/vi/46cXFUzR9XM/maxresdefault.jpg",
      icons: "https://yt3.ggpht.com/ytc/AAUvwnh53ZRIGnyzC28QrfuggCINb3cfNbNWo4Uc6qR9=s48-c-k-c0x00ffffff-no-rj",
      info: "Bella Ciao Full Song | La Casa De Papel | Money Heist | Netflix Indiauild A Password Generator with React JS - Beginners Tutorial",
      link: "Netflix",
      prasmotir: "10M Views • 11 Months Ago"
    },
    {
      pic: "https://img.youtube.com/vi/d2na6sCyM5Q/maxresdefault.jpg",
      icons: "https://yt3.ggpht.com/ytc/AAUvwnhESPVEatju_1yE-03-KLeSrnSLc5yy0RcvhPd5Lg=s48-c-k-c0x00ffffff-no-rj",
      info: "DON'T EVER GIVE UP - Elon Musk (Motivational Video)",
      link: "Chispa Motivation",
      prasmotir: "10M Views • 1 Months Ago"
    },
    {
      pic: "https://img.youtube.com/vi/2Ji-clqUYnA/maxresdefault.jpg",
      icons: "https://yt3.ggpht.com/ytc/AAUvwniaHN7MZyFEiNvdHuKMzIWnDF604Z2--O4GCMq-FA=s48-c-k-c0x00ffffff-no-rj",
      info: "Javascript Fundamentals",
      link: "Coding Addict",
      prasmotir: "179K • 8 Months Ago"
    },
    {
      pic: "https://img.youtube.com/vi/3PHXvlpOkf4/maxresdefault.jpg",
      icons: "https://yt3.ggpht.com/ytc/AAUvwnifaQZvAunS0OFb2y_cieoVjLCVjqQW8Exf3BC1gg=s48-c-k-c0x00ffffff-no-rj",
      info: "Build 15 JavaScript Projects - Vanilla JavaScript Course",
      link: "freeCodeCamp.org",
      prasmotir: "470K Views • 8 Months Ago"
    },
    {
      pic: "https://img.youtube.com/vi/3PHXvlpOkf4/maxresdefault.jpg",
      icons: "https://yt3.ggpht.com/ytc/AAUvwnifaQZvAunS0OFb2y_cieoVjLCVjqQW8Exf3BC1gg=s48-c-k-c0x00ffffff-no-rj",
      info: "Build 15 JavaScript Projects - Vanilla JavaScript Course",
      link: "freeCodeCamp.org",
      prasmotir: "470K Views • 8 Months Ago"
    },
    {
      pic: "https://img.youtube.com/vi/PpXUTUXU7Qc/maxresdefault.jpg",
      icons: "http://aninex.com/images/srvc/web_de_icon.png",
      info: "Top 5 Programming Languages to Learn in 2021 | Best Programming Languages to Learn",
      link: "FutureCoders",
      prasmotir: "10M Views • 3 Months Ago"
    },
    {
      pic: "https://img.youtube.com/vi/PpXUTUXU7Qc/maxresdefault.jpg",
      icons: "http://aninex.com/images/srvc/web_de_icon.png",
      info: "Top 5 Programming Languages to Learn in 2021 | Best Programming Languages to Learn",
      link: "FutureCoders",
      prasmotir: "10M Views • 3 Months Ago"
    },
    {
      pic: "https://img.youtube.com/vi/YpTmcCBBdTE/maxresdefault.jpg",
      icons: "http://aninex.com/images/srvc/web_de_icon.png",
      info: "Build A Password Generator with React JS - Beginners Tutorial",
      link: "FutureCoders",
      prasmotir: "10M Views • 3 Months Ago"
    },
    {
      pic: "https://img.youtube.com/vi/46cXFUzR9XM/maxresdefault.jpg",
      icons: "https://yt3.ggpht.com/ytc/AAUvwnh53ZRIGnyzC28QrfuggCINb3cfNbNWo4Uc6qR9=s48-c-k-c0x00ffffff-no-rj",
      info: "Bella Ciao Full Song | La Casa De Papel | Money Heist | Netflix Indiauild A Password Generator with React JS - Beginners Tutorial",
      link: "Netflix",
      prasmotir: "10M Views • 11 Months Ago"
    },
    {
      pic: "https://img.youtube.com/vi/46cXFUzR9XM/maxresdefault.jpg",
      icons: "https://yt3.ggpht.com/ytc/AAUvwnh53ZRIGnyzC28QrfuggCINb3cfNbNWo4Uc6qR9=s48-c-k-c0x00ffffff-no-rj",
      info: "Bella Ciao Full Song | La Casa De Papel | Money Heist | Netflix Indiauild A Password Generator with React JS - Beginners Tutorial",
      link: "Netflix",
      prasmotir: "10M Views • 11 Months Ago"
    },
    {
      pic: "https://img.youtube.com/vi/d2na6sCyM5Q/maxresdefault.jpg",
      icons: "https://yt3.ggpht.com/ytc/AAUvwnhESPVEatju_1yE-03-KLeSrnSLc5yy0RcvhPd5Lg=s48-c-k-c0x00ffffff-no-rj",
      info: "DON'T EVER GIVE UP - Elon Musk (Motivational Video)",
      link: "Chispa Motivation",
      prasmotir: "10M Views • 1 Months Ago"
    },
    {
      pic: "https://img.youtube.com/vi/2Ji-clqUYnA/maxresdefault.jpg",
      icons: "https://yt3.ggpht.com/ytc/AAUvwniaHN7MZyFEiNvdHuKMzIWnDF604Z2--O4GCMq-FA=s48-c-k-c0x00ffffff-no-rj",
      info: "Javascript Fundamentals",
      link: "Coding Addict",
      prasmotir: "179K • 8 Months Ago"
    },
    {
      pic: "https://img.youtube.com/vi/2Ji-clqUYnA/maxresdefault.jpg",
      icons: "https://yt3.ggpht.com/ytc/AAUvwniaHN7MZyFEiNvdHuKMzIWnDF604Z2--O4GCMq-FA=s48-c-k-c0x00ffffff-no-rj",
      info: "Javascript Fundamentals",
      link: "Coding Addict",
      prasmotir: "179K • 8 Months Ago"
    },
    {
      pic: "https://img.youtube.com/vi/2Ji-clqUYnA/maxresdefault.jpg",
      icons: "https://yt3.ggpht.com/ytc/AAUvwniaHN7MZyFEiNvdHuKMzIWnDF604Z2--O4GCMq-FA=s48-c-k-c0x00ffffff-no-rj",
      info: "Javascript Fundamentals",
      link: "Coding Addict",
      prasmotir: "179K • 8 Months Ago"
    },
    {
      pic: "https://img.youtube.com/vi/3PHXvlpOkf4/maxresdefault.jpg",
      icons: "https://yt3.ggpht.com/ytc/AAUvwnifaQZvAunS0OFb2y_cieoVjLCVjqQW8Exf3BC1gg=s48-c-k-c0x00ffffff-no-rj",
      info: "Build 15 JavaScript Projects - Vanilla JavaScript Course",
      link: "freeCodeCamp.org",
      prasmotir: "470K Views • 8 Months Ago"
    },
    {
      pic: "https://img.youtube.com/vi/3PHXvlpOkf4/maxresdefault.jpg",
      icons: "https://yt3.ggpht.com/ytc/AAUvwnifaQZvAunS0OFb2y_cieoVjLCVjqQW8Exf3BC1gg=s48-c-k-c0x00ffffff-no-rj",
      info: "Build 15 JavaScript Projects - Vanilla JavaScript Course",
      link: "freeCodeCamp.org",
      prasmotir: "470K Views • 8 Months Ago"
    },
    {
      pic: "https://img.youtube.com/vi/3PHXvlpOkf4/maxresdefault.jpg",
      icons: "https://yt3.ggpht.com/ytc/AAUvwnifaQZvAunS0OFb2y_cieoVjLCVjqQW8Exf3BC1gg=s48-c-k-c0x00ffffff-no-rj",
      info: "Build 15 JavaScript Projects - Vanilla JavaScript Course",
      link: "freeCodeCamp.org",
      prasmotir: "470K Views • 8 Months Ago"
    },
    {
      pic: "https://img.youtube.com/vi/3PHXvlpOkf4/maxresdefault.jpg",
      icons: "https://yt3.ggpht.com/ytc/AAUvwnifaQZvAunS0OFb2y_cieoVjLCVjqQW8Exf3BC1gg=s48-c-k-c0x00ffffff-no-rj",
      info: "Build 15 JavaScript Projects - Vanilla JavaScript Course",
      link: "freeCodeCamp.org",
      prasmotir: "470K Views • 8 Months Ago"
    }
  ]
  return (
    <div>
      <Header/>
      <div className='mainBody'>
        <Bebir/>
        <div className='videos'>
        <Movia data={data}/>
        </div>
      </div>
      </div>
  );
}

export default App;




// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '22da2f61c9mshf51c25e1e3671b3p16307ejsndd39c6c295b1',
// 		'X-RapidAPI-Host': 'youtube-search-results.p.rapidapi.com'
// 	}
// };

// fetch('https://youtube-search-results.p.rapidapi.com/youtube-search/?q=justin%2Bbieber', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));