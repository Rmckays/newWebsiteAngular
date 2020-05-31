import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  itemsPerSlide = 3;

  // slides = [
  //   {
  //     title: 'Score Receiver',
  //     description: 'Score Receiver was built to test a theory on using D3.js with React. I wanted to see if it was possible to use them together to render a page while utilizing the strengths of both libraries',
  //     github: 'https://github.com/Rmckays/ScoreReceiver',
  //     website: 'https://score-receiver.herokuapp.com/',
  //     image: 'assets/images/ScoreRec.JPG'
  //   },
  //   {
  //     title: 'Stock Maverick',
  //     description: "I have always been fascinated with the stock market. The result of this fascination is Stock Maverick, " +
  //       "a fantasy stock trading app built using the IEX API.  Stock Maverick allows me to test my investing savy without financial consquence.",
  //     github: 'https://github.com/Rmckays/StockMaverick',
  //     website: 'https://stockmaverick.azurewebsites.net/',
  //     image: 'assets/images/StockMav.JPG'
  //   },
  //   {
  //     title: 'Tweet Tweet',
  //     description: "Tweet Tweet is a fun little app I built using the Twitter API. " +
  //       "The application gets 5 random tweets based on either a user defined keyword or predefined Twitter users.  ",
  //     github: 'https://github.com/Rmckays/twitter_node',
  //     website: 'https://tweet-tweet-node.herokuapp.com',
  //     image: 'assets/images/TweetTweet.JPG'
  //   },
  //   {
  //     title: 'Comet Chat',
  //     description: "Comet Chat is a real time chat application inspired by the sunsets in my home state, Arizona. " +
  //       "The application was built to test my knowledge of ASP.NET and to learn how to implement SignalR into a real time client application. ",
  //     github: 'https://github.com/Rmckays/CometChat',
  //     website: 'https://github.com/Rmckays/CometChat',
  //     image: 'assets/images/CometChat.JPG'
  //   }
  // ];

  slides = [
    {image: 'assets/images/StockMav.JPG'},
    {image: 'assets/images/ScoreRec.JPG'},
    {image: 'assets/images/TweetTweet.JPG'},
    {image: 'assets/images/CometChat.JPG'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
