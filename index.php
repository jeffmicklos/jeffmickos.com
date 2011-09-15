<?php

include 'lib/class.cache.php';

?>

<!doctype html>  
<html>
	<head>

		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  		<meta name="author" content="Jeff Micklos">
  		<meta name="description" content="The portfolio of Jeff Micklos, a pretty cool web developer and an all around okay guy.">
 
  		<link rel="meta" type="application/rdf+xml" title="FOAF" href="foaf.rdf">

		<link rel="stylesheet" href="<?php echo Cache::getFile('css'); ?>">
		
		<!-- smile, we are watching you =) -->
		
		<title>Jeff Micklos, I do stuff.</title>
		
		<script>
			jeffmicklos = {};
		</script>

	</head>
	<body>

		<div class="container clearfix">
			
			<div id="content">
				
				<div class="col-360 push-200">
					<h1>Jeff Micklos</h1>
					
					<h3 class="twenty">You may remember me from...</h3>
					
					<ul class="twenty twenty-bottom syncopated">
						<li>Growing up in San Diego</li>
						<li>Working at Yelp</li>
						<li>Radiohead's fanclub</li>
					</ul>
					
				</div>
				
				<div class="clearfix">
					<div class="col-360 push-40 left">
						<p>
						If it has been awhile, I have been living in San Francisco since May 2009, when I moved up here to be a Software Engineer for Yelp.
						I spend most of my time at Yelp doing front-endy stuff, you know, <abbr title="Hyper Text Markup Language">HTML</abbr>, <abbr title="Cascading Style Sheets">CSS</abbr>, Javascript and Python. Outside of those base technologies, I am really into <abbr title="XHTML Friends Network">XFN</abbr>, <abbr title="Friend of a Friend">FOAF</abbr>, Activity Streams and anything else that makes the web more open and connected.
						If you are into this kind of stuff, check out my <a href="http://github.com/jeffmicklos" rel="me" class="outside-link">github profile</a> or <a href="jMicklos_resume.pdf" class="outside-link">download my super out of date résumé</a>.
						</p>
					</div>
					
					<div class="col-160 left">
						<p>
						I am not a total nerd, though, I still love art and design &mdash; hopefully this page is testament to that.
						I am (like most, I would hope) into clean grid-based design that relies heavily on typographic hierarchy, or something.
						</p>
					</div>
				</div>
				
				<h2 class="sixty">Get more familiar&hellip;</h2>
				
				<h3 class="twenty twenty-bottom">I get paid to type on a keyboard.</h3>
				
				<p class="forty-bottom">
					This fact will always blow my mind and I am incredibly grateful for it.
					Sometimes I even get paid for moving pixels around to make pretty pictures.
					I often find myself designing like crazy during Yelp's 36-hour hackathons. I have made everything from a <a href="http://www.youtube.com/watch?v=BwVoir5HSo4" class="outside-link" target="_blank" title="stteeeelllllaaaaaaa!!">iPad app for our beer keg</a> to a <a href="http://onwebtape.com/hackathon" class="outside-link">photo browser</a> that programmatically chooses the best photos on Yelp to a <a href="/friendfinder" class="outside-link">friend finding application</a>.
					Beyond my hacking at Yelp, I designed the website for <a rel="lightbox" href="/images/wuyee_big.jpg" class="outside-link" title="Wu Yee: non-profit child care website design">Wu Yee</a>, a non-profit child care center in San Francisco.
					Less honorably, I have been maintaining a number of self-started projects, from blogging engines to dashboards to design blogs.
					If you are interested in digging through the treasure-trove of projects I have worked on, a handful of them are catalogued <a href="/old" target="_blank" class="outside-link">here</a>. Otherwise, here are some of my more recent designs, I guess:
				</p>
				
				<div class="clearfix">
					<div class="col-160 push-40 left">
						<a rel="lightbox" href="/images/wuyee_big.jpg" title="Wu Yee: non-profit child care website design">
							<img src="/images/wuyee_thumb.jpg" alt="">
						</a>
					</div>
					<div class="col-160 push-40 left">
						<a rel="lightbox" href="/images/webtape_big.jpg" title="Webtape: a lil' blogging engine I wrote">
							<img src="/images/webtape_thumb.jpg" alt="">
						</a>
					</div>
					<div class="col-160 left">
						<a rel="lightbox" href="images/kegmate_big.jpg" title="Kegmate: Yelp's beer dispensing iPad app">
							<img src="/images/kegmate_thumb.jpg" alt="">
						</a>
					</div>
				</div>
				
				<h3 class="twenty forty-top forty-bottom">Sometimes I take pictures but not too much anymore.</h3>
				
				<div class="clearfix shim-up">
									
					<div class="col-160 push-40 left">
						<a rel="lightbox" class="flickr-thumb-small forty-bottom" href="#">
							<!--<img src="images/flickr_1.jpg" alt="OOPS THIS IMAGE BROKE, LOL.">-->
						</a>
						<a rel="lightbox" class="flickr-thumb-small" href="#">
							<!--<img src="images/flickr_3.jpg" alt="sup Ray Charles?">-->
						</a>
					</div>
					
					<div class="col-360 left no-line-height">
						<a rel="lightbox" class="flickr-thumb-large" href="#">
							<!--<img src="images/flickr_2.jpg" alt="Nude pic #27">-->
						</a>
					</div>
					
				</div>
				
				<p class="top-20">
					A couple years ago my dad found an old film <abbr title="Single Lens Reflex">SLR</abbr> camera in a closet and gave it to me.
					Having never taken pictures on film before, I thought it would be a fun experiment. At that point, I could have never imagined how much I would suck at it.
					Lucky for me, this trusty old camera would make all my pictures look relatively passable, a huge plus.
					Way more importantly, I think if Thom Yorke (or even Colin Greenwood, I don't care) came across this lil' page, he might be impressed with these photos.
					And let's be honest, that is why I take pictures.
				</p>
				
				<h3 class="twenty forty-top forty-bottom">I made a small blog platform in 2007; I still write there occasionally.</h3>
				
				<ol id="blogposts">
					<li>
						<h4 class="thirty"><a href="http://onwebtape.com/blog/1247">Forever Longing The Golden Sunsets - Part 2</a></h4>
						<p>
							If Ok Computer and In Rainbows were never conceived, Arcade Fire would have a running chance to be better than Radiohead (someday, at least). I say this with confidence after just seeing Arcade Fire put on an amazing show at the Greek Theater, a show that easily ranks in my top 5 best performances. Although, the whole time I kept thinking how much Joe, Hazz and Mark would have enjoyed it. Interesting to note, this concert came exactly five years after seeing Sigur Ros for the first time.*** <a href="http://onwebtape.com/blog/1247" class="outside-link">Read More</a>
						</p>
					</li>
					<li>
						<h4 class="thirty"><a href="http://onwebtape.com/blog/1224">This Must be the Place</a></h4>
						<p>
							One huge philosophical qualm that comes with time travel is the tracking of self. Before we dive deeper into the matrix, I am going to assume that a) you believe in time travel and b) you believe that time travel produces a replicate version of yourself. If you do not prescribe, this would be a good time to go make a sandwich. So you get bored one day, make a branch of yourself and send it back six months in time (or however long, time is not the issue here, even though it totally is). You are now concurrently living two lives but which one is your life? The short answer is both, the long answer is neither.<br><a href="http://onwebtape.com/blog/1224" class="outside-link">Read More</a>
						</p>
					</li>
					<li>
						<h4 class="thirty"><a href="http://onwebtape.com/blog/1132">Certainly Everyone's Error</a></h4>
						<p>
							I have been feeling a bit under the weather recently but I think I am coming back from it, so fear not. Anyways, there are outstanding topics that I need to tell you guys! Such as, did you know that Coffee Grounds in Rancho actually has grade-A coffee? Surprising, huh? However, not everything is as ~*blasé*~ as that, I promise! For instance, I think that the fact that I bought a generously sized tub to put assorted crap into is pretty cool. The aforementioned tub is actually a Roughneck Jumbo and I put my own person Seal-of-Approval on it. <a href="http://onwebtape.com/blog/1132" class="outside-link">Read More</a>
						</p>
					</li>
				</ol>
				
				<h2 class="sixty" style="margin-top:-14px">Still not enough?</h2>
				
				<h3 class="twenty twenty-bottom">Things I have been into recently on certain sites.</h3>
				
				<h5>Google Reader</h5>

				<ol id="list-google" class="syndicated-list">
					<li class="preloader">
						<img src="images/loader.gif">
					</li>
				</ol>

				<div class="clearfix" style="margin-top: 15px;">
					
					<div class="col-160 left">
						<h5>Flickr</h5>
						<ol id="list-lastfm">
							<li class="preloader">
								<img src="images/loader.gif">
							</li>
						</ol>
					</div>
				
				<div class="col-360 push-40 left">
						<h5>Last.fm</h5>
						<ol id="list-flickr">
							<li class="preloader">
								<img src="images/loader.gif">
							</li>
						</ol>
					</div>
				</div>
			</div>
			
			<div id="sidebar">
				<div id="paint"></div>
			</div>
			
		</div>
		
		<div id="footer">
			<div class="container clearfix">
				<div class="col-360 right">
				
					<h2>Other forms of contact</h2>
					<h3 class="twenty twenty-bottom">My Facebook ID is 60712134 but you can just click the little pictures below.</h3>
					<ul id="profiles">
						<li class="facebook"><a href="http://facebook.com/jeffmicklos" rel="me">Facebook</a></li>
						<li class="linkedin"><a href="http://www.linkedin.com/in/jeffmicklos" rel="me">LinkedIn</a></li>
						<li class="twitter"><a href="http://twitter.com/jeffmicklos" rel="me">Twitter</a></li>
						<li class="flickr"><a href="http://flickr.com/photos/jeffmicklos" rel="me">Flickr</a></li>
						<li class="github"><a href="http://github.com/jeffmicklos" rel="me">Github</a></li>
						<li class="yelp"><a href="http://jeffmicklos.yelp.com" rel="me">Yelp</a></li>
						<li class="lastfm"><a href="http://last.fm/user/nowiknowforever" rel="me">Last.fm</a></li>
						<li class="dribbble"><a href="http://dribbble.com/jeffmicklos" rel="me">Dribbble</a></li>
					</ul>
				</div>
				<div class="col-360 push-240 left">
					<form action="ajax/contact.php" method="post" id="contact">
						<fieldset>
							<legend>Send a message</legend>
							<label for="name">Name</label>
							<input type="text" id="name" name="name" placeholder="Thom Yorke" required>
							<label for="email">Email</label>
							<input type="email" id="email" name="email" placeholder="dr.tchock@gmail.com" required>
							<label for="message">Message</label>
							<textarea name="comment" placeholder="my cool message"></textarea>
							<input type="hidden" name="action" value="contact">
							<input type="submit" class="button" value="Submit" formnovalidate>
						</fieldset>
					</form>
				</div>
			</div>
		</div>

		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.5.2/jquery.min.js"></script>
		<script src="http://jeffmicklos.com<?php echo Cache::getFile('js'); ?>"></script>
				
		<script>
			
			$(document).ready(function() {
				
				new jeffmicklos.Gallery();
				new jeffmicklos.ContactForm();
				new jeffmicklos.Painter();
				new jeffmicklos.SocialActivity();
				
				jeffmicklos.Util.setupLightbox();
				
			});
			
		</script>
		
		<script type="text/javascript">
		  var _gaq = _gaq || [];
		  _gaq.push(['_setAccount', 'UA-25310300-1']);
		  _gaq.push(['_trackPageview']);
		
		  (function() {
		    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
		    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
		    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
		  })();
		</script>

	</body>
</html>