console.log('NEWS Tracker');

// Get news Container
let newsAccordian = document.getElementById('newsAccordian');

// Create AJAX GET Request.
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://gnews.io/api/v4/search?q=example&token=ac0b88503b1507a2f862b6d27d34c667', true);
// Try alternate : https://newsapi.org/v2/top-headlines?country=in&apiKey=ad1cd056e52b4c07b69be24502c5c5c8

// When response is ready.
xhr.onload = function (){
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        let newsHtml = '';
        // console.log(articles);
        articles.forEach((element, index) => {
            console.log(element, index);
            let news = `<div class="accordion-item">
                          <h2 class="accordion-header" id="heading${index}">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="false" aria-controls="collapse${index}">${index+1}). ${element.title}</button>
                          </h2>
                          <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}" data-bs-parent="#newsAccordian">
                            <div class="accordion-body">
                              <strong>${element.source.name} : </strong>${element['content']} <a href="${element['url']}" target="_blank">Read More</a> </div>
                          </div>
                        </div>`;
            newsHtml += news;
            newsAccordian.innerHTML = newsHtml;
        });
    } else {
        console.log('some error occured');
    }
}
xhr.send();
