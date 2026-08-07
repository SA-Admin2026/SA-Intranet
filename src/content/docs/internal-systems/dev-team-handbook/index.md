---
title: "Dev Team Handbook"
confluence_id: 24739851
source: Dev-Team-Handbook_24739851.html
---
## **Basic Basics**

**WiFi –** Our network is Semantic Arts Internal. The password is MtKXVH2+  
**Guest WiFi**- Our guest network is called SA-Guest. The password is Org@nize1  
**Tools -** Though there's no rules about which tools we use, we tend to use the tools and technologies listed below. It would probably be worth going down the list and taking a minute to familiarize yourself with anything you don't recognize.

- HTML, SCSS
- JavaScript
  - jQuery
  - Underscore/Lodash
  - Moment.js
  - Highcharts
- Cockpit CMS & PHP
- AllegroGraph
- Debian
- Nginx & Apache
- SPARQL
- Git
- D3.js
- Python [2.7 and 3.5]
  - Virtualenv
  - Pip
  - Flask
  - Allegrograph python client
  - Requests
  - NLTK

## **Code Style Guide**

**JavaScript**   
Lines shouldn't be longer than 80 characters. Line indentation is one tab (4 spaces wide). Prefer camelCase for variable names. Try to declare vars at the top of scope, with only one var keyword and commas between declarations (eg, var a=1, b=2, c=3![(wink)](https://semarts.atlassian.net/wiki/s/-2141288751/6452/1a940726dccdfd22f4f3d128e6624577122d8c54/_/images/icons/emoticons/wink.png)   
**SCSS**   
Generally, I prefer to create SCSS modules for each major component on the page (eg, sidebar, nav, footer, modals, etc.) as well as a module for mixins and a module for global variables. All of these are then imported at the top of a main.scss file that might have any other global styles that don't fit into a specific module.   
Within the css/scss, I prefer to order styles like this:   
#someElement {  
// any mixins you want to include  
@mixins   
// regular css rules   
margin: …  
padding: …  
etc: …   
// finally, children and parent selectors  
.child { … }  
}   
  
**Python**   
Generally follow PEP8.   
Lines shouldn't be longer than 80 characters. Line indentation is 4 spaces. Prefer underscore\_variable\_names.

## **Where things live**

**Ibeam**   
<http://ibeam.semanticarts.com>   
Ibeam is one of our offerings and our internal data management system. We use it in house for time and assignments tracking.   
  
  
**HAL-9000**   
HAL-9000 is the name of our main production server located in the supply loft behind the plotter. For security only public key access is allowed over SSH.   
This is where all of our web applications live.

|  |  |
| --- | --- |
| Internal IP | 192.168.2.38 |
| External IP | 74.93.230.113 |
| sudo user | semartsdev |

Applications on HAL:

- Ibeam
  - SemDash
- Gist-online
- Kora
- Asthma
- Apps page
- Gist visualization
- AllegroGraph

**AllegroGraph**   
AllegroGraph is our main triplestore.

|  |  |
| --- | --- |
| Primary Address | agraph.semanticarts.com |
| Alternatively | 192.168.2.38:10035 |
| Username | mkumba |
| Password | bex661 |

Agraph is primarily used as the database for Ibeam, however we also use it for experimenting with other data sets.   
  
  
**DigitalOcean**   
<http://digitalocean.com>   
DigitalOcean is our hosting provider. It's a VPS service meaning that for all intents and purposes it appears as a unique server. This is where the website (and eventually the DataCentric properties) live.

|  |  |
| --- | --- |
| IP | 104.131.101.103 |
| Root PW | Bex661&& |
| Website directory | /var/www/html/ |
| Config Directory | /etc/apache2/ |

**Cockpit CMS (the SA website)**   
Our website is managed through a CMS called cockpit. See the website documentation for more info.

|  |  |
| --- | --- |
| Location | http://semanticarts.com/cockpit/index.php/auth/login |
| username | admin |
| password | bex661&& |

**AWS**   
We use Glacier for backing up the timecard database and occasionally use EC2 for projects. See Scott or Dave for login info.   
  
  
**Exchange Server**   
For storing and sharing files in the office we use a server called ExchangeServer. It should be available in the network locations on your computer when you're on the network.   
  
  
~~**BitBucket**~~   
~~<https://bitbucket.org>~~   
~~For git hosting we use BitBucket. Ibeam, the website and (almost) all other projects live there.~~

Projects now live on GitHub.  
  
  
**More about the website**   
  
**Login**   
/cockpit/index.php/auth/login   
**Normal User**  
semarts / Bex661&&   
**Admin**  
admin / bex661&&   
  
![](/internal-systems/attachments/24739851/24739850.png)  
Once logged in, the main way to get around is by using these icons in the top right corner:   
From left to right they are: Collections, Forms, Galleries and Media Manager   
  
  
  
**Collections**   
Collections are where you will go to edit most content (articles and blog posts). Within each collection you will see a list of items and a small '+' button to add a new item. If you click on an item, you'll be taken to a screen that looks quite a bit like the WordPress post/page screen.   
**Articles**

- Fields with an asterisk after the name are required.
- The Human-Readable category label and the category\_url should match, eg, if you selecte "Software Architecture" from one you should select "software-architecture" from the other. If they don't match then you'll get articles that are listed with one but labeled as the other.
- The rail is a small sidebar that appears at the top of an article intended for short lists, key facts and things like that.
- "How the article will appear in the URL" should not contain anything besides lower case letters, numbers and dashes. Furthermore, it should be succinct and human-readable. A good example is "the-return-on-investment-for-architecture".
- The summary should be brief, no longer than one normal sentence or two very short ones. This appears below the article title on list pages and in the blue box at the top of the article.
- The 'featured' checkbox means that it may appear on the home page and other areas I haven't thought of yet. It basically just indicates that "this article is particularly good/interesting/popular/etc."
- It's a good practice to include the focus keyword, SEO title and SEO description but not necessary.

**Blog Posts**   
Same deal as articles, with a few differences-

- Tags are more important for blog posts. Tags are cool.
- There's a checkbox (on the right) to allow comments. Check this unless there's some reason not to (like if for whatever reason we're publishing something so controversial that we don't even want discussion).
- "slug" works the same way as the URL title in articles. Only letters, numbers and dashes. (eg, "this-is-a-well-formated-example-title")
- To schedule blog posts, set the pub date in the future, on the date you want to have it published.

**People**   
This one is a bit trickier. You can add people (this is just the information on the "business card" pages) but the route needs to be hard-coded in index.php   
**Pages**   
Just ignore this.   
  
**Forms**   
From the Forms screen, click the blue "view entries" button on the form you want to see the responses for.   
Editing or adding forms requires modifying the code.   
  
**DBBO Registration**   
We have a custom system to manage registration for DBBO. It's basically set up as a small PHP application inside of the website (independent of Cockpit). It's just in a subfolder called 'dbbo-registration' in the root of the website. When updating dates for DBBO, it's important to remember to update everything here, including the earlybird date (in the javascript) and the mailers.   
Eventually we will rewrite this as a flask app either hooked up to a database like sqlite or to AG.

<!-- section-nav:start -->

## In this section

- [AWS for D&B Set up](aws-for-db-set-up/)
- [Cronjob](cronjob/)
- [Deployment](deployment.md)
- [Fabric Install](fabric-install/)

<!-- section-nav:end -->
