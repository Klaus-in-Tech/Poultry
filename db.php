<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

<?php
 //create connection
 $connect=mysqli_connect('localhost','root','odksql','odk_db');

 $result=mysqli_query($connect,"select * from BUILD_POULTRY_FORM_1523973015_CORE where DATE= '".$_POST['DATE']."' ");

?>
<center><h1>Poultry</h1></center>
<table width="500" cellpadding=5celspacing=5 border=1 class="table table-hover">
<thead>
	<tr>
	        
		<th scope="col">SUBMISSION DATE</th>
		<th scope="col">SITE LATITUDE</th>
                <th scope="col">CLIENT NAME</th>
		<th scope="col">SITE ACCURACY </th>
		<th scope="col"> AVERAGE WEIGHT</th>
		<th scope="col"> SITE LONGITUDE </th>
		<th scope="col"> SITE ALTITUDE </th>
		<th scope="col"> BIRD TYPES </th>
		<th scope="col"> DRINKER TYPES </th>
		<th scope="col"> FEEDER TYPES </th>
			
	</tr>
</thead>
	<?php while($row=mysqli_fetch_array($result)):?>
<tbody>
		<tr>
 
			<td><?php echo $row['DATE'];?></td>
			<td><?php echo $row['SITE_LOCATION_LAT'];?></td>
                        <th><?php echo $row['CLIENT_NAME'];?></td>
			<td><?php echo $row['SITE_LOCATION_ACC'];?></td>
			<td><?php echo $row['AVERAGE_WEIGHT'];?></td>
			<td><?php echo $row['SITE_LOCATION_LNG'];?></td>
			<td><?php echo $row['SITE_LOCATION_ALT'];?></td>
			<td><?php echo $row['BIRD_TYPES'];?></td>
			<td><?php echo $row['TYPE_OF_DRINKERS'];?></td>
			<td><?php echo $row['TYPE_OF_FEEDERS'];?></td>
		</tr>
</tbody>
	<?php endwhile;?> 
</table>

