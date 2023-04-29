<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <title>Elion Emini - Contact</title>

    <!--SEO-->
    <meta name="description" content="The portfolio of Elion Emini, an Albanian full-stack developer based in Tirana, Albania." />
	<meta name="keywords" content="Elion, Emini, Elion Emini, web design, graphic design, websites, graphics, illustration, freelance, developer" />

    <!--Font-->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Clicker+Script&display=swap" rel="stylesheet">

    <!--  CSS  -->
    <link href="css/bootstrap.min.css" rel = "stylesheet"/>
    <link rel="stylesheet" href="styles.css">

    <!--  jQuery -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <!--  Javascript  -->
    <script src="script.js"></script>
</head>
<body>
    <?php include "h_pink.php" ?>

    <section id ="contactMe">
        <div  class="d-flex justify-content-center align-items-center">

            <div id="part1" class="d-flex col-6 row-sm-12 justify-content-center align-items-center text-center">
                <h2 id="contact-text">
                    Have a project?<br>
                    I would love<br>
                    to help.
                </h2>
            </div>

            <div id="part2" class="d-flex col-6 row-sm-12 justify-content-center">
                <div class="form bg-transparent">

                    <form id="homepageform" class="info bg-transparent" action="" method="POST" enctype="multipart/form-data">
                        <input class="fullname" type="text" name="fullname" placeholder="Fullname">
                        <input type="email" name="email" placeholder="Email">
                        <input type="text" name="subject" placeholder="Subject">
                        <input type="text" name="message" placeholder="Message">
                        <input type="file" id="myFile" name="file">                        
                        <br>
                     
                        <button id ="contact_button" type="submit" name="submit" class="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>


    <!--FOOTER-->
    <?php include "footer.php" ?>

    <!--LIDHJA ME DATABAZEN-->
    <?php
        require "./Database/dbconfig.php";
        if(isset($_POST['submit'])) {
            $fullname = $_POST['fullname'];
            $email = $_POST['email'];
            $subject = $_POST['subject'];
            $message = $_POST['message'];
            $image = basename($_FILES["file"]["name"]);
            $target_dir = "Database/uploads/";
            $target_file = $target_dir . basename($_FILES["file"]["name"]);
            $imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
            if(!empty($_FILES["file"]["name"])) {
            $alloTypes = array('pdf','doc','docx','xml');
            if (in_array($imageFileType, $alloTypes)) {
                if(move_uploaded_file($_FILES["file"]["tmp_name"], $target_file)) {
                $sql = "INSERT INTO work(fullname, email, subject, message, file) VALUES('$fullname', '$email', '$subject', '$message', '$file')";
                if($conn->query($sql) === TRUE) {
                    echo "<script>alert('Data inserted successfully!');</script>";
                } else {
                    echo "Something went wrong";
                }
                }
            }
            }else{
            $sql = "INSERT INTO work(fullname, email, subject, message, file) VALUES('$fullname', '$email', '$subject','$message', '$file')";
            if($conn->query($sql) === TRUE) {
                echo "Data inserted successfully!";
            } else {
                echo "Something went wrong";
            }
            }
        }
        $conn->close();
    ?>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script> 
</body>
</html>