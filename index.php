<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <title>Elion Emini - developer portfolio</title>

    <!--SEO-->
    <meta name="description" content="The portfolio of Elion Emini, an Albanian full-stack developer based in Tirana, Albania." />
	<meta name="keywords" content="Elion, Emini, Elion Emini, web design, graphic design, websites, graphics, illustration, freelance, developer" />
	<meta name="robots" content="index, follow" />

    <!--Font-->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Clicker+Script&display=swap" rel="stylesheet">

	<link href="https://fonts.googleapis.com/css2?family=Poiret+One&display=swap" rel="stylesheet">
    
	<!--  CSS  -->
    <link href="css/bootstrap.min.css" rel = "stylesheet"/>
    <link rel="stylesheet" href="styles.css">

    <!--  jQuery -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <!--  Javascript  -->
    <script src="script.js"></script>
</head>

<body>
    
    <?php include "header.php" ?>
    
    <section id="first-disp" >
                <img id="cloud1" src="images/cloud.png" alt="">

				
				<div id="tekst1">
					<div class="teksti">
						<h1>I'm Elion</h1>
					</div>
					<div id="teksttt" class="typing-container">
						<h3><span id="sentence" class="sentence"></span>
						<span class="input-cursor"></span>
						</h3>
					</div>
				</div>
				
                <img id="cloud2" src="images/cloud.png" alt="">
             
    </section>
	<hr>
	
    <section id="hi">
        <div class="d-flex justify-content-center">
            <img src="images/profile.jpg" width="150px" height="150px" alt="logo"></img>
        </div>
        <div class="d-flex justify-content-center text-center py-3">
            <h3>Hi,</h3>
        </div>
        <div id="hi_text" class="d-flex justify-content-center text-center">
            <p>I am an enthusiastic, diligent, and fast-learning IT student, <br>
                driven by a desire to help others and improve myself. <br>
                I like music, playing the guitar, photography, reading, and programming. <br>
                I spend my free time with my family, going out for walks in nature, <br>
                or making memories with friends.
            </p>
        </div>
    </section>
	<hr>

    <section id="what-i-do">
		<div class="container">
			<div class="row">
				<div class="col-md-12">

					<article>
						<header class="d-flex cursive justify-content-center py-5" >
							<h2 style="font-size: 3.5rem;" >What I can do.</h2>
						</header>
						
						<div id="design" class="row align-items-center justify-content-end">
							<div class="col-md-6 text-center">
								<div class="deets">
									<h3 class="cursive">Design what you want.</h3>
									<p>I like to keep it simple. My goals are to focus on typography, content and conveying the message that you want to send.</p>
								</div>
							</div>
							<div class="col-md-4 col-md-offset-1">
									<div class="home-design-info">
										<figure>
											<img  id="img1" width="70%" src="images/web-design1.jpg">
										</figure>
										<div class="bubble right">
											<div class="bubbling-design-icons-vert"></div>
										</div>			
									</div>
							</div> <!-- 4 -->

						</div> <!-- /row -->
					
					
						<div id="develop" class="row align-items-center justify-content-start">
							<div class="col-md-4 col-md-push-7">
								<div class="home-dev-info">
										<figure>
											<img id="img2" width="80%" src="images/simple-program1.jpg">
										</figure>		
									</div>
							</div> <!-- col -->
							<div class="d-felx col-md-6 col-md-pull-3 text-center">
									<div class="deets">
									<h3 class="cursive">Develop what you need.</h3>
									<p>I'm a developer, so I know how to create your website to run across devices using the latest technologies available.</p>
								</div>
							</div> <!-- col -->
						</div> <!-- /row -->
					
					
					
					</article>
				
				</div>
				
			</div>
				
		</div>

	
	</section>
	
	<hr>
    <section id="i-can-help">
		<div class="container">
			<div class="row">
				<div class="col-md-12 text-center">
					<article>
						<header>
							<h2 class="py-4 cursive">I can help.</h2>
							<h3 class="py-3">I&rsquo;m ready to work with you and your team.</h3>
						</header>
						<p style="padding-bottom: 1rem;">If you have a project that you want to get started, think you need my help <br>
						with something or just fancy saying hey, then get in touch.</p>
						
						<a href="contact.php">
							<button type="button" class="btn btn-primary" style="border-radius: 20px;" href="contact.php" width="151px" height="59px">
                            Contact me
                        	</button>
						</a>
						
					</article>
				</div>
			</div>
		</div>
	</section>


	<?php include "footer.php" ?>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
</body>
</html>