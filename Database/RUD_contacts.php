<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lista e kontakteve</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
</head>
<body>
<section id="">
    <div class="container">
        <div class="row">
            <div class="col text-center">
                <table class="table">
                    <thead>
                        <th>id</th>
                        <th>Full name</th>
                        <th>Email</th>
                        <th>Subject</th>
                        <th>Message</th>
                        <th>Image</th>
                        <th>Action</th>
                    </thead>
                    <tbody>
                        <?php 
                            require "./dbconfig.php";
                            $sql = "SELECT * FROM work ORDER BY id DESC";
                            $result = $conn->query($sql);
                            if($result->num_rows > 0) {
                                while($row = $result->fetch_assoc()) {
                                    $id = $row['id'];
                        ?>
                        <!-- leximi i rreshtave nga databaza  -->
                        <tr>
                            <td><?php echo $row['id']; ?></td>
                            <td><?php echo $row['fullname']; ?></td>
                            <td><?php echo $row['email']; ?></td>
                            <td><?php echo $row['subject']; ?></td>                            
                            <td><?php echo $row['message']; ?></td>
                            <td><?php echo $row['file']; ?></td>
                            <td>
                                <button type="button" class="btn btn-primary mb-2" data-bs-toggle="modal" data-bs-target="#Modal<?php echo $row['id']; ?>">Update</button>
                                <button type="button" class="btn btn-danger mb-2" data-bs-toggle="modal" data-bs-target="#Delete<?php echo $row['id']; ?>">Delete</button>
                        </td>
                            <!-- ne momentin e therritjes se nje modali duhet qe modali te jete brenda iteracionit, si dhe ne targetin e butonit dhe ne id e modalit duhet te behet
                        echo id specifike -->
                                    <!-- UPDATE-->
                            <div class="modal fade" id="Modal<?php echo $row['id']; ?>" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                <form action="" method="POST" enctype="multipart/form-data">
                                    <div class="container">
                                        <div class="row">
                                            <div class="col text-center">
                                                <p class="title">Dergoni kontaktin tuaj</p>
                                            </div>
                                        </div>
                                        <input type="hidden" name="id" value="<?php echo $row['id']; ?>">
                                        <div class="row mb-2">
                                            <div class="col-6">
                                                <input type="text" value="<?php  echo $row['fullname']; ?>" name="fullname" class="form-control" placeholder="Full name">
                                            </div>
                                            <div class="col-6">
                                                <input type="email" value="<?php  echo $row['email']; ?>" name="email" class="form-control" placeholder="Email"> 
                                            </div>
                                        </div>
                                        <div class="row mb-2">
                                            <div class="col-12">
                                                <input type="text" value="<?php echo $row['subject']; ?>" name="subject" class="form-control" placeholder="Subject">
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-12">
                                                <textarea name="message" class="form-control"><?php echo $row['message']; ?></textarea>
                                            </div>
                                        </div>
                                        <div class="row mt-4">
                                            <div class="col-12">
                                                <button type="submit" name="update" class="btn btn-success"> Dergo te dhenat</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                </div>
                                </div>
                            </div>
                            </div>
                                    <!-- DELETE-->
                            <div class="modal fade" id="Delete<?php echo $row['id']; ?>" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                <form action="" method="POST" enctype="multipart/form-data">
                                    <div class="container">
                                        <div class="row">
                                            <div class="col text-center">
                                                <p class="title">Fshini kontaktin tuaj</p>
                                            </div>
                                        </div>
                                        <input type="hidden" name="id" value="<?php echo $row['id']; ?>">
                                        <button type="submit" name="delete">Fshi tani</button>
                                    </div>
                                </form>
                                </div>
                                </div>
                            </div>
                            </div>
                        </tr>
                        <?php }} ?>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</section>


<?php
require "./dbconfig.php";
if(isset($_POST['update'])) {
    $id = $_POST['id'];
    $fullname = $_POST['fullname'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    $image = $_POST['file'];

    $sql = "UPDATE work SET fullname='$fullname', email='$email', subject = '$subject', message='$message', file='$file' WHERE id='$id'";
    if($conn->query($sql) === TRUE) {
        echo "Data inserted successfully!";
    } else {
        echo "Something went wrong";
    }
}
if(isset($_POST['delete'])) {
    $id =$_POST['id'];
    $sql = "DELETE FROM work WHERE id='$id'";
    if($conn->query($sql) === TRUE) {
        echo "Data deleted successfully!";
    } else {
        echo "Something went wrong";
    }
}
$conn->close();
?>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
</body>
</html>