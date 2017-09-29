UPDATE party 
SET guests = array_append(guests, $1) 
WHERE party_Id = $2;