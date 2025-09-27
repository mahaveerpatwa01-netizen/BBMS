function showDonorForm(){
  document.getElementById('donorSection').style.display='block';
  document.getElementById('receiverSection').style.display='none';
}
function showReceiverForm(){
  document.getElementById('receiverSection').style.display='block';
  document.getElementById('donorSection').style.display='none';
}

document.getElementById('donorForm').addEventListener('submit',function(e){
  e.preventDefault();
  alert('Thank you! Our team will contact you shortly.');
  this.reset();
});

document.getElementById('receiverForm').addEventListener('submit',function(e){
  e.preventDefault();
  const bloodType=this.querySelector('select').value;
  document.getElementById('hospitalResults').innerHTML=
  `<h4>Hospitals providing ${bloodType}:</h4>
  <ul>
    <li>City Hospital - MG Road</li>
    <li>Red Cross Blood Bank - Shivaji Nagar</li>
    <li>LifeCare Hospital - Pune Station</li>
  </ul>`;
  this.reset();
});