
/* Institutions ***************************************************************/

$('a[id=cemfi]'        ).attr('href','https://www.cemfi.es/');
$('a[id=cunef]'        ).attr('href','https://www.cunef.edu/en/');
$('a[id=airef]'        ).attr('href','https://www.airef.es/en/');
$('a[id=ucm]'          ).attr('href','https://economicasyempresariales.ucm.es');

/* People *********************************************************************/

$('a[id=jim]'          ).attr('href','https://sites.google.com/site/jimcostain/');
$('a[id=anton]'        ).attr('href','https://sites.google.com/site/antonnakov/');
$('a[id=josep]'        ).attr('href','https://www.cemfi.es/~pijoan/Welcome.html');
$('a[id=nezih]'        ).attr('href','https://www.cemfi.es/~guner/');
$('a[id=jc]'           ).attr('href','https://jcruizgarcia.com/');
$('a[id=javi]'         ).attr('href','https://www.cemfi.es/studies/phd/lopez.asp');
$('a[id=enriquemoral]' ).attr('href','https://moralbenito.weebly.com/');
$('a[id=tonibraun]'    ).attr('href','https://www.frbatlanta.org/research/economists/braun-anton.aspx');

/* Defined links options *******************************************************/

$('a'                  ).attr('target','_blank');
$('a[class=simple]'    ).attr('target','_self');
$('a[class=toc]'       ).attr('target','_self');
$('a[class=toca]'      ).attr('target','_self');

/* Show/Hide functions *********************************************************/

$(document).on("click", "a.plus", function(event){
    event.preventDefault();
    $(this).next('.hidden').slideDown('slow');
    $(this).attr('class', 'minus');
});

$(document).on("click", "a.minus", function(event){
    event.preventDefault();
    $(this).next('.hidden').slideUp('slow');
    $(this).attr('class', 'plus');
});

$(document).on("click", "a.more", function(event){
    event.preventDefault();
    $(this).attr('class', 'less');
});

$(document).on("click", "a.less", function(event){
    event.preventDefault();
    $(this).attr('class', 'more');
});

function showhide(xx) {
  var x = document.getElementById(xx)
  if (x.style.display === "none") {
    $(x).slideDown('slow');
  } else {
    $(x).slideUp('slow');
  }
}

/******************************************************************************/
