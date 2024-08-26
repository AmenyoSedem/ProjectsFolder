// Asynchronous Programming

// You order tomato soup
// Meanwhile you continue your conversation with a friend
// RESOLVED - Your server brings you the soup
// REJECTED - No soup today

// const orderSoup = () => console.log("This is your soup");

// console.log("You start your convo");
// setTimeout(orderSoup, 2000); // 2000 ms is 2s
// console.log("Still speakiing");

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    isReady = [true, false][Math.floor(Math.random() * 2)];
    // ternary operators
    isReady ? resolve("Soup is ready") : reject("No soup today");
  }, 1000);
});

// RESOLVED - if waiter brings you soup
// tip the waiter
// you pay for the soup

// REJECTED - if there is no soup
// leave a bad review
// no tip

// null or undefined is a special value that can be used instead o zero
// For example there is no way that the default price of something will be zero
const getSoup = async () => {
  const data = { rating: null, tip: null, pay: null, review: null };
  try {
    const soup = await promise1;
    console.log({ soup });
    data.rating = 5;
    data.tip = 0.2;
    data.pay = 10;
    data.review = 5;
    return data;
  } catch (error) {
    console.log({ error });
    data.rating = 1;
    data.tip = 0;
    data.pay = 0;
    data.review = 1;
    return data;
  }
};

getSoup().then((value) => console.log(value));

// console.log(
//   promise1
//     .then((success) => console.log({ success }))
//     .catch((error) => console.log({ error }))
// );

// fetch("https://dog.ceo/api/breeds/image/random")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

//   Async & Await
// Rules for using async & await
// 1. You must create a function
// 2. You must use keyword async
// 3. You must use keyword await

const getDog = async () => {
  url = "https://dog.ceo/api/breeds/image/random";
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
};

getDog();
