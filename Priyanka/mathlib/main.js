Weed out a person out of dictionary<script src="main.js">
var new_ninja = {
 name: 'Jessica',
 profession: 'coder',
 favorite_language: 'JavaScript', //like that's even a question!
 dojo: 'Dallas'
}
var new_ninja = {
 name: 'Jessica',
 profession: 'coder',
 favorite_language: 'JavaScript', //like that's even a question!
 dojo: 'Dallas'
}
for (var prop in new_ninja) {
  console.log(prop + " = " + new_ninja[prop]);
}
</script>
